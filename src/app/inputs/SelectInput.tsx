'use client';

import { Container, Typography, Select, MenuItem } from '@mui/material';
import { useState } from 'react';

export default function SelectInput() {
  const [value, setValue] = useState('');

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Select Input
      </Typography>
      <Select value={value} onChange={(e) => setValue(e.target.value)} fullWidth>
        <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
        <MenuItem value="option3">Option 3</MenuItem>
      </Select>
    </Container>
  );
}
