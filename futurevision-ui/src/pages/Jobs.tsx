import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'

export default function Jobs() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>فرص الوظائف</Typography>
      <TextField label="ابحث بالعنوان أو الموقع" fullWidth sx={{ mb: 3 }} />
      <Grid container spacing={3}>
        {[1,2,3].map((id) => (
          <Grid item xs={12} md={4} key={id}>
            <Card>
              <CardContent>
                <Typography variant="h6">وظيفة {id}</Typography>
                <Typography variant="body2" color="text.secondary">وصف مختصر للوظيفة.</Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'flex-end' }}>
                <Button size="small">تقديم</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

