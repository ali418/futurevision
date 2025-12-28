import { Button, Container, Stack, TextField, Typography, MenuItem } from '@mui/material'
import { motion } from 'framer-motion'
import React, { useState } from 'react'

export default function RequestForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState('visa')
  const [country, setCountry] = useState('uganda')
  const [notes, setNotes] = useState('')
  const submit = () => {
    const entry = { id: Date.now(), name, phone, service, country, notes, status: 'new', createdAt: new Date().toISOString() }
    const prev = JSON.parse(localStorage.getItem('fv_requests') || '[]')
    prev.unshift(entry)
    localStorage.setItem('fv_requests', JSON.stringify(prev))
    setName(''); setPhone(''); setNotes('')
    alert('تم إرسال طلبك بنجاح')
  }
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
      <Container maxWidth="sm" sx={{ py: 6 }}>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>طلب خدمة</Typography>
        <Stack spacing={2}>
          <TextField label="الاسم الكامل" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
          <TextField label="رقم الهاتف" value={phone} onChange={(e) => setPhone(e.target.value)} fullWidth />
          <TextField select label="الخدمة" value={service} onChange={(e) => setService(e.target.value)} fullWidth>
            <MenuItem value="visa">فيزا</MenuItem>
            <MenuItem value="procedures">إجراءات</MenuItem>
            <MenuItem value="tourism">سياحة</MenuItem>
            <MenuItem value="flights">عروض الطيران</MenuItem>
            <MenuItem value="domestic-workers">استقدام عمالة منزلية</MenuItem>
          </TextField>
          <TextField select label="الوجهة" value={country} onChange={(e) => setCountry(e.target.value)} fullWidth>
            <MenuItem value="uganda">أوغندا</MenuItem>
            <MenuItem value="saudi">السعودية</MenuItem>
            <MenuItem value="uae">الإمارات</MenuItem>
            <MenuItem value="egypt">مصر</MenuItem>
            <MenuItem value="malaysia">ماليزيا</MenuItem>
          </TextField>
          <TextField label="ملاحظات" value={notes} onChange={(e) => setNotes(e.target.value)} fullWidth multiline rows={3} />
          <Button variant="contained" size="large" onClick={submit}>إرسال الطلب</Button>
        </Stack>
      </Container>
    </motion.div>
  )
}