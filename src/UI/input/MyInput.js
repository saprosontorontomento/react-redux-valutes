import React from 'react';
import './MyInput.scss';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MyInput() {
  return (
    <Box
      sx={{
        width: 500,
      }}
    >
      <TextField 
        sx={{
          width: 450,
        }}
        fullWidth 
        label="поиск" 
        id="fullWidth" />
    </Box>
  );
}