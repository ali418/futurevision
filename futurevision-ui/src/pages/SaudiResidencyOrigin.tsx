import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActionArea from '@mui/material/CardActionArea'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded'
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded'
import DiamondRoundedIcon from '@mui/icons-material/DiamondRounded'
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import ReactCountryFlag from 'react-country-flag'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

export default function SaudiResidencyOrigin() {
  const { origin } = useParams()
  const [expanded, setExpanded] = useState(false)
  const originLabelMap: Record<string, string> = { sudan: 'السودان', uganda: 'أوغندا', uae: 'الإمارات' }
  const flagCodeMap: Record<string, string> = { sudan: 'SD', uganda: 'UG', uae: 'AE' }
  const originLabel = originLabelMap[(origin || '').toLowerCase()] || origin
  const flagCode = flagCodeMap[(origin || '').toLowerCase()] || 'UG'

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>إقامة السعودية - جهة القدوم: {originLabel}</Typography>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
          🔥 ثلاث بطاقات... بثلاث تجارب مختلفة... لكن جميعها تُوصلك إلى أوغندا براحة وثقة!
          <Box component="span" sx={{ ml: 1, verticalAlign: 'middle' }}>
            <ReactCountryFlag countryCode={flagCode} svg style={{ width: '1.4em', height: '1.4em' }} />
          </Box>
        </Typography>
        <Typography color="text.secondary">
          نحن لا نقدم خدمات سفر فقط... نصنع تجربة مُحكمة التفاصيل، محسوبة الخطوات، ومصممة خصيصًا لتناسب أسلوبك وميزانيتك.
        </Typography>
        <Box sx={{ mt: 1 }}>
          <Chip label={`إقامة السعودية - جهة القدوم: ${originLabel}`} sx={{ background: 'rgba(99,102,241,0.15)', color: '#fff' }} icon={<ReactCountryFlag countryCode={flagCode} svg style={{ width: '1.2em', height: '1.2em' }} />} />
        </Box>
      </Box>

      {!expanded && (
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 0, overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.25)' }}>
              <CardActionArea onClick={() => setExpanded(true)}>
                <Box sx={{
                  p: 5,
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, #6EE7B7 0%, #3B82F6 100%)',
                  color: '#fff'
                }}>
                  <Stack spacing={1} alignItems="center">
                    <LocalOfferRoundedIcon sx={{ fontSize: 48 }} />
                    <Typography variant="h5" sx={{ fontWeight: 800 }}>الباقات</Typography>
                    <Typography sx={{ opacity: 0.9 }}>اضغط لعرض بطاقات VIP، البلاتينية، والبرونزية</Typography>
                  </Stack>
                </Box>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      )}

      {expanded && (
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card sx={{ borderRadius: 0, overflow: 'hidden', boxShadow: '0 15px 40px rgba(245, 158, 11, 0.35)', transition: 'transform .2s', ':hover': { transform: 'translateY(-4px)' } }}>
              <Box sx={{ p: 3, background: 'linear-gradient(135deg, #FDE68A 0%, #F59E0B 100%)', color: '#111827', display: 'flex', alignItems: 'center', gap: 1 }}>
                <WorkspacePremiumRoundedIcon />
                <Typography variant="h6" sx={{ fontWeight: 800 }}>بطاقة كبار الشخصيات – VIP Card</Typography>
              </Box>
              <CardContent>
                <Stack spacing={1}>
                  <Typography>🔸 استقبال في المطار</Typography>
                  <Typography>🔸 إقامة في فندق راقٍ ومريح فقط 🏨</Typography>
                  <Typography>🔸 سيارة خاصة للتوصيل إلى المطار عند المغادرة 🚘</Typography>
                  <Typography>🔸 سيارة خاصة للتنقل داخل البلاد وتخليص المعاملات 🚗</Typography>
                  <Typography>🔸 مرافق خاص محترف لمتابعة وإنهاء الإجراءات الرسمية</Typography>
                  <Typography>🔸 جولتان سياحيتان مع مرشد لمعالم المنطقة 🌿🗺️</Typography>
                  <Typography sx={{ mt: 1, fontWeight: 700 }}>راحة VIP… سرعة إنجاز… وتجربة فيها تميّز من غير مجهود!</Typography>
                  <Button variant="contained" sx={{ mt: 2 }}>اختر هذه الباقة</Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ borderRadius: 0, overflow: 'hidden', boxShadow: '0 15px 40px rgba(99, 102, 241, 0.35)', transition: 'transform .2s', ':hover': { transform: 'translateY(-4px)' } }}>
              <Box sx={{ p: 3, background: 'linear-gradient(135deg, #C7D2FE 0%, #6366F1 100%)', color: '#0f172a', display: 'flex', alignItems: 'center', gap: 1 }}>
                <DiamondRoundedIcon />
                <Typography variant="h6" sx={{ fontWeight: 800 }}>بطاقة الإجراءات والمعاملات – Procedures Card</Typography>
              </Box>
              <CardContent>
                <Stack spacing={1}>
                  <Typography>✅ استقبال في المطار</Typography>
                  <Typography>✅ حجز فندق مميز فقط ⭐🏨</Typography>
                  <Typography>✅ سيارة خاصة للتنقل داخل البلاد لتخليص المعاملات</Typography>
                  <Typography>✅ مرافق مسؤول عن متابعة وإنهاء كل الإجراءات</Typography>
                  <Typography>❌ بدون رحلات سياحية</Typography>
                  <Typography sx={{ mt: 1, fontWeight: 700 }}>تركيز كامل على النجاح… من غير تشتيت!</Typography>
                  <Button variant="contained" sx={{ mt: 2 }}>اختر هذه الباقة</Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ borderRadius: 0, overflow: 'hidden', boxShadow: '0 15px 40px rgba(192, 132, 52, 0.35)', transition: 'transform .2s', ':hover': { transform: 'translateY(-4px)' } }}>
              <Box sx={{ p: 3, background: 'linear-gradient(135deg, #FDE2B3 0%, #C08452 100%)', color: '#0f172a', display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmojiEventsRoundedIcon />
                <Typography variant="h6" sx={{ fontWeight: 800 }}>البطاقة البرونزية – Economy Card</Typography>
              </Box>
              <CardContent>
                <Stack spacing={1}>
                  <Typography>🔸 إجراءات الفيزا بعد الوصول إلى أوغندا</Typography>
                  <Typography>🔸 استقبال في المطار فقط</Typography>
                  <Typography>🔸 حجز فندق اقتصادي فقط 🏨</Typography>
                  <Typography>🔸 نقل مشترك داخل أوغندا لإنجاز المعاملات 🚐</Typography>
                  <Typography>🔸 مرافق خاص يساعدك في تخليص الإجراءات الرسمية</Typography>
                  <Typography>🔸 بدون جولات سياحية ❌</Typography>
                  <Typography sx={{ mt: 1, fontWeight: 700 }}>أقل تكلفة… نفس الجودة… وإنجاز مضمون!</Typography>
                  <Button variant="contained" sx={{ mt: 2 }}>اختر هذه الباقة</Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}

      {expanded && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>ملاحظات</Typography>
          <Stack spacing={1}>
            <Typography>• جميع الخدمات منظمة لتوفير الوقت والراحة.</Typography>
            <Typography>• لدينا فريق متخصص يتابع كل خطوة معك لضمان سرعة الإنجاز.</Typography>
          </Stack>
        </Box>
      )}
    </Container>
  )
}