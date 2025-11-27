import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import { Routes, Route, useLocation } from 'react-router-dom'
import { theme } from './theme'
import SideNav from './components/SideNav'
import ParticleBackground from './components/ParticleBackground'
import LogoOverlay from './components/LogoOverlay'
import Footer from './components/Footer'
import Home from './pages/Home'
import VisaPage from './pages/VisaPage'
import VisaUganda from './pages/VisaUganda'
import Jobs from './pages/Jobs'
import About from './pages/About'
import Vision from './pages/Vision'
import TourismPage from './pages/TourismPage'
import ProceduresPage from './pages/ProceduresPage'
import VisaSaudiUmrah from './pages/VisaSaudiUmrah'
import VisaGccResident from './pages/VisaGccResident'
import VisaUae from './pages/VisaUae'
import SaudiResidencyOrigin from './pages/SaudiResidencyOrigin'
import VisaEgypt from './pages/VisaEgypt'
import { AnimatePresence, motion } from 'framer-motion'

export default function App() {
  const location = useLocation()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LogoOverlay />
      <ParticleBackground />
      <SideNav />
      <Box component="main" sx={{ ml: { xs: 0, md: 28 } }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}><Home /></motion.div>} />
            <Route path="/visa/egypt" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}><VisaEgypt /></motion.div>} />
            <Route path="/visa/:country" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}><VisaPage /></motion.div>} />
            <Route path="/visa/uae" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}><VisaUae /></motion.div>} />
            <Route path="/visa/uganda" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}><VisaUganda /></motion.div>} />
            <Route path="/jobs" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}><Jobs /></motion.div>} />
            <Route path="/about" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}><About /></motion.div>} />
            <Route path="/vision" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}><Vision /></motion.div>} />
            <Route path="/tourism/:country" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}><TourismPage /></motion.div>} />
            <Route path="/procedures/:service" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}><ProceduresPage /></motion.div>} />
            <Route path="/procedures/saudi-residency/:origin" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}><SaudiResidencyOrigin /></motion.div>} />
            <Route path="/visa/saudi/umrah" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}><VisaSaudiUmrah /></motion.div>} />
            <Route path="/visa/saudi/gcc-resident" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}><VisaGccResident /></motion.div>} />
          </Routes>
        </AnimatePresence>
      </Box>
      <Footer />
    </ThemeProvider>
  )
}
