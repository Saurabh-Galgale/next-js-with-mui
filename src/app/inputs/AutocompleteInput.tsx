'use client';

import { Container, Typography, Autocomplete, TextField } from '@mui/material';
import { useState } from 'react';

export default function AutocompleteInput() {
    const options = [
        'The Shawshank Redemption',
        'The Godfather',
        'The Dark Knight',
        'The Godfather Part II',
        '12 Angry Men',
        'The Lord of the Rings: The Return of the King',
        'Schindler’s List',
        'Pulp Fiction',
        'The Lord of the Rings: The Fellowship of the Ring',
        'The Good, the Bad and the Ugly',
        'Forrest Gump',
        'The Lord of the Rings: The Two Towers',
        'Fight Club',
        'Inception',
        'Star Wars: Episode V - The Empire Strikes Back',
        'The Matrix',
        'Goodfellas',
        'One Flew Over the Cuckoo’s Nest',
        'Interstellar',
        'Se7en',
        'It’s a Wonderful Life',
        'Seven Samurai',
        'The Silence of the Lambs',
        'Saving Private Ryan',
        'City of God',
        'The Green Mile',
        'Life Is Beautiful',
        'Terminator 2: Judgment Day',
        'Star Wars: Episode IV - A New Hope',
        'Back to the Future',
        'Spirited Away',
        'The Pianist',
        'Parasite',
        'Gladiator',
        'Psycho',
        'The Lion King',
        'The Departed',
        'Grave of the Fireflies',
        'Whiplash',
        'Spider-Man: Across the Spider-Verse',
        'American History X',
        'The Prestige',
        'Léon: The Professional',
        'Casablanca',
        'The Usual Suspects',
        'The Intouchables',
        'Cinema Paradiso',
        'Modern Times',
        'Alien'
      ];
      
  const [value, setValue] = useState<string | null>(null);

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Autocomplete Input
      </Typography>
      <Autocomplete
        options={options}
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        renderInput={(params) => <TextField {...params} label="Select an option" />}
        fullWidth
      />
    </Container>
  );
}
