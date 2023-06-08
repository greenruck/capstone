import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import { ReactComponent as PaintIcon } from "./art.svg";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => alert("Welcome to the Art Database. Enjoy all the arts brought to you by the Art Institute of Chicago!")}
          >
            <PaintIcon 
            style={{ height: 53, width: 36 }}
            alt="website logo"
            
            />
          </IconButton>
          <Button color="inherit" href='/'>Timeline </Button>
          <Button color="inherit" href='/search'> Search</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}