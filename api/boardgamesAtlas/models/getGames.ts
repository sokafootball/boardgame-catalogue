export interface GameParams {
  gameData: GameDataParams;
  clientId: string;
}

export interface GameDataParams {
  limit?: number;
  skip?: number;
  ids?: string[];
  list_id?: string;
  kickstarter?: boolean;
  random?: boolean;
  name?: string;
  exact?: boolean;
  fuzzy_match?: boolean;
  designer?: string;
  publisher?: string;
  artist?: string;
  mechanics?: string;
  categories?: string;
  order_by?: string;
  ascending?: boolean;
  min_players?: number;
  max_players?: number;
  min_playtime?: number;
  max_playtime?: number;
  min_age?: number;
  year_published?: number;
  gt_min_players?: number;
  gt_max_players?: number;
  gt_min_playtime?: number;
  gt_max_playtime?: number;
  gt_min_age?: number;
  gt_year_published?: number;
  gt_price?: number;
  gt_msrp?: number;
  gt_discount?: number;
  gt_reddit_count?: number;
  gt_reddit_week_count?: number;
  gt_reddit_day_count?: number;
  lt_min_players?: number;
  lt_max_players?: number;
  lt_min_playtime?: number;
  lt_max_playtime?: number;
  lt_min_age?: number;
  lt_year_published?: number;
  lt_price?: number;
  lt_msrp?: number;
  lt_discount?: number;
  lt_reddit_count?: number;
  lt_reddit_week_count?: number;
  lt_reddit_day_count?: number;
  fields?: string;
}
export interface GameModel {
  games: Game[];
  count: number;
}

export interface Game {
  year: number;
  id: string;
  handle: string;
  url: string;
  bga_edit_url: string;
  template_url: string;
  name: string;
  price: string;
  price_ca: string;
  price_uk: string;
  price_au: string;
  msrp: number;
  msrps: Msrp[];
  discount: string;
  year_published: number;
  min_players: number;
  max_players: number;
  player_counts: number[];
  min_playtime: number;
  max_playtime: number;
  min_age: number;
  description: string;
  commentary: string;
  faq: string;
  thumb_url: string;
  image_url: string;
  matches_specs: any;
  specs: any[];
  mechanics: Mechanic[];
  categories: Category[];
  publishers: Publisher[];
  designers: Designer[];
  primary_publisher: PrimaryPublisher;
  primary_designer: PrimaryDesigner;
  developers: any[];
  related_to: any[];
  related_as: any[];
  artists: string[];
  names: any[];
  rules_url: string;
  amazon_rank: number;
  cs_rating: number;
  official_url: any;
  sell_sheet_url: any;
  store_images_url: any;
  comment_count: number;
  num_user_ratings: number;
  average_user_rating: number;
  weight_amount: number;
  weight_units: string;
  size_height: number;
  size_depth: number;
  size_units: string;
  historical_low_prices: HistoricalLowPrice[];
  active: boolean;
  num_user_complexity_votes: number;
  average_learning_complexity: number;
  average_strategy_complexity: number;
  visits: number;
  lists: number;
  mentions: number;
  links: number;
  plays: number;
  rank: number;
  type: string;
  sku: string;
  upc: string;
  isbn: string;
  video_links: any[];
  availability_status: string;
  num_distributors: number;
  trending_rank: number;
  listing_clicks: number;
  is_historical_low: boolean;
  skus: string[];
  sku_objects: SkuObject[];
  edit_url: string;
  players: string;
  playtime: string;
  msrp_text: string;
  price_text: string;
  tags: string[];
  images: Images3;
  description_preview: string;
}

export interface Msrp {
  country: string;
  price: number;
}

export interface Mechanic {
  id: string;
  url: string;
}

export interface Category {
  id: string;
  url: string;
}

export interface Publisher {
  id: string;
  num_games: any;
  score: number;
  game: Game2;
  url: string;
  images: Images;
}

export interface Game2 {}

export interface Images {
  thumb: any;
  small: any;
  medium: any;
  large: any;
  original: any;
}

export interface Designer {
  id: string;
  num_games: any;
  score: number;
  game: Game3;
  url: string;
  images: Images2;
}

export interface Game3 {}

export interface Images2 {
  thumb: any;
  small: any;
  medium: any;
  large: any;
  original: any;
}

export interface PrimaryPublisher {
  id: string;
  name: string;
  url: string;
}

export interface PrimaryDesigner {
  id: string;
  name: string;
  url: string;
}

export interface HistoricalLowPrice {
  country: string;
  date: string;
  price: number;
  isLow: boolean;
}

export interface SkuObject {
  name: string;
  sku: string;
}

export interface Images3 {
  thumb: string;
  small: string;
  medium: string;
  large: string;
  original: string;
}
