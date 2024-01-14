import React, { useEffect, useRef, useState } from 'react';
import { Card } from '../../components/card';
import { getFeed } from '../../utils/services/getFeed';
import { useMediaQuery, Box } from '@mui/material';
import { CardSkeleton } from './utils/cardSkeleton';

interface HomeProps {
  setFeedSelected: React.Dispatch<React.SetStateAction<string>>;
}

export const Feed: React.FC<HomeProps> = ({ setFeedSelected }) => {
  const [loading, setLoading] = useState(true);
  const [feed, setFeed] = useState<any[]>([]);
  const [start, setStart] = useState<undefined | number>();
  const [lastElement, setLastElement] = useState(null);
  const isMobile = useMediaQuery('(max-width:1079px)');

  const loadFeed = async () => {
    const response = await getFeed(start ?? 0);
    const allFeed = new Set([...feed, ...response.data]);

    console.log('allFeed ========>', allFeed);
    setFeed([...allFeed]);

    setLoading(false);
  };

  useEffect(() => {
    console.log('FIRST USEEFFECT ========>');
    setStart(0);
    loadFeed();
  }, []);

  const observer = useRef(
    new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        setStart((n) => (n ?? 0) + 5);
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
        return i === feed.length - 1 && (start ?? 0) <= feed.length ? (
          <>
            <Card
              ref={setLastElement}
              setFeedSelected={setFeedSelected}
              feed={item}
              briefRef={item.briefref}
              brandName={item.brand.name}
              brandLogo={item.brand.logo}
              bannerImage={item.banner_image}
              bannerText={item.banner_text}
            />
            <CardSkeleton />
          </>
        ) : (
          <Card
            setFeedSelected={setFeedSelected}
            feed={item}
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
