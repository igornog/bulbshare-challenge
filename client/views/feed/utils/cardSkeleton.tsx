import React from 'react';
import { Box, Skeleton, useMediaQuery } from '@mui/material';

export const CardSkeleton = () => {
  const isMobile = useMediaQuery('(max-width:1079px)');

  return (
    <>
      <Box display={'flex'} alignItems={'center'} gap={'20px'}>
        <Skeleton variant='circular' width={60} height={60} />
        <Box display={'flex'} flexDirection={'column'}>
          <Skeleton
            variant='text'
            width={isMobile ? 200 : 500}
            sx={{ fontSize: '2rem' }}
          />
          <Skeleton
            variant='text'
            width={isMobile ? 200 : 700}
            sx={{ fontSize: '2rem' }}
          />
        </Box>
      </Box>
      <Skeleton
        variant={'rectangular'}
        width={'100%'}
        height={'500px'}
        animation={'wave'}
      />
    </>
  );
};
