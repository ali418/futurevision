import Box from '@mui/material/Box'
import logo from '../assets/logo.png'

export default function LogoOverlay() {
  return (
    <Box component="img" src={logo} sx={{
      position: 'fixed',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      width: { xs: '80vw', md: '40vw' },
      maxWidth: '600px',
      opacity: 1,
      filter: 'drop-shadow(0 0 50px rgba(212,175,55,0.35))',
      zIndex: 999,
      pointerEvents: 'none'
    }} />
  )
}

