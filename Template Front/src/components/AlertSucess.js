import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';


export default function DescriptionAlerts() {

  return (
    <Stack sx={{ width: '100%' }}>
      <Alert severity="success">
        <AlertTitle>Order Accept!!</AlertTitle>
      </Alert>
    </Stack>
  );
}
