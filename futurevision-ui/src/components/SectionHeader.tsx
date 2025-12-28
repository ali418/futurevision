import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'

export default function SectionHeader({ title, subtitle, chips = [] }: { title: string; subtitle?: string; chips?: string[] }) {
  return (
    <Box sx={{ py: 6, background: 'radial-gradient(600px 240px at 50% -60px, rgba(14,165,233,0.18), transparent)' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ fontWeight: 800, mb: 1 }}>{title}</Typography>
        {subtitle && <Typography color="text.secondary" sx={{ mb: 2 }}>{subtitle}</Typography>}
        {chips.length > 0 && (
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {chips.map((c) => (
              <Chip key={c} label={c} />
            ))}
          </Box>
        )}
      </Container>
    </Box>
  )
}