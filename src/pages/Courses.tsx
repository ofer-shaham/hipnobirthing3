import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const Courses = () => {
  const { t } = useTranslation();

  const courses = [
    {
      title: t('courses.hypnobirthing.title'),
      description: t('courses.hypnobirthing.description'),
      image: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      details: [
        'Understanding the philosophy of hypnobirthing',
        'Breathing techniques and relaxation methods',
        'Partner involvement and support',
        'Birth preparation and visualization',
        '4 weekly sessions of 2.5 hours each'
      ]
    },
    {
      title: t('courses.breastfeeding.title'),
      description: t('courses.breastfeeding.description'),
      image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      details: [
        'Proper latch and positioning',
        'Understanding milk supply',
        'Common challenges and solutions',
        'Pumping and storage guidelines',
        'Individual consultation available'
      ]
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" gutterBottom color="primary" textAlign="center">
        {t('courses.title')}
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {courses.map((course, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card elevation={3}>
              <CardMedia
                component="img"
                height="300"
                image={course.image}
                alt={course.title}
                sx={{
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
              <CardContent>
                <Typography variant="h4" gutterBottom color="primary">
                  {course.title}
                </Typography>
                <Typography variant="body1" paragraph>
                  {course.description}
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  {course.details.map((detail, idx) => (
                    <Typography component="li" key={idx} sx={{ mb: 1 }}>
                      {detail}
                    </Typography>
                  ))}
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  sx={{ mt: 2 }}
                  href="/contact"
                >
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};