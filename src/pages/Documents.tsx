import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Award, GraduationCap, FileText } from 'lucide-react';

export const Documents = () => {
  const { t } = useTranslation();

  const certifications = [
    {
      title: 'HypnoBirthing® Practitioner Certification',
      organization: 'HypnoBirthing Institute',
      year: '2019',
      icon: <GraduationCap size={40} color="#4CAF50" />
    },
    {
      title: 'Certified Lactation Consultant',
      organization: 'International Board of Lactation Consultant Examiners',
      year: '2018',
      icon: <Award size={40} color="#4CAF50" />
    },
    {
      title: 'Prenatal Yoga Certification',
      organization: 'International Yoga Federation',
      year: '2020',
      icon: <FileText size={40} color="#4CAF50" />
    }
  ];

  const achievements = [
    {
      title: 'Featured Speaker',
      description: 'International Birthing Conference 2022',
      year: '2022'
    },
    {
      title: 'Published Research',
      description: 'Effects of Hypnobirthing on Birth Outcomes',
      year: '2021'
    },
    {
      title: 'Community Award',
      description: 'Excellence in Maternal Support Services',
      year: '2023'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" gutterBottom color="primary" textAlign="center">
        Professional Credentials
      </Typography>

      {/* Certifications */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom color="primary">
          Certifications
        </Typography>
        <Grid container spacing={4}>
          {certifications.map((cert, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              >
                {cert.icon}
                <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                  {cert.title}
                </Typography>
                <Typography color="text.secondary">
                  {cert.organization}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {cert.year}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Achievements */}
      <Box>
        <Typography variant="h4" gutterBottom color="primary">
          Professional Achievements
        </Typography>
        <Grid container spacing={4}>
          {achievements.map((achievement, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%'
                }}
              >
                <Typography variant="h6" gutterBottom>
                  {achievement.title}
                </Typography>
                <Typography paragraph>
                  {achievement.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {achievement.year}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};