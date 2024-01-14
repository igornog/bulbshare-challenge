import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { FeedDetailsProps } from './types';
import styled from 'styled-components';
import closeButton from '../../assets/close-dialog.svg';

const StyledBackground = styled(Box)`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #000;
`;

const StyledButton = styled.button`
  background-image: url(${closeButton});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: none;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 20px;
  left: 20px;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: opacity 0.2s ease-in-out;
  }
`;

export const StyledImage = styled.figure<{
  bannerImage?: string;
}>`
  width: 100%;
  height: 100%;
  background-image: url(${({ bannerImage }) => bannerImage});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  margin: 0;
`;

const StyledAside = styled.aside`
  width: 45%;
  background-color: #fff;
`;

export const FeedDetails: React.FC<FeedDetailsProps> = ({
  feedSelected,
  setFeedSelected,
}) => {
  const isMobile = useMediaQuery('(max-width:1079px)');

  return (
    <StyledBackground>
      <StyledButton
        onClick={() => {
          setFeedSelected(null);
        }}
      ></StyledButton>
      <Box height={'100vh'} display={'flex'}>
        <Box width={'55%'} padding={'0 10vw'}>
          <StyledImage bannerImage={feedSelected?.banner_image} />
        </Box>
        <StyledAside></StyledAside>
      </Box>
    </StyledBackground>
  );
};
