import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import { Link as RouterLink } from 'react-router-dom'
import GlassCard from '../components/GlassCard'
import GlowButton from '../components/GlowButton'
import { motion, useScroll, useTransform } from 'framer-motion'
import ParticleBackground from '../components/ParticleBackground'
import Particles from '../components/Particles'
import Tilt from '../components/Tilt'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -120])
  return (
    <>
      <Box sx={{
        py: 12,
        textAlign: 'center',
        position: 'relative',
        background: 'radial-gradient(1000px 400px at 50% -120%, rgba(212,175,55,0.25), transparent), linear-gradient(#0b1220, #0b1220)'
      }}>
        <ParticleBackground />
        <motion.div style={{ position: 'absolute', inset: 0, y }}>
          <Particles count={28} />
        </motion.div>
        <Container maxWidth="lg">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <Box component="img" src="/logo.jpg" alt="Future Vision" sx={{ width: 140, height: 'auto', mb: 2, filter: 'drop-shadow(0 0 14px rgba(141,112,255,0.4))' }} />
            <Typography variant="h2" sx={{ mb: 2, letterSpacing: 1 }}>Future Vision</Typography>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }}>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            بوابة موثوقة لخدمات الفيزا والإجراءات والوظائف.
          </Typography>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }}>
          <GlowButton component={RouterLink} to="/visa/uganda" variant="contained" color="primary" sx={{ mx: 1 }}>
            ابدأ طلب فيزا يوغندا
          </GlowButton>
          <GlowButton component={RouterLink} to="/jobs" variant="outlined" color="secondary" sx={{ mx: 1 }}>
            استكشف الوظائف
          </GlowButton>
          </motion.div>
        </Container>
      </Box>

      <Container sx={{ py: 8 }}>
        <Grid container spacing={3}>
          {[
            { title: 'فيزا يوغندا', desc: 'نموذج بسيط متعدد الخطوات للتقديم.', to: '/visa/uganda' },
            { title: 'إجراءات السعودية', desc: 'قائمة إجراءات منظمة وواضحة.', to: '/procedures/saudi' },
            { title: 'فرص الوظائف', desc: 'ابحث وقدّم بسهولة.', to: '/jobs' }
          ].map((item) => (
            <Grid item xs={12} md={4} key={item.title}>
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
              <Tilt>
              <GlassCard sx={{ transformStyle: 'preserve-3d' }}>
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 1 }}>{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                  <Button component={RouterLink} to={item.to} size="small">تصفّح</Button>
                </CardActions>
              </GlassCard>
              </Tilt>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}
