import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

export default function ProceduresSaudi() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>إجراءات السعودية</Typography>
      <List>
        {[
          'إجراء 1: وصف قصير',
          'إجراء 2: وصف قصير',
          'إجراء 3: وصف قصير'
        ].map((text, i) => (
          <ListItem key={i} divider>
            <ListItemText primary={text} secondary="تفاصيل إضافية ستظهر لاحقاً" />
          </ListItem>
        ))}
      </List>
    </Container>
  )
}

