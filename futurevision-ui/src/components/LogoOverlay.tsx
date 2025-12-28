import Box from '@mui/material/Box'
import logo from '../assets/logo.png'

export default function LogoOverlay() {
  return (
    <Box component="img" src={logo} sx={{
      position: 'fixed',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      width: { xs: '78vw', md: '40vw' },
      maxWidth: '520px',
      opacity: 0.6,
      filter: 'brightness(1.05) drop-shadow(0 0 24px rgba(14,165,233,0.45))',
      zIndex: 999,
      pointerEvents: 'none'
    }} />
  )
}

