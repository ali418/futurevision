import React from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function TourismPage() {
  const { country } = useParams();
  return (
    <Box>
      <Typography variant="h4">خدمات سياحية: {country}</Typography>
      <Typography>
        هذه الصفحة قيد الإنشاء.
      </Typography>
    </Box>
  );
}