export interface Photo {
  id:                       string;
  created_at:               Date;
  updated_at:               Date;
  promoted_at:              null;
  width:                    number;
  height:                   number;
  color:                    string;
  blur_hash:                string;
  description:              null;
  alt_description:          null;
  urls:                     Urls;
  links:                    PhotoLinks;
  categories:               any[];
  likes:                    number;
  liked_by_user:            boolean;
  current_user_collections: any[];
  sponsorship:              Sponsorship;
  topic_submissions:        TopicSubmissions;
  user:                     User;
}

interface PhotoLinks {
  self:              string;
  html:              string;
  download:          string;
  download_location: string;
}

interface Sponsorship {
  impression_urls: string[];
  tagline:         string;
  tagline_url:     string;
  sponsor:         User;
}

interface User {
  id:                 string;
  updated_at:         Date;
  username:           string;
  name:               string;
  first_name:         string;
  last_name:          null;
  twitter_username:   string;
  portfolio_url:      string;
  bio:                string;
  location:           null;
  links:              UserLinks;
  profile_image:      ProfileImage;
  instagram_username: string;
  total_collections:  number;
  total_likes:        number;
  total_photos:       number;
  accepted_tos:       boolean;
  for_hire:           boolean;
  social:             Social;
}

interface UserLinks {
  self:      string;
  html:      string;
  photos:    string;
  likes:     string;
  portfolio: string;
  following: string;
  followers: string;
}

interface ProfileImage {
  small:  string;
  medium: string;
  large:  string;
}

interface Social {
  instagram_username: string;
  portfolio_url:      string;
  twitter_username:   string;
  paypal_email:       null;
}

interface TopicSubmissions {
  "business-work": BusinessWork;
}

interface BusinessWork {
  status:      string;
  approved_on: Date;
}

interface Urls {
  raw:      string;
  full:     string;
  regular:  string;
  small:    string;
  thumb:    string;
  small_s3: string;
}
