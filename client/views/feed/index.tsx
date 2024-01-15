import React, { useEffect, useRef, useState } from 'react';
import { Card } from '../../components/card';
import { getFeed } from '../../utils/services/getFeed';
import { useMediaQuery, Box } from '@mui/material';
import { CardSkeleton } from './utils/cardSkeleton';
import { FeedItem } from '../../utils/types/feedItem';

interface HomeProps {
  setFeedSelected: React.Dispatch<React.SetStateAction<FeedItem>>;
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

    setFeed([...Array.from(allFeed)]);

    setLoading(false);
  };

  useEffect(() => {
    setStart(0);
    loadFeed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      {feed.map((item: FeedItem, i: number) => {
        return i === feed.length - 1 && (start ?? 0) <= feed.length ? (
          <Box key={item.briefref}>
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
          </Box>
        ) : (
          <Card
            key={item.briefref}
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
