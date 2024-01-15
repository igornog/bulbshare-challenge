import React from 'react';
import Slide from '@mui/material/Slide/Slide';
import Box from '@mui/material/Box/Box';
import { FeedItem } from '../../../utils/types/feedItem';
import { Avatar, Typography, useMediaQuery } from '@mui/material';
import { formatDate } from '../../../utils/helpers/formatDate';

interface FeedDetailsSlideProps {
  itemSelected: FeedItem;
  active: boolean;
}

export const FeedDetailsSlide: React.FC<FeedDetailsSlideProps> = ({
  itemSelected,
  active,
}) => {
  const isMobile = useMediaQuery('(max-width:1079px)');

  return (
    <Slide direction='up' in={active} mountOnEnter unmountOnExit>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          backgroundColor: '#fff',
          width: '-webkit-fill-available',
          padding: '10vh 100px',
          overflowX: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <Avatar
          src={itemSelected.brand.logo}
          alt={itemSelected.brand.name}
          sx={{
            width: isMobile ? '20px' : '40px',
            alignSelf: 'center',
            img: {
              objectFit: 'contain',
            },
          }}
        />
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='h1' fontSize={'24px'} fontWeight={900}>
            {itemSelected.brand.name}
          </Typography>
          <Typography variant='subtitle1'>
            {formatDate(itemSelected.starts_on)}
          </Typography>
        </Box>
        <Typography variant='body1'>{itemSelected.description}</Typography>
        {/* <Box marginBottom={'20vh'}> */}
        <img src={itemSelected.ad_1_image} alt='ad1' width={'100%'} />
        <img src={itemSelected.ad_2_image} alt='ad2' width={'100%'} />
        {/* </Box> */}
      </Box>
    </Slide>
  );
};
