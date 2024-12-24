'use client';

import { Container, Typography, Switch, FormControlLabel } from '@mui/material';
import { useState } from 'react';

export default function SwitchInput() {
  const [checked, setChecked] = useState(false);

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Switch Input
      </Typography>
      <FormControlLabel
        control={<Switch checked={checked} onChange={() => setChecked(!checked)} />}
        label="Toggle me"
      />
    </Container>
  );
}
