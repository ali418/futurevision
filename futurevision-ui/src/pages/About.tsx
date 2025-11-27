import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export default function About() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>من نحن</Typography>
      <Typography variant="body1" color="text.secondary">
        Future Vision منصة متكاملة تقدم خدمات الفيزا والإجراءات والوظائف بتجربة سهلة وموثوقة.
      </Typography>
    </Container>
  )
}

