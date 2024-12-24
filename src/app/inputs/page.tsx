import Link from 'next/link';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

export default function InputsPage() {
  const inputList = [
    'Autocomplete',
    'Button',
    'Button Group',
    'Checkbox',
    'Floating Action Button',
    'Radio Group',
    'Rating',
    'Select',
    'Slider',
    'Switch',
    'Text Field',
    'Transfer List',
    'Toggle Button'
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom sx={{display: "flex", justifyContent: "center", marginBottom: 4}}>
        Material UI Inputs
      </Typography>
      <Grid container spacing={3}>
        {inputList.map((input) => (
          <Grid item xs={12} md={4} key={input}>
            <Link href={`/inputs/${input.toLowerCase().replace(' ', '-')}`} passHref>
              <Card>
                <CardContent>
                  <Typography variant="h6">{input}</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
