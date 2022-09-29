// UI requirements
// AddIcon on the left
// Install MUI icons library npm install @mui/icons-material
// TextInput on the right 
// Event should be fired when the user his the 'return' key
// The text should be cleared when the user hits the 'return' key
// Test with Storybook 

import React from 'react';
import { InputBase, Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export const TextInput = ({ placeholder, onChange, onSubmit, value }) => {
// paper
// AddIcon
// InputBase

  return (
    <Paper
      component="form"
      onSubmit={onSubmit}
      square={true}
      sx={{ display: 'flex', alignItems: 'center', padding: '16px' }}
    >
      <AddIcon
        fontSize="large"
        sx={{ marginRight: '16px' }}
      />
      <InputBase
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </Paper>
  )

}