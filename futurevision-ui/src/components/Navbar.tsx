import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { Link as RouterLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <AppBar position="static" color="transparent" sx={{ borderBottom: '1px solid', borderColor: 'divider', backdropFilter: 'blur(6px)' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ color: 'primary.main' }}>Future Vision</Typography>
        <Stack direction="row" spacing={1}>
          <Button component={RouterLink} to="/" color="inherit">الرئيسية</Button>
          <Button component={RouterLink} to="/visa/uganda" color="inherit">فيزا يوغندا</Button>
          <Button component={RouterLink} to="/procedures/saudi" color="inherit">إجراءات السعودية</Button>
          <Button component={RouterLink} to="/jobs" color="inherit">الوظائف</Button>
          <Button component={RouterLink} to="/vision" color="inherit">رؤيتنا</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

