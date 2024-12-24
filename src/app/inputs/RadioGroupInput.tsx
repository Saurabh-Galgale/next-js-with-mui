'use client';

import { Container, Typography, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import { useState } from 'react';

export default function RadioGroupInput() {
  const [value, setValue] = useState('');

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Radio Group Input
      </Typography>
      <RadioGroup value={value} onChange={(e) => setValue(e.target.value)}>
        <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
        <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
      </RadioGroup>
    </Container>
  );
}
