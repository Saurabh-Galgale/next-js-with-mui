'use client';

import { TextField, Button, Container, Grid, Typography } from '@mui/material';
import { useState } from 'react';

export default function TextFieldInput() {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    if (!inputValue) {
      setError('This field is required');
    } else {
      setError('');
      alert(`Submitted: ${inputValue}`);
    }
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Text Field Input
      </Typography>
      <Grid container spacing={2} direction="column">
        <Grid item xs={12}>
          <TextField
            label="Enter Text"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={handleChange}
            error={!!error}
            helperText={error}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
