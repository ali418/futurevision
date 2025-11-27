import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import CloudUploadRoundedIcon from '@mui/icons-material/CloudUploadRounded'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import { useState } from 'react'

function TabPanel({ children, value, index }: { children: React.ReactNode; value: number; index: number }) {
  return (
    <div role="tabpanel" hidden={value !== index} id={`eg-tab-${index}`} aria-labelledby={`eg-tab-${index}`}>{value === index && <Box sx={{ p: 3 }}>{children}</Box>}</div>
  )
}

export default function VisaEgypt() {
  const [value, setValue] = useState<number>(0)
  const [passport, setPassport] = useState<string>('')
  const handleChange = (_e: React.SyntheticEvent, newValue: number) => setValue(newValue)

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>فيزا مصر</Typography>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="egypt visa tabs">
          <Tab label="التقديم علي الموافقه الامنية" />
          <Tab label="متطلبات" />
          <Tab label="الاستعلام عن الفيزا" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Stack spacing={2}>
          <Button variant="contained" startIcon={<CloudUploadRoundedIcon />} component="label">اضافة صورة الجواز<input hidden type="file" accept="application/pdf" /></Button>
          <Button variant="contained" startIcon={<CloudUploadRoundedIcon />} component="label">اضافة صورة شخصية<input hidden type="file" accept="image/*" /></Button>
        </Stack>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Card sx={{ borderRadius: 0, p: 2, maxWidth: 640, mx: 'auto' }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>تعليمات التقديم</Typography>
            <Typography color="text.secondary" sx={{ textAlign: 'justify', lineHeight: 1.8 }}>
              الرجاء تحديد مطار الاقلاع لانو مهم للغاية بسبب يمكن رفض الموافقه الامنية قبل السفر. الرجاء ارسال التذكرة بثلاثه ايام من السفر. اضافة صورة من الجواز PDF وصورة شخصية خلفية بيضاء واضحه. بعده يمكن الدخول لي استعلام عن الفيزا.
            </Typography>
          </CardContent>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <TextField label="رقم الجواز" value={passport} onChange={(e) => setPassport(e.target.value)} fullWidth />
          <Button variant="contained" startIcon={<SearchRoundedIcon />} disabled={!passport.trim()}>استعلام</Button>
        </Stack>
      </TabPanel>
    </Box>
  )
}