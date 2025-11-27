import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CloudUploadRoundedIcon from '@mui/icons-material/CloudUploadRounded';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  } as const
}

export default function VisaPage() {
  const { country } = useParams();
  const [value, setValue] = useState(0);
  const [passport, setPassport] = useState('');

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        {(country || '').toLowerCase() === 'egypt' ? 'فيزا مصر' : `Visa for ${country}`}
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="visa tabs">
          {(country || '').toLowerCase() === 'egypt' ? (
            <>
              <Tab label="التقديم علي الموافقه الامنية" {...a11yProps(0)} />
              <Tab label="متطلبات" {...a11yProps(1)} />
              <Tab label="الاستعلام عن الفيزا" {...a11yProps(2)} />
            </>
          ) : (
            <>
              <Tab label="تقديم" {...a11yProps(0)} />
              <Tab label="متطلبات" {...a11yProps(1)} />
              <Tab label="تشيك على الفيزا" {...a11yProps(2)} />
            </>
          )}
        </Tabs>
      </Box>
      {(country || '').toLowerCase() === 'egypt' ? (
        <>
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
        </>
      ) : (
        <>
          <TabPanel value={value} index={0}>Item One</TabPanel>
          <TabPanel value={value} index={1}>Item Two</TabPanel>
          <TabPanel value={value} index={2}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <TextField label="رقم الجواز" value={passport} onChange={(e) => setPassport(e.target.value)} fullWidth />
              <Button variant="contained" startIcon={<SearchRoundedIcon />} disabled={!passport.trim()}>استعلام</Button>
            </Stack>
          </TabPanel>
        </>
      )}
    </Box>
  );
}