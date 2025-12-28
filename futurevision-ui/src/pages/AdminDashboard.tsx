import { Box, Container, Tab, Tabs, Typography, Stack, TextField, Button, Table, TableHead, TableRow, TableCell, TableBody, IconButton, MenuItem } from '@mui/material'
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import React, { useMemo, useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { api, Settings, RequestEntry } from '../lib/api'

type RequestEntry = { id: number; name: string; phone: string; service: string; country: string; notes: string; status: string; createdAt: string }

export default function AdminDashboard() {
  const [tab, setTab] = useState(0)
  const [heroTitle, setHeroTitle] = useState(() => localStorage.getItem('fv_hero_title') || 'سافر بسهولة وثقة')
  const [logoSize, setLogoSize] = useState(() => localStorage.getItem('fv_logo_size') || 'md')
  const qc = useQueryClient()
  const { data: settings } = useQuery<Settings>({ queryKey: ['settings'], queryFn: async () => (await api.get('/settings')).data })
  const { data: requests } = useQuery<RequestEntry[]>({ queryKey: ['requests'], queryFn: async () => (await api.get('/requests')).data })

  React.useEffect(() => {
    if (settings) {
      setHeroTitle(settings.hero_title || 'سافر بسهولة وثقة')
      setLogoSize(settings.logo_size || 'md')
    }
  }, [settings])

  const saveMutation = useMutation({
    mutationFn: async () => api.put('/settings', { hero_title: heroTitle, logo_size: logoSize }),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ['settings'] }); alert('تم حفظ الإعدادات') },
    onError: () => alert('فشل حفظ الإعدادات')
  })
  const saveAppearance = () => saveMutation.mutate()

  const markDone = (id: number) => api.patch(`/requests/${id}`, { status: 'done' }).then(() => qc.invalidateQueries({ queryKey: ['requests'] }))
  const removeReq = (id: number) => api.delete(`/requests/${id}`).then(() => qc.invalidateQueries({ queryKey: ['requests'] }))

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 800 }}>لوحة التحكم</Typography>
      <Tabs value={tab} onChange={(_, v) => setTab(v)} sx={{ mb: 3 }}>
        <Tab label="المظهر" />
        <Tab label="الطلبات" />
      </Tabs>
      {tab === 0 && (
        <Stack spacing={2}>
          <TextField label="عنوان الهيرو" value={heroTitle} onChange={(e) => setHeroTitle(e.target.value)} fullWidth />
          <TextField select label="حجم الشعار" value={logoSize} onChange={(e) => setLogoSize(e.target.value)} fullWidth>
            <MenuItem value="sm">صغير</MenuItem>
            <MenuItem value="md">متوسط</MenuItem>
            <MenuItem value="lg">كبير</MenuItem>
          </TextField>
          <Button variant="contained" onClick={saveAppearance}>حفظ الإعدادات</Button>
        </Stack>
      )}
      {tab === 1 && (
        <Box>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>الاسم</TableCell>
                <TableCell>الهاتف</TableCell>
                <TableCell>الخدمة</TableCell>
                <TableCell>الوجهة</TableCell>
                <TableCell>الحالة</TableCell>
                <TableCell align="right">إجراءات</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(requests || []).map((r) => (
                <TableRow key={r.id}>
                  <TableCell>{r.name}</TableCell>
                  <TableCell>{r.phone}</TableCell>
                  <TableCell>{r.service}</TableCell>
                  <TableCell>{r.country}</TableCell>
                  <TableCell>{r.status}</TableCell>
                  <TableCell align="right">
                    <IconButton color="success" onClick={() => markDone(r.id)}><CheckCircleRoundedIcon /></IconButton>
                    <IconButton color="error" onClick={() => removeReq(r.id)}><DeleteOutlineRoundedIcon /></IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      )}
    </Container>
  )
}