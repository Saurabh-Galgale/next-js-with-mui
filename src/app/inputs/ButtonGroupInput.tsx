'use client';

import { Container, Typography, Button, ButtonGroup } from '@mui/material';

export default function ButtonGroupInput() {
  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Button Group Input
      </Typography>
      <ButtonGroup variant="contained" color="primary">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
    </Container>
  );
}
