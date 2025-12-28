import { Button, Container, Stack, TextField, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { api } from '../lib/api';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: async () => {
      const { data } = await api.post('/auth/login', { username, password });
      return data;
    },
    onSuccess: (data: any) => {
      localStorage.setItem('fv_token', data.token);
      navigate('/admin');
    },
    onError: () => alert('فشل تسجيل الدخول')
  });
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
      <Container maxWidth="sm" sx={{ py: 6 }}>
        <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
          تسجيل الدخول
        </Typography>
        <Stack spacing={3}>
          <TextField label="اسم المستخدم" value={username} onChange={(e) => setUsername(e.target.value)} variant="outlined" fullWidth />
          <TextField label="كلمة المرور" value={password} onChange={(e) => setPassword(e.target.value)} type="password" variant="outlined" fullWidth />
          <Button variant="contained" size="large" fullWidth onClick={() => mutation.mutate()} disabled={mutation.isPending}>
            دخول
          </Button>
        </Stack>
      </Container>
    </motion.div>
  );
}