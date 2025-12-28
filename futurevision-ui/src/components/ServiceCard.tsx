import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link as RouterLink } from 'react-router-dom'

export default function ServiceCard({ title, desc, icon, action = 'تصفّح', to, onClick }: { title: string; desc: string; icon?: React.ReactNode; action?: string; to?: string; onClick?: () => void }) {
  const content = (
    <>
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1, background: 'linear-gradient(135deg, rgba(14,165,233,0.25), rgba(20,184,166,0.25))' }}>
        {icon}
        <Typography variant="h6" sx={{ fontWeight: 700 }}>{title}</Typography>
      </Box>
      <Box sx={{ p: 2 }}>
        <Typography color="text.secondary" sx={{ mb: 2 }}>{desc}</Typography>
        {action && !to && (
          <Button variant="contained" onClick={onClick}>{action}</Button>
        )}
      </Box>
    </>
  )

  if (to) {
    return (
      <Card sx={{ overflow: 'hidden' }}>
        <CardActionArea component={RouterLink} to={to} sx={{ display: 'block' }}>
          {content}
        </CardActionArea>
      </Card>
    )
  }
  return (
    <Card sx={{ overflow: 'hidden' }}>
      {content}
    </Card>
  )
}