export interface CardProps {
  ref?: any;
  feed: any;
  setFeedSelected: React.Dispatch<React.SetStateAction<string>>;
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
