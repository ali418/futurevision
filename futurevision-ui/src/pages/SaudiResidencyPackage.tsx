import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Checkbox from '@mui/material/Checkbox'
import ListItemText from '@mui/material/ListItemText'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import ReactCountryFlag from 'react-country-flag'
import { useParams } from 'react-router-dom'
import { useState, useMemo } from 'react'

export default function SaudiResidencyPackage() {
  const { origin, pkg } = useParams()

  const originLabelMap: Record<string, string> = { sudan: 'السودان', uganda: 'أوغندا', uae: 'الإمارات' }
  const flagCodeMap: Record<string, string> = { sudan: 'SD', uganda: 'UG', uae: 'AE' }
  const originLabel = originLabelMap[(origin || '').toLowerCase()] || origin
  const flagCode = flagCodeMap[(origin || '').toLowerCase()] || 'UG'

  const pkgLabel = useMemo(() => {
    const key = (pkg || '').toLowerCase()
    if (key === 'vip') return 'بطاقة كبار الشخصيات – VIP Card'
    if (key === 'procedures') return 'بطاقة الإجراءات والمعاملات – Procedures Card'
    return 'البطاقة البرونزية – Economy Card'
  }, [pkg])

  const features = useMemo(() => {
    const key = (pkg || '').toLowerCase()
    if (key === 'vip') {
      return [
        'استقبال في المطار',
        'إقامة في فندق راقٍ ومريح فقط',
        'سيارة خاصة للتوصيل إلى المطار عند المغادرة',
        'سيارة خاصة للتنقل داخل البلاد وتخليص المعاملات',
        'مرافق خاص محترف لمتابعة وإنهاء الإجراءات الرسمية',
        'جولتان سياحيتان مع مرشد لمعالم المنطقة'
      ]
    }
    if (key === 'procedures') {
      return [
        'استقبال في المطار',
        'حجز فندق مميز فقط',
        'سيارة خاصة للتنقل داخل البلاد لتخليص المعاملات',
        'مرافق مسؤول عن متابعة وإنهاء كل الإجراءات',
        'بدون رحلات سياحية'
      ]
    }
    return [
      'إجراءات الفيزا بعد الوصول إلى أوغندا',
      'استقبال في المطار فقط',
      'حجز فندق اقتصادي فقط',
      'نقل مشترك داخل أوغندا لإنجاز المعاملات',
      'مرافق خاص يساعدك في تخليص الإجراءات الرسمية',
      'بدون جولات سياحية'
    ]
  }, [pkg])

  const [selected, setSelected] = useState<Record<string, boolean>>({})
  const toggle = (f: string) => setSelected((s) => ({ ...s, [f]: !s[f] }))

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>إقامة السعودية - جهة القدوم: {originLabel}</Typography>
      <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
        <Chip label={pkgLabel} color="primary" sx={{ color: '#fff' }} />
        <Chip label={`Origin: ${originLabel}`} icon={<ReactCountryFlag countryCode={flagCode} svg style={{ width: '1.2em', height: '1.2em' }} />} />
      </Stack>

      <Card sx={{ borderRadius: 0, overflow: 'hidden', boxShadow: '0 15px 40px rgba(0,0,0,0.25)' }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 800 }}>بنود الباقة</Typography>
          <List>
            {features.map((f) => (
              <ListItem key={f} button onClick={() => toggle(f)} sx={{ borderBottom: '1px dashed rgba(255,255,255,0.08)' }}>
                <ListItemIcon>
                  <Checkbox edge="start" checked={!!selected[f]} tabIndex={-1} disableRipple />
                </ListItemIcon>
                <ListItemText primary={f} />
              </ListItem>
            ))}
          </List>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 3 }}>
            <Button variant="contained">تأكيد الاختيار</Button>
            <Button variant="outlined">رجوع</Button>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  )
}