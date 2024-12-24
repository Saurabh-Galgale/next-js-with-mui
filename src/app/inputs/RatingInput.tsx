'use client';

import { Container, Typography, Rating } from '@mui/material';
import { useState } from 'react';

export default function RatingInput() {
  const [value, setValue] = useState<number | null>(null);

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Rating Input
      </Typography>
      <Rating value={value} onChange={(e, newValue) => setValue(newValue)} />
    </Container>
  );
}
