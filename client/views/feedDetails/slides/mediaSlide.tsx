import React from 'react';
import Slide from '@mui/material/Slide/Slide';
import styled from 'styled-components';
import Box from '@mui/material/Box/Box';

export const StyledImage = styled.figure<{
  imageUrl?: string;
}>`
  width: 100%;
  height: 100%;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  margin: 0;
`;

export const MediaSlide = ({ itemSelected, active }) => {
  return (
    <Slide
      direction='down'
      in={active}
      appear={false}
      mountOnEnter
      unmountOnExit
    >
      <Box height={'100%'} padding={'0 10vw'}>
        <StyledImage imageUrl={itemSelected?.banner_image} />
      </Box>
    </Slide>
  );
};
