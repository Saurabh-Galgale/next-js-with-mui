'use client';

import { Container, Typography } from '@mui/material';

const ErrorPage = () => (
  <Container>
    <Typography variant="h4" color="error" gutterBottom>
      Input Not Found
    </Typography>
    <Typography>Please check the URL or select an input from the list.</Typography>
  </Container>
);

export default ErrorPage;
