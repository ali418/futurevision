import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import { Link as RouterLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import ParticleBackground from '../components/ParticleBackground'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import logo from '../assets/logo.png'

import React, { useState } from 'react'

export default function Home() {
  const [logoFailed, setLogoFailed] = useState(false)
  const [heroTitle] = useState(() => localStorage.getItem('fv_hero_title') || 'سافر بسهولة وثقة')
  const [logoSizeKey] = useState<'sm'|'md'|'lg'>(() => (localStorage.getItem('fv_logo_size') as 'sm'|'md'|'lg') || 'md')
  const logoW = logoSizeKey === 'sm' ? { xs: 180, sm: 240, md: 280 } : logoSizeKey === 'lg' ? { xs: 260, sm: 340, md: 420 } : { xs: 220, sm: 300, md: 360 }
  return (
    <>
      <Box sx={{ py: { xs: 8, md: 10 }, textAlign: 'center', position: 'relative', background: 'radial-gradient(1200px 600px at 50% -200px, rgba(14,165,233,0.12), rgba(7,21,33,0.96) 40%), linear-gradient(#071521, #071521)' }}>
        <ParticleBackground />
        <Container maxWidth="lg">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <Box sx={{ position: 'absolute', left: '50%', top: { xs: 80, md: 100 }, transform: 'translateX(-50%)', width: { xs: '74vw', md: '48vw' }, height: { xs: '74vw', md: '48vw' }, borderRadius: '50%', background: 'radial-gradient(closest-side, rgba(14,165,233,0.22), rgba(14,165,233,0.08) 45%, transparent 70%)', filter: 'blur(16px)', zIndex: 0, pointerEvents: 'none' }} />
            <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
              {!logoFailed && (
                <Box
                  component="img"
                  src={logo}
                  alt="Future Vision"
                  onError={() => setLogoFailed(true)}
                  sx={{ width: logoW, maxWidth: 'min(82vw, 520px)', objectFit: 'contain', filter: 'drop-shadow(0 12px 32px rgba(14,165,233,0.32))', opacity: 1, zIndex: 1 }}
                />
              )}
            </Box>
            <Typography variant="h3" sx={{ mb: 1, fontWeight: 800, letterSpacing: 3, background: 'linear-gradient(90deg,#e8cf88,#d7b865,#b58e3c)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', textShadow: '0 0 16px rgba(255,215,0,0.18)' }}>FUTURE VISION</Typography>
            <Typography color="text.secondary" sx={{ mb: 3 }}>{heroTitle}</Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button component={RouterLink} to="/visa/uganda" variant="contained">ابدأ طلب فيزا</Button>
              <Button component={RouterLink} to="/procedures/saudi-residency/uganda" variant="outlined">إقامة السعودية</Button>
            </Stack>
            <Box sx={{ mt: 3, display: 'flex', gap: 1, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Chip label="أوغندا" />
              <Chip label="السعودية" />
              <Chip label="الإمارات" />
              <Chip label="مصر" />
              <Chip label="ماليزيا" />
            </Box>
          </motion.div>
        </Container>
      </Box>

      <SectionHeader title="خدمات رئيسية" subtitle="اختر الخدمة المناسبة لك وابدأ فوراً" />
      <Container sx={{ pb: 8 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <ServiceCard title="فيزا يوغندا" desc="نموذج واضح للتقديم مع رفع المستندات" action="تقديم" to="/visa/uganda" />
          </Grid>
          <Grid item xs={12} md={4}>
            <ServiceCard title="إجراءات إقامة السعودية" desc="حزم متنوعة تناسب احتياجك وميزانيتك" action="استعراض الحزم" to="/procedures/saudi-residency/uganda" />
          </Grid>
          <Grid item xs={12} md={4}>
            <ServiceCard title="سياحة ووجهات" desc="اكتشف الوجهات المميزة وبرامج الرحلات" action="تصفّح" to="/tourism/uganda" />
          </Grid>
          <Grid item xs={12} md={4}>
            <ServiceCard title="تفويض التأشيرة – كمبالا" desc="DON-MO CONTRACTORS LTD licence NO:E24070011" action="" />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
