'use client';

import { Container, Typography, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useState } from 'react';

export default function ToggleButtonInput() {
  const [alignment, setAlignment] = useState<string | null>('left');

  const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
    setAlignment(newAlignment);
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Toggle Button Input
      </Typography>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="left" aria-label="left aligned">
          Left
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
          Center
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
          Right
        </ToggleButton>
      </ToggleButtonGroup>
    </Container>
  );
}
