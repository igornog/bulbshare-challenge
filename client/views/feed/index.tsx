import React, { useEffect, useRef, useState } from 'react';
import { Card } from '../../components/card';
import { getFeed } from '../../utils/services/getFeed';
import { useMediaQuery, Box } from '@mui/material';
import { CardSkeleton } from './utils/cardSkeleton';

interface HomeProps {
  children?: React.ReactNode;
}

export const Feed: React.FC<HomeProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [feed, setFeed] = useState<any[]>([]);
  const [start, setStart] = useState(0);
  const [lastElement, setLastElement] = useState(null);
  const isMobile = useMediaQuery('(max-width:1079px)');

  const loadFeed = async () => {
    const response = await getFeed(start);
    const allFeed = new Set([...feed, ...response.data]);
    setFeed([...allFeed]);

    setLoading(false);
  };

  useEffect(() => {
    loadFeed();
  }, []);

  const observer = useRef(
    new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        setStart((n) => n + 5);
      }
    })
  );

  useEffect(() => {
    const currentElement = lastElement;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [lastElement]);

  useEffect(() => {
    if (start === feed.length) {
      loadFeed();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start]);

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      gap={'50px'}
      padding={isMobile ? '50px 10vw' : '50px 20vw'}
      margin={'0 0 10vh'}
    >
      {feed.map((item: any, i: number) => {
        return i === feed.length - 1 && start <= feed.length ? (
          <>
            <Card
              briefRef={item.briefref}
              brandName={item.brand.name}
              brandLogo={item.brand.logo}
              bannerImage={item.banner_image}
              bannerText={item.banner_text}
              ref={setLastElement}
            />
            <CardSkeleton />
          </>
        ) : (
          <Card
            briefRef={item.briefref}
            brandName={item.brand.name}
            brandLogo={item.brand.logo}
            bannerImage={item.banner_image}
            bannerText={item.banner_text}
          />
        );
      })}

      {loading && <CardSkeleton />}
    </Box>
  );
};
