import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import CloudUploadRoundedIcon from '@mui/icons-material/CloudUploadRounded'
import { useState, type ReactNode, type SyntheticEvent, type ChangeEvent } from 'react'

function TabPanel({ children, value, index }: { children: ReactNode; value: number; index: number }) {
  return (
    <div role="tabpanel" hidden={value !== index} id={`tab-${index}`} aria-labelledby={`tab-${index}`}>{value === index && <Box sx={{ p: 3 }}>{children}</Box>}</div>
  )
}

export default function VisaUae() {
  const [value, setValue] = useState<number>(0)
  const [passport, setPassport] = useState<string>('')
  const handleChange = (_e: SyntheticEvent, newValue: number) => setValue(newValue)

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>فيزا الإمارات</Typography>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="uae tabs">
          <Tab label="تقديم" />
          <Tab label="متطلبات" />
          <Tab label="الاستعلام عن التأشيرة" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Stack spacing={2}>
          <Button variant="contained" startIcon={<CloudUploadRoundedIcon />} component="label">صورة الجواز PDF<input hidden type="file" accept="application/pdf" /></Button>
          <Button variant="contained" startIcon={<CloudUploadRoundedIcon />} component="label">صورة شخصية<input hidden type="file" accept="image/*" /></Button>
        </Stack>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Card sx={{ borderRadius: 0, p: 2, maxWidth: 640, mx: 'auto' }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>تعليمات التقديم</Typography>
            <Typography color="text.secondary" sx={{ textAlign: 'justify', lineHeight: 1.8 }}>
              لي التقديم على الفيزا: توجد رسوم ضمان قدرها 1030 درهم يتم استرجاع المبلغ بعد الخروج من الإمارات، وسيتم خصم 30 درهم للتأمين ويتم استرجاع 1000 درهم. يجب إرفاق صورة شخصية بخلفية بيضاء عالية الجودة وصورة الجواز بصيغة PDF. بعد التقديم بيومين ادخل على الموقع للاستعلام عن الفيزا في خانة الاستعلام.
            </Typography>
          </CardContent>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Stack spacing={2} sx={{ maxWidth: 480 }}>
          <TextField label="رقم الجواز" value={passport} onChange={(e: ChangeEvent<HTMLInputElement>) => setPassport(e.target.value)} fullWidth />
          <Button variant="contained" startIcon={<SearchRoundedIcon />} disabled={!passport.trim()}>استعلام</Button>
        </Stack>
      </TabPanel>
    </Box>
  )
}