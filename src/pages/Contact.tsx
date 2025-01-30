import React from 'react';
import { Container, Typography, Box, Grid, TextField, Button, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react';

export const Contact = () => {
  const { t } = useTranslation();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={6}>
        {/* Contact Form */}
        <Grid item xs={12} md={7}>
          <Typography variant="h2" gutterBottom color="primary">
            {t('contact.title')}
          </Typography>
          <Typography variant="body1" paragraph>
            I'm here to support you on your journey. Reach out with any questions about my services.
          </Typography>
          <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    required
                    type="email"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Phone"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    multiline
                    rows={4}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12} md={5}>
          <Box sx={{ mt: { xs: 4, md: 12 } }}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h4" gutterBottom color="primary">
                Get in Touch
              </Typography>
              
              <Box sx={{ mt: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Phone size={24} color="#4CAF50" />
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="body1">
                      +972 50 123 4567
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Mail size={24} color="#4CAF50" />
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="body1">
                      contact@example.com
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <MessageCircle size={24} color="#4CAF50" />
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="body1">
                      WhatsApp Available
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <MapPin size={24} color="#4CAF50" />
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="body1">
                      Tel Aviv-Yafo, Israel
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};