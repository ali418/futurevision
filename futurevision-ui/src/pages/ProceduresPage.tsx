import React from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const servicesDetails = {
  'saudi-residency': {
    title: 'إقامة السعودية',
    requirements: [
      'تأشيرة العمل',
      'عقد العمل',
      'فيش موثق خارجية',
    ],
    submission: [
      'إرفاق التأشيرة',
      'إرفاق عقد العمل',
      'إرفاق التفويض (رقم سجل المكتب)',
    ],
  },
  'saudi-family-visit': {
    title: 'زيارة عائلية السعودية',
    requirements: [
      'مستند الزيارة',
      'عقد الزواج موثق خارجية (للزوجة/للزوج)',
      'هوية مقدم الطلب من أبشر',
      'الأرقام الوطنية لمقدم الطلب وصاحب الطلب',
    ],
    submission: [
      'إرفاق مستند الزيارة',
      'إرفاق عقد الزواج',
      'إرفاق هوية مقدم الطلب',
      'إرفاق الأرقام الوطنية',
    ],
  },
  'saudi-recruitment': {
    title: 'استقدام لي السعودية',
    requirements: [
      'مستند الاستقدام',
      'فيش لكل شخص فوق 18 سنة',
      'الأرقام الوطنية لكل شخص',
      'هوية مقدم الطلب',
      'صورة جواز السفر',
    ],
    submission: [
      'إرفاق مستند الاستقدام',
      'إرفاق الفيش',
      'إرفاق الأرقام الوطنية',
      'إرفاق هوية مقدم الطلب',
      'إرفاق صورة جواز السفر',
    ],
  },
};

export default function ProceduresPage() {
  const { service } = useParams();
  const details = servicesDetails[service];

  if (!details) {
    return (
      <Box>
        <Typography variant="h4">خدمة غير معروفة</Typography>
        <Typography>عذراً، هذه الخدمة غير متوفرة.</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>{details.title}</Typography>
      
      <Typography variant="h5" gutterBottom>المتطلبات</Typography>
      <List>
        {details.requirements.map((req, index) => (
          <ListItem key={index}>
            <ListItemText primary={req} />
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h5" gutterBottom>التقديم</Typography>
      <List>
        {details.submission.map((sub, index) => (
          <ListItem key={index}>
            <ListItemText primary={sub} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}