'use client';

import { Container, Button, Typography } from '@mui/material';

export default function ButtonInput() {
  const handleClick = () => alert('Button Clicked!');

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Button Input
      </Typography>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Click Me
      </Button>
    </Container>
  );
}
