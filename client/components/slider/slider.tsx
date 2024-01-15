import * as React from 'react';
import _ from 'lodash';
import Box from '@mui/material/Box';
import { MediaSlide } from '../../views/feedDetails/slides/mediaSlide';
import { FeedDetailsSlide } from '../../views/feedDetails/slides/feedDetailsSlide';
import { FeedItem } from '../../utils/types/feedItem';
import arrowIcon from '../../assets/switch-down.svg';
import { StyledBtnWrapper, StyledArrowBtn } from './styles';
import { useCallback } from 'react';

interface SimpleSlideProps {
  itemSelected: FeedItem;
}

export const Slider: React.FC<SimpleSlideProps> = ({ itemSelected }) => {
  const [active, setActive] = React.useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const mainElementRef = React.useRef<HTMLDivElement>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = useCallback(
    _.debounce((event: WheelEvent | TouchEvent) => {
      if (mainElementRef.current) {
        const rect = mainElementRef.current.getBoundingClientRect();
        const mainElementVisible =
          rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (mainElementVisible) {
          const delta = 'deltaY' in event ? (event as WheelEvent).deltaY : 0;
          const threshold = delta < 0 ? 50 : 0;

          setActive(Math.abs(delta) > threshold ? delta > 0 : active);
        }
      }
    }, 500),
    [setActive]
  );

  React.useEffect(() => {
    document.addEventListener('wheel', handleScroll);
    document.addEventListener('touchstart', handleScroll);
    document.addEventListener('touchmove', handleScroll);
    document.addEventListener('touchend', handleScroll);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(false); // Reset the active state when the main element is fully visible
        }
      },
      { threshold: 1 } // Adjust the threshold as needed
    );

    if (mainElementRef.current) {
      observer.observe(mainElementRef.current);
    }

    // Detach the event listeners and stop observing on unmount
    return () => {
      document.removeEventListener('wheel', handleScroll);
      document.removeEventListener('touchstart', handleScroll);
      document.removeEventListener('touchmove', handleScroll);
      document.removeEventListener('touchend', handleScroll);

      if (mainElementRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(mainElementRef.current);
      }
    };
  }, [handleScroll]);

  return (
    <Box
      width={'calc(100% - 500px)'}
      position={'relative'}
      ref={mainElementRef}
    >
      <Box position={'absolute'} top={'50%'} right={0} zIndex={2}>
        <StyledBtnWrapper active={active}>
          <StyledArrowBtn
            src={arrowIcon}
            alt='arrowUp'
            onClick={() => active && setActive((prev) => !prev)}
            active={active}
          />
          <StyledArrowBtn
            src={arrowIcon}
            alt='arrowUp'
            onClick={() => !active && setActive((prev) => !prev)}
            active={!active}
          />
        </StyledBtnWrapper>
      </Box>
      <MediaSlide itemSelected={itemSelected} active={!active} />
      <FeedDetailsSlide itemSelected={itemSelected} active={active} />
    </Box>
  );
};
