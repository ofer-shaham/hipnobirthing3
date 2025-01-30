import React from 'react';
import { Container, Typography, Box, Grid, Avatar } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Award, Heart, Users } from 'lucide-react';

export const About = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Box sx={{ position: 'relative' }}>
            <Avatar
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              sx={{
                width: { xs: 200, md: 300 },
                height: { xs: 200, md: 300 },
                mx: 'auto'
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" gutterBottom color="primary">
            {t('about.title')}
          </Typography>
          <Typography variant="body1" paragraph>
            With over a decade of experience in supporting mothers through their pregnancy and early parenthood journey, I am dedicated to providing comprehensive guidance in hypnobirthing and breastfeeding.
          </Typography>
          <Typography variant="body1" paragraph>
            My approach combines evidence-based practices with holistic care, ensuring that each mother receives personalized support tailored to her unique needs and circumstances.
          </Typography>
        </Grid>
      </Grid>

      {/* Credentials Section */}
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" gutterBottom textAlign="center" color="primary">
          Credentials & Experience
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Award size={48} color="#4CAF50" />
              <Typography variant="h6" sx={{ mt: 2 }}>
                Certified Professional
              </Typography>
              <Typography>
                Internationally recognized certifications in hypnobirthing and lactation consulting
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Heart size={48} color="#4CAF50" />
              <Typography variant="h6" sx={{ mt: 2 }}>
                Passionate Care
              </Typography>
              <Typography>
                Dedicated to providing compassionate and personalized support
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Users size={48} color="#4CAF50" />
              <Typography variant="h6" sx={{ mt: 2 }}>
                Community Focus
              </Typography>
              <Typography>
                Building a supportive community of empowered mothers
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};