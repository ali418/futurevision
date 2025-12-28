import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'

export default function Services() {
  return (
    <Box sx={{ pb: 8 }}>
      <SectionHeader title="خدمات رئيسية" subtitle="كل الخدمات في صفحة واحدة" />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ServiceCard title="فيزا يوغندا" desc="نموذج واضح للتقديم مع رفع المستندات" action="تقديم" to="/visa/uganda" />
          </Grid>
          <Grid item xs={12} md={6}>
            <ServiceCard title="إجراءات إقامة السعودية" desc="حزم متنوعة تناسب احتياجك وميزانيتك" action="استعراض الحزم" to="/procedures/saudi-residency/uganda" />
          </Grid>
          <Grid item xs={12} md={6}>
            <ServiceCard title="سياحة ووجهات" desc="اكتشف الوجهات المميزة وبرامج الرحلات" action="تصفّح" to="/tourism/uganda" />
          </Grid>
          <Grid item xs={12} md={6}>
            <ServiceCard title="تفويض التأشيرة – كمبالا" desc="DON-MO CONTRACTORS LTD licence NO:E24070011" action="" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}