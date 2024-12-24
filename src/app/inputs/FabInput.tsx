'use client';

import { Container, Typography, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function FabInput() {
  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Floating Action Button
      </Typography>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Container>
  );
}
