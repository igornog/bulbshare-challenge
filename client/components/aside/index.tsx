import React, { useEffect } from 'react';
import { Avatar, Box, Typography, useMediaQuery } from '@mui/material';
import { CommentsListProps } from './types';
import { getComments } from '../../utils/services/getComments';
import { Comment } from '../../utils/types/comment';
import { formatDate } from '../../utils/helpers/formatDate';

export const CommentsList: React.FC<CommentsListProps> = ({ itemSelected }) => {
  const isMobile = useMediaQuery('(max-width:1079px)');
  const [comments, setComments] = React.useState<Comment[]>([]);

  const loadComments = async () => {
    const data = await getComments(itemSelected.briefref);
    setComments(data);
  };

  useEffect(() => {
    loadComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box padding={'0 20px'}>
      <Box
        display={'flex'}
        alignItems={'center'}
        gap={'10px'}
        justifyContent={'flex-start'}
        padding={'0 0 60px'}
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
        <Typography variant='body1' fontSize={'18px'} fontWeight={900}>
          {itemSelected.brand.name}
        </Typography>
      </Box>

      <Box display={'flex'} flexDirection={'column'} gap={'30px'}>
        {comments.map((comment: Comment) => {
          return (
            <Box
              key={comment.bcommentref}
              display={'flex'}
              alignItems={'flex-start'}
              gap={'10px'}
              border={'.5px solid lightgray'}
              borderRadius={'10px'}
              padding={'10px'}
            >
              <Box height={'100%'}>
                <Avatar
                  src={comment.user.avatar}
                  alt={comment.user.name}
                  sx={{
                    width: isMobile ? '20px' : '40px',
                    alignSelf: 'center',
                    img: {
                      objectFit: 'contain',
                    },
                  }}
                />
              </Box>
              <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                <Typography
                  variant='body1'
                  fontSize={'18px'}
                  fontWeight={'bold'}
                  lineHeight={'1'}
                >
                  {comment.user.name}
                </Typography>
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  gap={'5px'}
                  position={'relative'}
                  textAlign={'left'}
                >
                  <Typography
                    variant='body2'
                    fontSize={'16px'}
                    fontWeight={300}
                    lineHeight={'1'}
                  >
                    {comment.comment}
                  </Typography>
                  <Typography
                    variant='body2'
                    color={'gray'}
                    fontSize={'10px'}
                    fontWeight={300}
                    sx={{
                      position: 'absolute',
                      bottom: '-15px',
                      right: '0',
                    }}
                  >
                    {formatDate(comment.submitted_on)}
                  </Typography>
                </Box>
              </Box>
            </Box>
          );
        })}

        {comments.length === 0 && (
          <Typography
            variant='subtitle1'
            fontSize={'18px'}
            fontWeight={900}
            color={'gray'}
          >
            No comments yet
          </Typography>
        )}
      </Box>
    </Box>
  );
};
