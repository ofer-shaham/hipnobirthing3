import React from 'react';
import { Box, Container, Typography, Link, IconButton, useTheme } from '@mui/material';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: theme.palette.primary.main,
        color: 'white',
        py: 6,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 4
          }}
        >
          <Box>
            <Typography variant="h6" gutterBottom>
              {t('navigation.contact')}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton color="inherit" component={Link} href="https://instagram.com">
                <Instagram />
              </IconButton>
              <IconButton color="inherit" component={Link} href="https://facebook.com">
                <Facebook />
              </IconButton>
              <IconButton color="inherit" component={Link} href="mailto:contact@example.com">
                <Mail />
              </IconButton>
              <IconButton color="inherit" component={Link} href="tel:+1234567890">
                <Phone />
              </IconButton>
            </Box>
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2">
              © {new Date().getFullYear()} {t('footer.rights')}
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Link href="/privacy" color="inherit" sx={{ mx: 1 }}>
                {t('footer.privacy')}
              </Link>
              <Link href="/terms" color="inherit" sx={{ mx: 1 }}>
                {t('footer.terms')}
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};