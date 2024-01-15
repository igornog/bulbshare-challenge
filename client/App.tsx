import React from 'react';
import './App.css';
import Box from '@mui/material/Box/Box';
import { Feed } from './views/feed';
import { FeedDetails } from './views/feedDetails';

function App() {
  const [feedSelected, setFeedSelected] = React.useState<any>(null);
  return (
    <div className='App'>
      <Box>
        {!feedSelected ? (
          <Feed setFeedSelected={setFeedSelected} />
        ) : (
          <FeedDetails
            feedSelected={feedSelected}
            setFeedSelected={setFeedSelected}
          />
        )}
      </Box>
    </div>
  );
}

export default App;
