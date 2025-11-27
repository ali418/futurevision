import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import CloudUploadRoundedIcon from '@mui/icons-material/CloudUploadRounded'
import { useState } from 'react'

function TabPanel({ children, value, index }: { children: React.ReactNode; value: number; index: number }) {
  return (
    <div role="tabpanel" hidden={value !== index} id={`tab-${index}`} aria-labelledby={`tab-${index}`}>{value === index && <Box sx={{ p: 3 }}>{children}</Box>}</div>
  )
}

export default function VisaSaudiUmrah() {
  const [value, setValue] = useState<number>(0)
  const [passport, setPassport] = useState<string>('')
  const handleChange = (_e: React.SyntheticEvent, newValue: number) => setValue(newValue)

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>عمرة السعودية</Typography>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="umrah tabs">
          <Tab label="تقديم" />
          <Tab label="متطلبات" />
          <Tab label="الاستعلام عن إصدار التأشيرة" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Stack spacing={2}>
          <Button variant="contained" startIcon={<CloudUploadRoundedIcon />} component="label">إضافة إقرار الضامن<input hidden type="file" /></Button>
          <Button variant="contained" startIcon={<CloudUploadRoundedIcon />} component="label">إضافة هوية الضامن<input hidden type="file" /></Button>
          <Button variant="contained" startIcon={<CloudUploadRoundedIcon />} component="label">إضافة صورة جواز المعتمر<input hidden type="file" /></Button>
          <Button variant="contained" startIcon={<CloudUploadRoundedIcon />} component="label">إضافة صورة شخصية<input hidden type="file" /></Button>
        </Stack>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography>• إقرار الضامن • هوية الضامن • جواز المعتمر • صورة شخصية</Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Stack spacing={2} sx={{ maxWidth: 480 }}>
          <TextField label="رقم الجواز" value={passport} onChange={(e) => setPassport(e.target.value)} fullWidth />
          <Button variant="contained" startIcon={<SearchRoundedIcon />} disabled={!passport.trim()}>استعلام</Button>
        </Stack>
      </TabPanel>
    </Box>
  )
}