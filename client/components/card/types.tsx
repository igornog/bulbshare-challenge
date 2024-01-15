import { FeedItem } from '../../utils/types/feedItem';

export interface CardProps {
  ref?: any;
  feed: FeedItem;
  setFeedSelected: React.Dispatch<React.SetStateAction<FeedItem>>;
  isLoading?: boolean;
  briefRef: string;
  brandName: string;
  brandLogo: string;
  bannerImage: string;
  bannerText: string;
}

export interface CardHeaderProps {
  briefRef: string;
  brandName: string;
  brandLogo: string;
}
