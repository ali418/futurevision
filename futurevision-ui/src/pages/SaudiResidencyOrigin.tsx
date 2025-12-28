import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded'
import DiamondRoundedIcon from '@mui/icons-material/DiamondRounded'
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import ReactCountryFlag from 'react-country-flag'
import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function SaudiResidencyOrigin() {
  const { origin } = useParams()
  const navigate = useNavigate()
  const [tab, setTab] = useState<'residency' | 'recruitment' | 'family' | 'requirements'>('residency')
  const originLabelMap: Record<string, string> = { sudan: 'السودان', uganda: 'أوغندا', uae: 'الإمارات' }
  const flagCodeMap: Record<string, string> = { sudan: 'SD', uganda: 'UG', uae: 'AE' }
  const originLabel = originLabelMap[(origin || '').toLowerCase()] || origin
  const flagCode = flagCodeMap[(origin || '').toLowerCase()] || 'UG'

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>إقامة السعودية - جهة القدوم: {originLabel}</Typography>

      <Box sx={{ mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <Chip label={`جهة القدوم: ${originLabel}`} sx={{ background: 'rgba(99,102,241,0.15)', color: '#fff' }} icon={<ReactCountryFlag countryCode={flagCode} svg style={{ width: '1.2em', height: '1.2em' }} />} />
        </Box>
        <Tabs value={tab} onChange={(_, v) => setTab(v)} sx={{ mb: 3 }} variant="scrollable" allowScrollButtonsMobile>
          <Tab value="residency" label="إقامة" />
          <Tab value="recruitment" label="استقدام" />
          <Tab value="family" label="زيارة عائلية" />
          <Tab value="requirements" label="متطلبات" />
        </Tabs>
      </Box>
      {tab === 'residency' && (
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
                  <Button variant="contained" sx={{ mt: 2 }} onClick={() => navigate(`/procedures/saudi-residency/${origin}/vip`)}>اختر هذه الباقة</Button>
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
                  <Button variant="contained" sx={{ mt: 2 }} onClick={() => navigate(`/procedures/saudi-residency/${origin}/procedures`)}>اختر هذه الباقة</Button>
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
                  <Button variant="contained" sx={{ mt: 2 }} onClick={() => navigate(`/procedures/saudi-residency/${origin}/economy`)}>اختر هذه الباقة</Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}

      {tab === 'recruitment' && (
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 0, overflow: 'hidden', boxShadow: '0 10px 30px rgba(99,102,241,0.35)' }}>
              <Box sx={{ p: 3, background: 'linear-gradient(135deg, #C7D2FE 0%, #6366F1 100%)', color: '#0f172a' }}>
                <Typography variant="h6" sx={{ fontWeight: 800 }}>استقدام لي السعودية</Typography>
                <Typography color="text.secondary">قدّم طلب الاستقدام أو اطلع على المتطلبات</Typography>
              </Box>
              <CardContent>
                <Stack direction="row" spacing={1}>
                  <Button variant="contained" onClick={() => navigate('/procedures/saudi-recruitment')}>المتطلبات</Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}

      {tab === 'family' && (
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 0, overflow: 'hidden', boxShadow: '0 10px 30px rgba(20,184,166,0.35)' }}>
              <Box sx={{ p: 3, background: 'linear-gradient(135deg, #A7F3D0 0%, #14B8A6 100%)', color: '#0f172a' }}>
                <Typography variant="h6" sx={{ fontWeight: 800 }}>زيارة عائلية السعودية</Typography>
                <Typography color="text.secondary">شاهد المتطلبات واجراءات التقديم</Typography>
              </Box>
              <CardContent>
                <Stack direction="row" spacing={1}>
                  <Button variant="contained" onClick={() => navigate('/procedures/saudi-family-visit')}>المتطلبات</Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}

      {tab === 'requirements' && (
        <Box sx={{ mt: 4 }}>
          <Box sx={{ p: 2, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 1.5 }}>متطلبات إقامة</Typography>
            <List dense sx={{ '& .MuiListItemText-primary': { fontSize: '1rem' } }}>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}><CheckRoundedIcon sx={{ color: 'success.main' }} /></ListItemIcon>
                <ListItemText primary="- تأشيرة العمل من منصة قوى جهة القدوم كمبالا." />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}><CheckRoundedIcon sx={{ color: 'success.main' }} /></ListItemIcon>
                <ListItemText primary="- عقد العمل مصدق من الغرفة التجارية والخارجية السعودية" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}><CheckRoundedIcon sx={{ color: 'success.main' }} /></ListItemIcon>
                <ListItemText primary="- التفويض مصدق من الغرفة التجارية" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}><CheckRoundedIcon sx={{ color: 'success.main' }} /></ListItemIcon>
                <ListItemText primary="- السجل التجاري للمؤسسة" />
              </ListItem>
            </List>
          </Box>
          <Box sx={{ mt: 3, p: 2, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 1.5 }}>2️⃣ المتطلبات الشخصية</Typography>
            <List dense sx={{ '& .MuiListItemText-primary': { fontSize: '1rem' } }}>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}><CheckRoundedIcon sx={{ color: 'success.main' }} /></ListItemIcon>
                <ListItemText primary="- الفيش السوداني موثق من الخارجية السودانية ومن السفارة السودانية في كمبالا" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}><CheckRoundedIcon sx={{ color: 'success.main' }} /></ListItemIcon>
                <ListItemText primary="- الفيش السعودي للمتواجدين في السعودية موثق من الخارجية السعودية." />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}><CheckRoundedIcon sx={{ color: 'success.main' }} /></ListItemIcon>
                <ListItemText primary="- كرت الحمى الصفراء" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}><CheckRoundedIcon sx={{ color: 'success.main' }} /></ListItemIcon>
                <ListItemText primary="- الشهادات بالنسبة للمهن اللي بتحتاج شهادات" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}><CheckRoundedIcon sx={{ color: 'success.main' }} /></ListItemIcon>
                <ListItemText primary="- لي المهن العلية بعض المهن تتطلب اعتماد مهني او تصنيف الهية السعودية الرجاء مراسلاتنا قبال السفر" />
              </ListItem>
            </List>
          </Box>
          <Box sx={{ mt: 3, p: 2, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 1.5 }}>استقدام</Typography>
            <List dense sx={{ '& .MuiListItemText-primary': { fontSize: '1rem' } }}>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}><CheckRoundedIcon sx={{ color: 'success.main' }} /></ListItemIcon>
                <ListItemText primary="- مستند الاستقدام" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}><CheckRoundedIcon sx={{ color: 'success.main' }} /></ListItemIcon>
                <ListItemText primary="- فيش موثق خارجية لي كل شخص فوق 18 سنة" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}><CheckRoundedIcon sx={{ color: 'success.main' }} /></ListItemIcon>
                <ListItemText primary="- عقد الزواج موثق خارجية" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}><CheckRoundedIcon sx={{ color: 'success.main' }} /></ListItemIcon>
                <ListItemText primary="- الأرقام الوطنية لي كل شخص" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}><CheckRoundedIcon sx={{ color: 'success.main' }} /></ListItemIcon>
                <ListItemText primary="- صورة من هوية مقدم الطلب من أبشر" />
              </ListItem>
            </List>
          </Box>
          <Box sx={{ mt: 3, p: 2, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 1.5 }}>الزيارة العائلية</Typography>
            <List dense sx={{ '& .MuiListItemText-primary': { fontSize: '1rem' } }}>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}><CheckRoundedIcon sx={{ color: 'success.main' }} /></ListItemIcon>
                <ListItemText primary="- مستند الزيارة العائلية" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}><CheckRoundedIcon sx={{ color: 'success.main' }} /></ListItemIcon>
                <ListItemText primary="- أقارب من الدرجة الاولي" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}><CheckRoundedIcon sx={{ color: 'success.main' }} /></ListItemIcon>
                <ListItemText primary="- الأرقام الوطنية لكل شخص زايد الرقم الوطني لي مقدم الطلب" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}><CheckRoundedIcon sx={{ color: 'success.main' }} /></ListItemIcon>
                <ListItemText primary="- هوية مقدم الطلب من أبشر" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}><CheckRoundedIcon sx={{ color: 'success.main' }} /></ListItemIcon>
                <ListItemText primary="- صورة جواز مقدم الطلب" />
              </ListItem>
            </List>
            <Box sx={{ mt: 1, display: 'flex', alignItems: 'center', gap: 1, color: 'error.main' }}>
              <WarningAmberRoundedIcon />
              <Typography sx={{ fontWeight: 700 }}>🚨 هام: في حالة وجود اشخاص علي كفالة مقدم الطلب يتم رفض الزيارة</Typography>
            </Box>
          </Box>
        </Box>
      )}
    </Container>
  )
}