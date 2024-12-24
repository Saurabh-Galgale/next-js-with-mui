'use client';

import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';
import { Container, Typography, CircularProgress } from '@mui/material';
import { Suspense } from 'react';

const InputPage = () => {
  const { input } = useParams(); // Get the dynamic segment from the URL

  const inputMap: Record<string, string> = {
    'text-field': 'TextFieldInput',
    'autocomplete': "AutocompleteInput",
    'button': "ButtonInput",
    "button-group": "ButtonGroupInput",
    'checkbox': "CheckboxInput",
    'fab': "FabInput", // Floating Action Button
    "radio-group": "RadioGroupInput",
    'rating': "RatingInput",
    'select': "SelectInput",
    'slider': "SliderInput",
    'switch': "SwitchInput",
    "transfer-list": "TransferListInput",
    "toggle-button": "ToggleButtonInput",
  };

  const componentName = inputMap[input];

  // Validate if the component exists in the map
  if (!componentName) {
    return (
      <Container>
        <Typography variant="h6" color="error">
          Input name is missing or invalid.
        </Typography>
      </Container>
    );
  }

  // Dynamically import the correct component based on the input name
  const InputComponent = dynamic(() =>
    import(`../${componentName}`).catch((err) => {
      console.error(err);
      return import('../../components/ErrorPage'); // Fallback if the import fails
    })
  );

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {input.replace('-', ' ').toUpperCase()} Input
      </Typography>
      <Suspense fallback={<CircularProgress />}>
        <InputComponent />
      </Suspense>
    </Container>
  );
};

export default InputPage;
