import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export default function About() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>من نحن</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        شركة Future Vision هي بوابة المستقبل لعشاق السفر والسياحة، حيث نوفر لعملائنا من كافة أنحاء العالم خدمات سياحية متكاملة وشاملة ذات جودة عالية واحترافية لا مثيل لها.
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        نتميز بخبرتنا الواسعة وشبكتنا العالمية التي تغطي أبرز الوجهات السياحية، مما يمكّن عملاءنا من الاستمتاع بتجارب سفر غنية ومبتكرة. نحن شركة رائدة في مجال تنظيم الرحلات والسياحة، ملتزمون بتطبيق أعلى معايير الجودة والسلامة في كل رحلة.
      </Typography>
      <Typography variant="body1" color="text.secondary">
        يحرص فريقنا المحترف على تقديم خدمات شخصية تلبي تطلعات كل مسافر، تماشياً مع رؤية Future Vision في قيادة مستقبل السفر والسياحة بلمسة من التميّز والتكنولوجيا المتطورة.
      </Typography>
    </Container>
  )
}

