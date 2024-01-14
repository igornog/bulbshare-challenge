import React from 'react';
import Box from '@mui/material/Box/Box';
import Avatar from '@mui/material/Avatar/Avatar';
import { Link, Typography, useMediaQuery } from '@mui/material';
import { CardHeaderProps } from './types';

export const CardHeader: React.FC<CardHeaderProps> = ({
  briefRef,
  brandName,
  brandLogo,
}) => {
  const isMobile = useMediaQuery('(max-width:1079px)');

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      gap={'10px'}
      width={'auto'}
      padding={isMobile ? '5px' : '20px'}
    >
      <Box
        display={'flex'}
        justifyContent={'flex-start'}
        alignItems={'center'}
        gap={isMobile ? '5px' : '10px'}
      >
        <Avatar
          src={brandLogo}
          alt={brandName}
          sx={{
            width: isMobile ? '20px' : '40px',
            img: {
              objectFit: 'contain',
            },
          }}
        />
        <Typography
          variant={'h2'}
          fontSize={isMobile ? '8px' : '14px'}
          fontWeight={'bold'}
          textTransform={'lowercase'}
        >
          {brandName}
        </Typography>
      </Box>
      <Link
        // href={`https://briefs.co/${briefRef}`}
        target={'_blank'}
        underline={'none'}
        sx={{
          cursor: 'pointer',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            filter: 'brightness(0.7)',
            transition: 'all 0.2s ease-in-out',
          },
        }}
      >
        <Typography
          variant={'h3'}
          fontSize={isMobile ? '8px' : '16px'}
          fontWeight={'bold'}
          textTransform={'uppercase'}
          color={'#3333FF'}
          padding={'10px 0 10px 20px'}
        >
          Join Brief Now
        </Typography>
      </Link>
    </Box>
  );
};
