interface Brand {
  name: string;
  logo: string;
}

export interface FeedItem {
  briefref: string;
  brand: Brand;
  name: string;
  banner_image: string;
  description: string;
  feed_title: string;
  banner_text: string;
  ad_1_image: string;
  ad_2_image: string;
  starts_on: string;
}
