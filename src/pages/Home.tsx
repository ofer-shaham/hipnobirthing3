import React from 'react';
import { Container, Typography, Box, Button, Grid, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Heart, Baby, Leaf } from 'lucide-react';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1544126592-807ade215a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '70vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            variant="h1"
            color="white"
            gutterBottom
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}
          >
            {t('home.welcome')}
          </Typography>
          <Typography
            variant="h4"
            color="white"
            sx={{
              mb: 4,
              maxWidth: '600px',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
            }}
          >
            {t('home.subtitle')}
          </Typography>
          <Button
            variant="contained"
            size="large"
            color="primary"
            href="/courses"
            sx={{ fontSize: '1.2rem', py: 1.5, px: 4 }}
          >
            Explore Our Courses
          </Button>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
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
              <Heart size={48} color="#4CAF50" />
              <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
                Hypnobirthing
              </Typography>
              <Typography>
                Experience a peaceful and empowering birth through proven hypnobirthing techniques.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
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
              <Baby size={48} color="#4CAF50" />
              <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
                Breastfeeding Support
              </Typography>
              <Typography>
                Expert guidance and support for a successful breastfeeding journey.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
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
              <Leaf size={48} color="#4CAF50" />
              <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
                Holistic Approach
              </Typography>
              <Typography>
                Natural and mindful methods for pregnancy, birth, and early parenthood.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};