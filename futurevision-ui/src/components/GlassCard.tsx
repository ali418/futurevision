import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'

const Glass = styled(Card)(({ theme }) => ({
  background: 'rgba(17, 24, 42, 0.5)',
  backdropFilter: 'blur(12px)',
  border: '1px solid rgba(255,255,255,0.08)',
  boxShadow: '0 10px 30px rgba(0,0,0,0.4), inset 0 0 80px rgba(212,175,55,0.06)',
  borderRadius: theme.shape.borderRadius,
}))

export default Glass

