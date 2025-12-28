import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { Pool } from 'pg'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.use(express.json())
const corsOrigin = process.env.CORS_ORIGIN || '*'
app.use(cors({ origin: corsOrigin, credentials: false }))

const pool = new Pool({ connectionString: process.env.DATABASE_URL })
const JWT_SECRET = process.env.JWT_SECRET || 'change_me'

async function ensureSchema() {
  await pool.query(`
    DO $$
    BEGIN
      IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'request_status') THEN
        CREATE TYPE request_status AS ENUM ('pending','in_progress','completed','cancelled');
      END IF;
    END$$;
  `)
  await pool.query(`
    DO $$
    BEGIN
      IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'user_role') THEN
        CREATE TYPE user_role AS ENUM ('admin','staff','customer');
      END IF;
    END$$;
  `)
  await pool.query(`
    CREATE TABLE IF NOT EXISTS settings (
      id integer PRIMARY KEY DEFAULT 1,
      hero_title text NOT NULL,
      logo_size text NOT NULL DEFAULT 'md',
      updated_at timestamptz NOT NULL DEFAULT now()
    );
  `)
  await pool.query(`
    INSERT INTO settings (id, hero_title, logo_size)
    VALUES (1, 'سافر بسهولة وثقة', 'md')
    ON CONFLICT (id) DO NOTHING;
  `)
  await pool.query(`
    CREATE TABLE IF NOT EXISTS requests (
      id serial PRIMARY KEY,
      name text NOT NULL,
      phone text NOT NULL,
      service text NOT NULL,
      country text,
      notes text,
      status request_status NOT NULL DEFAULT 'pending',
      created_at timestamptz NOT NULL DEFAULT now(),
      updated_at timestamptz NOT NULL DEFAULT now()
    );
  `)
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id serial PRIMARY KEY,
      username text UNIQUE NOT NULL,
      email text UNIQUE,
      password_hash text NOT NULL,
      role user_role NOT NULL DEFAULT 'admin',
      created_at timestamptz NOT NULL DEFAULT now()
    );
  `)
  const { rows } = await pool.query('SELECT COUNT(*)::int AS c FROM users')
  if (rows[0]?.c === 0) {
    const hashed = await bcrypt.hash('admin123', 10)
    await pool.query('INSERT INTO users (username, password_hash, role) VALUES ($1,$2,$3)', ['admin', hashed, 'admin'])
    console.log('Default admin: admin / admin123')
  }
}

function auth(req, res, next) {
  const h = req.headers.authorization || ''
  const token = h.startsWith('Bearer ') ? h.slice(7) : null
  if (!token) return res.status(401).json({ error: 'no_token' })
  try {
    const payload = jwt.verify(token, JWT_SECRET)
    req.user = payload
    next()
  } catch { return res.status(401).json({ error: 'bad_token' }) }
}

function requireAdmin(req, res, next) {
  if (req.user?.role !== 'admin') return res.status(403).json({ error: 'forbidden' })
  next()
}

app.post('/api/auth/login', async (req, res) => {
  const { username, password } = req.body || {}
  try {
    const { rows } = await pool.query('SELECT * FROM users WHERE username = $1', [username])
    const user = rows[0]
    if (!user) return res.status(401).json({ error: 'not_found' })
    const ok = await bcrypt.compare(password, user.password_hash)
    if (!ok) return res.status(401).json({ error: 'bad_password' })
    const token = jwt.sign({ sub: user.id, role: user.role, username: user.username }, JWT_SECRET, { expiresIn: '7d' })
    res.json({ token })
  } catch (e) { res.status(500).json({ error: 'login_failed' }) }
})

app.get('/api/settings', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT hero_title, logo_size FROM settings WHERE id = 1')
    res.json(rows[0] || { hero_title: 'سافر بسهولة وثقة', logo_size: 'md' })
  } catch { res.status(500).json({ error: 'failed_settings_get' }) }
})

app.put('/api/settings', auth, requireAdmin, async (req, res) => {
  const { hero_title, logo_size } = req.body || {}
  try {
    await pool.query('UPDATE settings SET hero_title = $1, logo_size = $2, updated_at = now() WHERE id = 1', [hero_title, logo_size])
    res.json({ ok: true })
  } catch { res.status(500).json({ error: 'failed_settings_put' }) }
})

app.get('/api/requests', auth, requireAdmin, async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM requests ORDER BY created_at DESC')
    res.json(rows)
  } catch { res.status(500).json({ error: 'failed_requests_get' }) }
})

app.post('/api/requests', async (req, res) => {
  const { name, phone, service, country, notes } = req.body || {}
  try {
    const { rows } = await pool.query(
      'INSERT INTO requests (name, phone, service, country, notes) VALUES ($1,$2,$3,$4,$5) RETURNING *',
      [name, phone, service, country, notes]
    )
    res.status(201).json(rows[0])
  } catch { res.status(500).json({ error: 'failed_requests_post' }) }
})

app.patch('/api/requests/:id', auth, requireAdmin, async (req, res) => {
  const { id } = req.params
  const { status = 'completed' } = req.body || {}
  try {
    const { rowCount } = await pool.query('UPDATE requests SET status = $1, updated_at = now() WHERE id = $2', [status, id])
    res.json({ ok: rowCount > 0 })
  } catch { res.status(500).json({ error: 'failed_requests_patch' }) }
})

app.delete('/api/requests/:id', auth, requireAdmin, async (req, res) => {
  const { id } = req.params
  try {
    const { rowCount } = await pool.query('DELETE FROM requests WHERE id = $1', [id])
    res.json({ ok: rowCount > 0 })
  } catch { res.status(500).json({ error: 'failed_requests_delete' }) }
})

const port = process.env.PORT || 4000
ensureSchema().then(() => {
  app.listen(port, () => console.log(`API running on http://localhost:${port}`))
}).catch((e) => {
  console.error('Failed to init schema', e)
  process.exit(1)
})

if (process.env.NODE_ENV === 'production') {
  const uiPath = path.join(__dirname, '../futurevision-ui/dist')
  app.use(express.static(uiPath))
  app.get('*', (req, res) => {
    if (req.originalUrl.startsWith('/api')) {
      return res.status(404).json({ error: 'not_found' })
    }
    res.sendFile(path.join(uiPath, 'index.html'))
  })
}