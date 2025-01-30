import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';

export const Pricing = () => {
  const { t } = useTranslation();

  const plans = [
    {
      title: 'Hypnobirthing Complete Course',
      price: '1,200',
      features: [
        '4 weekly sessions (2.5 hours each)',
        'Comprehensive course materials',
        'Relaxation audio recordings',
        'WhatsApp support throughout pregnancy',
        'Partner included in all sessions'
      ]
    },
    {
      title: 'Breastfeeding Preparation Class',
      price: '400',
      features: [
        '3-hour comprehensive workshop',
        'Practical demonstrations',
        'Take-home reference guide',
        'Email support for 2 weeks',
        'Partner welcome to attend'
      ]
    },
    {
      title: 'Private Consultation',
      price: '250',
      features: [
        '90-minute private session',
        'Personalized care plan',
        'Follow-up support',
        'Flexible scheduling',
        'Virtual options available'
      ]
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" gutterBottom color="primary" textAlign="center">
        Investment in Your Journey
      </Typography>
      <Typography variant="h5" textAlign="center" sx={{ mb: 6 }}>
        Choose the support that best fits your needs
      </Typography>

      <Grid container spacing={4}>
        {plans.map((plan, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              elevation={3}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-8px)'
                }
              }}
            >
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h4" component="h2" gutterBottom textAlign="center" color="primary">
                  {plan.title}
                </Typography>
                <Typography variant="h3" component="p" textAlign="center" sx={{ mb: 3 }}>
                  ₪{plan.price}
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                  {plan.features.map((feature, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 2
                      }}
                    >
                      <Check size={20} color="#4CAF50" />
                      <Typography sx={{ ml: 2 }}>{feature}</Typography>
                    </Box>
                  ))}
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  sx={{ mt: 3 }}
                  href="/contact"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="body1" color="text.secondary">
          * Payment plans available upon request
        </Typography>
        <Typography variant="body1" color="text.secondary">
          * Prices are in Israeli Shekels (₪)
        </Typography>
      </Box>
    </Container>
  );
};