import React from 'react';
import Box from '@mui/material/Box/Box';
import { CardHeader } from './cardHeader';
import { Typography, useMediaQuery } from '@mui/material';
import { BannerBackground, StyledBox, StyledImage } from './styles';
import { CardProps } from './types';

export const Card = React.forwardRef((props: CardProps, ref) => {
  const isMobile = useMediaQuery('(max-width:1079px)');

  return (
    <StyledBox
      ref={ref}
      width={'100%'}
      borderRadius={'4px'}
      height={'auto'}
      boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.2)'}
      onClick={() => {
        props.setFeedSelected(props.feed);
      }}
    >
      <CardHeader
        brandName={props.brandName}
        brandLogo={props.brandLogo}
        briefRef={props.briefRef}
      />
      <Box position={'relative'}>
        <BannerBackground isMobile={isMobile}>
          <Typography
            variant={'h3'}
            fontSize={isMobile ? '10px' : '18px'}
            fontWeight={'bold'}
          >
            {props.bannerText}
          </Typography>
        </BannerBackground>
        <Box width={'100%'} height={'auto'}>
          <StyledImage bannerImage={props.bannerImage} />
        </Box>
      </Box>
    </StyledBox>
  );
});
