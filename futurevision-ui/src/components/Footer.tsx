import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function Footer() {
  return (
    <Box component="footer" sx={{ mt: 8, py: 4, borderTop: '1px solid', borderColor: 'divider', textAlign: 'center' }}>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Future Vision. جميع الحقوق محفوظة.
      </Typography>
    </Box>
  )
}

