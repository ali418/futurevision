import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
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

export default function VisaUganda() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        فيزا يوغندا
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="visa tabs">
          <Tab label="تقديم" />
          <Tab label="متطلبات" />
          <Tab label="تشيك على الفيزا" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
          <Button variant="contained" component="label" startIcon={<CloudUploadRoundedIcon />}>
            ارفق الجواز
            <input type="file" hidden />
          </Button>
          <Button variant="contained" component="label" startIcon={<CloudUploadRoundedIcon />}>
            ارفق صورة خلفية بيضاء
            <input type="file" hidden />
          </Button>
          <Button variant="contained" component="label" startIcon={<CloudUploadRoundedIcon />}>
            كرت حمى صفراء
            <input type="file" hidden />
          </Button>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography>صورة الجواز pdf</Typography>
        <Typography>صورة شخصية خلفية بيضاء</Typography>
        <Typography>صورة من كرت الحمى الصفراء</Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <TextField label="رقم الجواز" fullWidth />
          <Button variant="contained" startIcon={<SearchRoundedIcon />}>استعلام</Button>
        </Stack>
      </TabPanel>
    </Container>
  );
}
