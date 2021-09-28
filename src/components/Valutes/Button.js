import React, { useState } from 'react';
import Button from "@mui/material/Button";
import ButtonGroup from '@mui/material/ButtonGroup';

export default function BasicButtonGroup() {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button size="large" variant="outlined">RUB</Button>
        <Button size="large">USD</Button>
        <Button size="large">EUR</Button>
        <Button size="large">GBP</Button>
        <Button size="large">JPY</Button>
        <Button >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/></svg>
        </Button>
    </ButtonGroup>
  );
}

