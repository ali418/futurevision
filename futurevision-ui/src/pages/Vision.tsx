import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export default function Vision() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>رؤيتنا</Typography>
      <Typography variant="body1" color="text.secondary">
        نطمح لبناء بوابة موثوقة تجمع الخدمات في مكان واحد، بواجهة عربية حديثة.
      </Typography>
    </Container>
  )
}

