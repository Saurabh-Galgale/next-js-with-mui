'use client';

import { Container, Typography, Checkbox, FormControlLabel } from '@mui/material';
import { useState } from 'react';

export default function CheckboxInput() {
  const [checked, setChecked] = useState(false);

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Checkbox Input
      </Typography>
      <FormControlLabel
        control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />}
        label="Check me"
      />
    </Container>
  );
}
