import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function Footer() {
  return (
    <Box component="footer" sx={{ mt: 8, py: 4, borderTop: '1px solid', borderColor: 'divider', textAlign: 'center', background: 'linear-gradient(180deg, rgba(7,21,33,0) 0%, rgba(7,21,33,0.5) 100%)' }}>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Future Vision. جميع الحقوق محفوظة.
      </Typography>
    </Box>
  )
}

