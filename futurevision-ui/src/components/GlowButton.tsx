import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

const GlowButton = styled(Button)(({ theme }) => ({
  position: 'relative',
  boxShadow: '0 0 0 rgba(0,0,0,0)',
  transition: 'box-shadow .25s, transform .2s',
  backgroundImage: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
  color: theme.palette.getContrastText(theme.palette.secondary.main),
  ':hover': {
    boxShadow: `0 0 20px ${theme.palette.secondary.light}, 0 0 6px ${theme.palette.primary.light} inset`,
    transform: 'translateY(-1px)'
  }
}))

export default GlowButton

