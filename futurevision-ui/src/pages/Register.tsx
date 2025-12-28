import { Button, Container, Stack, TextField, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export default function Register() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
      <Container maxWidth="sm" sx={{ py: 6 }}>
        <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
          إنشاء حساب جديد
        </Typography>
        <Stack spacing={3}>
          <TextField label="الاسم الكامل" variant="outlined" fullWidth />
          <TextField label="رقم الهاتف" variant="outlined" fullWidth />
          <TextField label="كلمة المرور" type="password" variant="outlined" fullWidth />
          <TextField label="تأكيد كلمة المرور" type="password" variant="outlined" fullWidth />

          <TextField label="رقم الجواز" variant="outlined" fullWidth />
          <Button variant="contained" size="large" fullWidth>
            تسجيل
          </Button>
        </Stack>
      </Container>
    </motion.div>
  );
}