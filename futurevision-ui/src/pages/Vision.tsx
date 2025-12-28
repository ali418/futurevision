import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export default function Vision() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>رؤيتنا</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        نسعى لأن تكون Future Vision بوابتكم نحو مستقبل مشرق في عالم السياحة والسفر، حيث نقدم خدمات سياحية متطورة تواكب تطلعات عملائنا، مع الالتزام بالابتكار والشمولية في كل رحلة.
      </Typography>
      <Typography variant="body1" color="text.secondary">
        تتمثل رؤيتنا في تقديم تجربة سفر استثنائية تجمع بين الريادة والتكنولوجيا الحديثة لتلبية متطلبات المسافر العصري. نعمل باستمرار على تطوير مفاهيمنا السياحية ونفتح آفاقاً جديدة للرحلات العالمية، لنرتقي بمعايير الصناعة ونحقق أقصى درجات السعادة والإلهام لعملائنا من مختلف أنحاء العالم.
      </Typography>
    </Container>
  )
}

