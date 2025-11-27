import { useEffect, useRef } from 'react'

export default function ParticleBackground() {
  const ref = useRef<HTMLCanvasElement>(null)
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = ref.current!
    const ctx = canvas.getContext('2d')!
    let w = (canvas.width = window.innerWidth)
    let h = (canvas.height = window.innerHeight)
    const particles = Array.from({ length: 90 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      r: Math.random() * 1.8 + 0.6,
      c1: 'rgba(46,124,194,0.8)',
      c2: 'rgba(141,112,255,0.8)'
    }))

    const onResize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }
    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onMove)

    let raf = 0
    const loop = () => {
      ctx.clearRect(0, 0, w, h)
      ctx.globalCompositeOperation = 'lighter'
      for (const p of particles) {
        p.x += p.vx + (mouse.current.x - w / 2) * 0.00003
        p.y += p.vy + (mouse.current.y - h / 2) * 0.00003
        if (p.x < -10) p.x = w + 10
        if (p.x > w + 10) p.x = -10
        if (p.y < -10) p.y = h + 10
        if (p.y > h + 10) p.y = -10
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6)
        g.addColorStop(0, p.c1)
        g.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
      raf = requestAnimationFrame(loop)
    }
    loop()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return <canvas ref={ref} style={{ position: 'fixed', inset: 0, zIndex: 1, opacity: 0.6, pointerEvents: 'none' }} />
}
