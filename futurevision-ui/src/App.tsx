import React, { useState } from 'react'
import { ThemeProvider, useTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import IconButton from '@mui/material/IconButton'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom'
import { theme } from './theme'
import SideNav from './components/SideNav'
import ParticleBackground from './components/ParticleBackground'
import Footer from './components/Footer'
import Home from './pages/Home'
import VisaPage from './pages/VisaPage'
import VisaUganda from './pages/VisaUganda'
import Jobs from './pages/Jobs'
import About from './pages/About'
import Vision from './pages/Vision'
import TourismPage from './pages/TourismPage'
import ProceduresPage from './pages/ProceduresPage'
import Services from './pages/Services'
import AdminDashboard from './pages/AdminDashboard'
import RequestForm from './pages/RequestForm'
import VisaSaudiUmrah from './pages/VisaSaudiUmrah'
import VisaGccResident from './pages/VisaGccResident'
import VisaUae from './pages/VisaUae'
import SaudiResidencyOrigin from './pages/SaudiResidencyOrigin'
import SaudiResidencyPackage from './pages/SaudiResidencyPackage'
import VisaEgypt from './pages/VisaEgypt'
import { AnimatePresence, motion } from 'framer-motion'
import Register from './pages/Register'
import Login from './pages/Login'

export default function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const [authOpen, setAuthOpen] = useState(false)
  const [authTab, setAuthTab] = useState<'login' | 'register'>('login')
  const openByRoute = location.pathname === '/login' || location.pathname === '/register'
  const routeTab: 'login' | 'register' = location.pathname === '/register' ? 'register' : 'login'
  const shownTab = openByRoute ? routeTab : authTab
  const closeAuth = () => { if (openByRoute) navigate('/'); else setAuthOpen(false) }
  const muiTheme = useTheme()
  const isMobileDialog = useMediaQuery(muiTheme.breakpoints.down('sm'))
  const RequireAuth = ({ children }: { children: React.ReactNode }) => {
    const t = localStorage.getItem('fv_token')
    if (!t) return <Navigate to="/login" replace />
    return <>{children}</>
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ParticleBackground />
      <Box sx={{ position: 'fixed', top: 12, right: 12, zIndex: 3 }}>
        <IconButton aria-label="account" onClick={() => { setAuthOpen(true); setAuthTab('login') }} sx={{ color: 'primary.main', border: '1px solid rgba(14,165,233,0.35)', borderRadius: 2 }}>
          <AccountCircleRoundedIcon />
        </IconButton>
      </Box>
      <SideNav />
      <Box component="main" sx={{ ml: { xs: 0, md: 'var(--sidenav-width, 240px)' } }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}><Home /></motion.div>} />
            <Route path="/visa/egypt" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}><VisaEgypt /></motion.div>} />
            <Route path="/services" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}><Services /></motion.div>} />
            <Route path="/visa/:country" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}><VisaPage /></motion.div>} />
            <Route path="/visa/uae" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}><VisaUae /></motion.div>} />
            <Route path="/visa/uganda" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}><VisaUganda /></motion.div>} />
            <Route path="/jobs" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}><Jobs /></motion.div>} />
            <Route path="/about" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}><About /></motion.div>} />
            <Route path="/vision" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}><Vision /></motion.div>} />
            <Route path="/tourism/:country" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}><TourismPage /></motion.div>} />
            <Route path="/procedures/:service" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}><ProceduresPage /></motion.div>} />
            <Route path="/admin" element={<RequireAuth><motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}><AdminDashboard /></motion.div></RequireAuth>} />
            <Route path="/request" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}><RequestForm /></motion.div>} />
            <Route path="/procedures/saudi-residency/:origin" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}><SaudiResidencyOrigin /></motion.div>} />
            <Route path="/procedures/saudi-residency/:origin/:pkg" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}><SaudiResidencyPackage /></motion.div>} />
            <Route path="/visa/saudi/umrah" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}><VisaSaudiUmrah /></motion.div>} />
            <Route path="/visa/saudi/gcc-resident" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}><VisaGccResident /></motion.div>} />
            <Route path="/register" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}><Register /></motion.div>} />
            <Route path="/login" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}><Login /></motion.div>} />
          </Routes>
        </AnimatePresence>
      </Box>
      <Dialog
        open={authOpen || openByRoute}
        onClose={closeAuth}
        fullScreen={isMobileDialog}
        fullWidth={!isMobileDialog}
        PaperProps={{ sx: { borderRadius: isMobileDialog ? 0 : 3, px: 2, py: 2, bgcolor: 'background.default', m: isMobileDialog ? 0 : 1 } }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
          <Tabs value={shownTab} onChange={(_, v) => setAuthTab(v)} variant={isMobileDialog ? 'fullWidth' : 'standard'}>
            <Tab value="login" label="Login" />
            <Tab value="register" label="Register" />
          </Tabs>
          <IconButton onClick={closeAuth}><CloseRoundedIcon /></IconButton>
        </Box>
        {shownTab === 'login' && (
          <Box sx={{ px: 1, pb: 1, width: '100%', maxWidth: 420 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 800 }}>Welcome back!</Typography>
            <Stack spacing={2}>
              <TextField label="Email address" fullWidth />
              <TextField label="Password" type="password" fullWidth />
              <FormControlLabel control={<Checkbox />} label="Remember me" />
              <Button variant="contained">Login</Button>
            </Stack>
          </Box>
        )}
        {shownTab === 'register' && (
          <Box sx={{ px: 1, pb: 1, width: '100%', maxWidth: 420 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 800 }}>Create an Account</Typography>
            <Stack spacing={2}>
              <TextField label="Your name" fullWidth />
              <TextField label="Email address" fullWidth />
              <TextField label="Password" type="password" fullWidth />
              <TextField label="Confirm Password" type="password" fullWidth />
              <Button variant="contained">Register</Button>
            </Stack>
          </Box>
        )}
      </Dialog>
      <Footer />
    </ThemeProvider>
  )
}
