'use client';

import { Container, Typography, Slider } from '@mui/material';
import { useState } from 'react';

export default function SliderInput() {
  const [value, setValue] = useState(30);

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Slider Input
      </Typography>
      <Slider value={value} onChange={(e, newValue) => setValue(newValue as number)} />
    </Container>
  );
}
