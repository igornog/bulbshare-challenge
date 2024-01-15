import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { FeedDetailsProps } from './types';
import { Slider } from '../../components/slider/slider';
import { StyledBackground, StyledButton, StyledAside } from './styles';
import { CommentsList } from '../../components/aside';

export const FeedDetails: React.FC<FeedDetailsProps> = ({
  feedSelected,
  setFeedSelected,
}) => {
  const isMobile = useMediaQuery('(max-width:1079px)');

  return (
    <StyledBackground>
      {isMobile ? (
        <Typography
          variant='h1'
          fontSize={'18px'}
          fontWeight={900}
          color={'#FFF'}
        >
          not available for mobile devices
        </Typography>
      ) : (
        <>
          <StyledButton
            onClick={() => {
              setFeedSelected(null);
            }}
          ></StyledButton>
          <Box height={'100%'} display={'flex'}>
            <Slider itemSelected={feedSelected} />
            <StyledAside>
              <CommentsList itemSelected={feedSelected} />
            </StyledAside>
          </Box>
        </>
      )}
    </StyledBackground>
  );
};
