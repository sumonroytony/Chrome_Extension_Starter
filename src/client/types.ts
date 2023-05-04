export interface QueryOptions {
  page?: number;
  limit?: number;
  language?: string;
  maker?: string;
}

export interface GetParams {
  slug: string;
  language?: string;
}

export interface SearchParamOptions {
  rating: string;
  question: string;

  [key: string]: unknown;
}

export interface PutOnSale {
  key: string;
  collectionId: string;
  maker: string;
  chainId: number;
  tokenId: string;
  amount: number;
  royaltyFee: number;
  admin: string;
  price: string;
  endPrice: string;
  isFNFT: boolean;
  _type: string;
  saleMode: number;
  category: string;
  isAlive: boolean;
  coinType: string;
  expDate: Number;
}

export interface Item {
  collectionId: string;
  chainId: number;
  category: string;
  metadata: string;
  likes: [];
  tokenId: string;
  mode: number;
  isImported: boolean;
  price: number;
}

export interface AuctionList {
  key: string;
  chainId: number;
  taker: string;
  price: string;
  amount: string;
  createdAt: string;
  updatedAt: string;
}

export interface ItemDetailInfo {
  list: PutOnSale;
  itemInfo: Item;
  auction: {
    name: string;
    taker: string;
    price: string;
    amount: string;
    avatar: any;
    auctionTime: string;
    message: string;
  }[];
  maker: {
    name: string;
    avatar: any;
    socials: any;
    address: string;
  };
}
export interface MessageInfo {
  product_id: string;
  from: string;
  to: string;
  comment: string;
}

export interface ProductQueryOptions extends QueryOptions {
  mode: number;
  category: string;
  tag: string;
  // shop_id: string;
  // name: string;
  price: string | string[];
  // categories: string | string[];
  // tags: string | string[];
  // language?: string;
}

export interface PutonlistAndAuctionlistQuery {
  collectionId: string;
  tokenId: string;
  maker: string;
  key: string;
  chainId: number;
}

export interface PopularProductsQueryOptions {
  limit: number;
  shop_id: string;
  type_slug: string;
  range: number;
}

export interface FollowShopPopularProductsQueryOption {
  limit: number;
}

export interface TopShopQueryOptions {
  limit: number;
  name: string;
  range: number;
}

export interface CategoryQueryOptions extends QueryOptions {}

export interface TypeQueryOptions extends QueryOptions {}

export interface WishlistQueryOptions extends QueryOptions {}

export interface MyReportsQueryOptions extends QueryOptions {}

export interface DisputesQueryOptions extends QueryOptions {}

export interface MyQuestionQueryOptions extends QueryOptions {}

export interface ShopQueryOptions extends QueryOptions {
  is_active?: number;
}

export interface FollowedShopsQueryOptions extends QueryOptions {}

export interface OrderQueryOptions extends QueryOptions {
  orderBy: string;
  sortedBy: string;
}

export interface WishlistQueryOption extends QueryOptions {}

export interface ReviewQueryOptions extends QueryOptions {
  product_id: string;
  rating?: string;
}
export interface MessageQueryOptions extends QueryOptions {
  product_id?: string;
  to?: string;
}

export interface QuestionQueryOptions extends QueryOptions {
  product_id: string;
  question?: string;
}

interface PaginatorInfo<T> {
  current_page: number;
  data: T[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: any[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export interface SEO {
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: Attachment;
  twitterHandle: string;
  twitterCardType: string;
  metaTags: string;
  canonicalUrl: string;
}

export interface Settings {
  id: string;
  options: {
    siteTitle: string;
    siteSubtitle: string;
    currency: string;
    logo: Attachment;
    seo: SEO;
    contactDetails: ContactDetails;
  };
}

export interface ContactDetails {
  socials: [ShopSocials];
  contact: string;
  location: Location;
  website: string;
}

export interface ShopSocials {
  icon: string;
  url: string;
}

export interface Location {
  lat: number;
  lng: number;
  city: string;
  state: string;
  country: string;
  zip: string;
  formattedAddress: string;
}

export interface Attachment {
  id: string;
  original: string;
  thumbnail: string;
  __typename?: string;
}

export interface Shop {
  id: string;
  name: string;
  slug: string;
  description: string;
  orders_count: number;
  products_count: number;
  logo: Attachment;
  cover_image: Attachment;
  settings: {
    socials: {
      icon: string;
      url: string;
    }[];
  };
  address: {
    street_address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  owner: {
    id: string;
    name: string;
    email: string;
  };
}

const socials: { [key: string]: any } = {
  email: '',
  twitter: '',
  facebook: '',
  linkedin: '',
  reddit: '',
  phoneNumber: '',
};

export interface User {
  address: string;
  name: string;
  bio: string;
  avatar: any[];
  socials: any;
  followers: [];
  accessLevel: number;
}

export interface UpdateProfileInput {
  // address: string;
  name?: string;
  bio?: string;
  avatar?: string;
  socials?: {
    email?: string;
    twitter?: string;
    facebook?: string;
    linkedin?: string;
    reddit?: string;
    phoneNumber?: string;
  };
}

export interface ChangePasswordInput {
  oldPassword: string;
  newPassword: string;
}

export interface ContactInput {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
}

// export interface LoginUserInput {
//   address: string;
// }

// export interface RegisterUserInput {
//   // name: string;
//   // email: string;
//   // password: string;
//   address: string;
// }

// export interface ForgetPasswordInput {
//   email: string;
// }

// export interface ResetPasswordInput {
//   token: string;
//   email: string;
//   password: string;
// }

// export interface VerifyForgetPasswordTokenInput {
//   token: string;
//   email: string;
// }

// export interface PasswordChangeResponse {
//   success: boolean;
//   message: string;
// }

// export interface AuthResponse {
//   token: string;
//   permissions: string[];
// }

export interface CreateContactUsInput {
  name: string;
  email: string;
  subject: string;
  description: string;
}

export interface CreateAbuseReportInput {
  model_id: string;
  model_type: string;
  message: string;
}

export interface CreateFeedbackInput {
  model_id: string;
  model_type: string;
  positive?: boolean;
  negative?: boolean;
}

export interface CreateQuestionInput {
  question: string;
  product_id: string;
  shop_id: string;
}

export interface CreateReviewInput {
  product_id: string;
  user_id: string;
  shop_id: string;
  order_id: string;
  comment?: string;
  rating: number;
  photos?: Attachment[];
}

export interface CreateMessageInput {
  product_id: string;
  from: string;
  to?: string;
  comment: string;
}
export interface CreateDisputeInput {
  product_id: string;
  trad_id: string;
  reason?: string;
  moderator: string;
  description: string;
  escrow_id: string;
  resolution: string;
}
export interface UpdateDisputeInput extends CreateDisputeInput {
  id: string;
}
export interface UpdateMilestoneInput {
  id: string;
  status: string;
  payment: string;
  isClaim: boolean;
}

export interface UpdateReviewInput extends CreateReviewInput {
  id: string;
}

export interface ReviewResponse {
  product_id: string;
}
export interface MessageResponse {
  product_id: string;
}
export interface DisputeResponse {
  id: string;
}
export interface MilestoneResponse {
  id: string;
}

interface ConnectProductOrderPivot {
  product_id: string | number;
  order_quantity: number;
  unit_price: number;
  subtotal: number;
}

export interface CreateOrderInput {
  amount: number;
  total: number;
  paid_total: number;
  customer_contact: string;
  products: ConnectProductOrderPivot[];
  status: string;
  sales_tax: number;
  billing_address: any;
  payment_gateway: string;
  token?: string;
  use_wallet_points: boolean;
}

export interface CheckoutVerificationInput {
  amount: number;
  products: ConnectProductOrderPivot[];
}

export interface VerifiedCheckoutResponse {
  total_tax: number;
  shipping_charge: number;
  unavailable_products: string[];
  wallet_currency: number;
  wallet_amount: number;
}

export interface RatingCount {
  rating: number;
  total: number;
}

export interface Product {
  // id: string;
  // name: string;
  // slug: string;
  // description: string;
  // price: number;
  // sale_price: number;
  // orders_count: number;
  // total_downloads: number;
  // image: Attachment;
  // gallery: Attachment[];
  // shop: Shop;
  // created_at: string;
  // updated_at: string;
  // preview_url: string;
  // my_review: Review[];
  // shop_id: number;
  // rating_count: RatingCount[];
  // total_reviews: number;
  // ratings: number;
  // tags: Tag[];
  // type: {
  //   id: string;
  //   name: string;
  // };
  username: string;
  avatar: string;
  address: string;
  collectionLikes: [];
  metadata: string;
  mode: number;
  key: string;
  maker: string;
  chainId: number;
  tokenId: string;
  amount: number;
  royaltyFee: number;
  admin: string;
  coinType: string;
  expDate: string;
  price: string;
  endPrice: string;
  isFNFT: boolean;
  _type: string;
  saleMode: number;
  category: string;
  isAlive: boolean;
  collectionId: string;
}

export interface ProductPaginator extends PaginatorInfo<Product> {}

export interface ReportsPaginator extends PaginatorInfo<Question> {}

export interface DisputesPaginator extends PaginatorInfo<Question> {}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Type {
  id: string;
  name: string;
  icon: string;
  slug: string;
  promotional_sliders?: Attachment;
  created_at: string;
  updated_at: string;
  translated_languages: string[];
}

export interface CategoryPaginator extends PaginatorInfo<Category> {}

export interface TypePaginator extends PaginatorInfo<Type> {}

export interface ShopPaginator extends PaginatorInfo<Shop> {}

export interface Order {
  id: string;
  tracking_number: string;
  total: number;
  status: string;
  products: Product[];
  created_at: string;
  updated_at: string;
}

export interface DigitalFile {
  id: string;
  fileable: Product;
}

export interface OrderedFile {
  key?: string;
  collectionId: string;
  tokenId: string;
  isPutonSale: boolean;
  _type: string;
  amount: string;
  mode: number;
  metadata: string;
  title: string;
  description: string;
  img: string;
  category: string;
  product_id: string;
  my_review: any;
  maker: string;
  log_id: string;
  createdAt: string;
  isClaim: boolean;
  escrowID: string;
  dispute_status: string;
  isDispute: boolean;
  milestone: any;
  index: number;
}

export interface OrderedFNFT {
  key?: string;
  product_id: string;
  collectionId: string;
  tokenId: string;
  Total: string;
  current: string;
  price: string;
  bookingFee: string;
  bookingDuration: number;
  bookingState: boolean;
  procDay: number;
  metadata: string;
  title: string;
  description: string;
  img: string;
  coinType: string;
  my_review: any;
  maker: string;
  taker: string;
  isCancel: boolean;
  isClaim: boolean;
}

export interface Feedback {
  id: string;
  user_id: string;
  model_type: string;
  model_id: string;
  positive: boolean;
  negative: boolean;
  created_at: string;
  updated_at: string;
}

export interface Question {
  _id: string;
  answer: string;
  my_feedback: Feedback;
  negative_feedbacks_count: number;
  positive_feedbacks_count: number;
  product: Product;
  question: string;
  created_at: string;
  updated_at: string;
  createdAt: string;
  message: string;
  item: any;
}

export interface Review {
  _id: string;
  name: string;
  rating: number;
  comment: string;
  photos: Attachment[];
  user: User;
  product: Product;
  shop: Shop;
  feedbacks: Feedback[];
  positive_feedbacks_count: number;
  negative_feedbacks_count: number;
  my_feedback: Feedback;
  order_id?: string;
  created_at: string;
  updated_at: string;
  product_id: string;
}

export interface Wishlist {
  id: string;
  product: Product;
  product_id: string;
  user: User[];
  user_id: string;
}

export interface TagPaginator extends PaginatorInfo<Tag> {}

export interface OrderPaginator extends PaginatorInfo<Order> {}

export interface OrderedFilePaginator extends PaginatorInfo<OrderedFile> {}

export interface OrderedFNFTPaginator extends PaginatorInfo<OrderedFNFT> {}

export interface ReviewPaginator extends PaginatorInfo<Review> {}

export interface WishlistPaginator extends PaginatorInfo<Wishlist> {}

export interface QuestionPaginator extends PaginatorInfo<Question> {}

export interface SettingsQueryOptions extends QueryOptions {
  language?: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export interface Property {
  key: string;
  value: string;
}
export interface Milestone {
  description: string;
  phases: string;
}

export interface Address {
  city: string;
  country: string;
  state: string;
  street_address: string;
  zip: string;
}

export interface Feedback {
  id: string;
  user_id: string;
  model_type: string;
  model_id: string;
  positive: boolean;
  negative: boolean;
  created_at: string;
  updated_at: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  photos: Attachment[];
  user: User;
  product: Product;
  shop: Shop;
  feedbacks: Feedback[];
  positive_feedbacks_count: number;
  negative_feedbacks_count: number;
  my_feedback: Feedback;
  created_at: string;
  updated_at: string;
}

export interface CreateReviewInput {
  product_id: string;
  shop_id: string;
  comment?: string;
  rating: number;
  photos?: Attachment[];
}

export interface CreateAbuseReportInput {
  model_id: string;
  message: string;
}

export interface Question {
  id: string;
  answer: string;
  my_feedback: Feedback;
  negative_feedbacks_count: number;
  positive_feedbacks_count: number;
  question: string;
  created_at: string;
  updated_at: string;
}

export interface CreateQuestionInput {
  question: string;
  product_id: string;
  shop_id: string;
  maker: string;
}

export interface SampleImage {
  result: [
    {
      id: string;
      type: [string];
      cid: string;
      url: string;
      created_at: string;
      updated_at: string;
    }
  ];
  total: number;
}

export interface GetSampleImage {
  type: string;
  page: number;
  limit: number;
}

export interface SetSampleImage {
  type: string;
  cid: string;
}
