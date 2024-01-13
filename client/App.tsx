import React from 'react';
import './App.css';
import Box from '@mui/material/Box/Box';
import { Feed } from './views/feed';

function App() {
  return (
    <div className='App'>
      <Box>
        <Feed />
      </Box>
    </div>
  );
}

export default App;
