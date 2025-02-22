export interface MeliSellerResponse {
  site_id: string;
  seller: Seller;
  country_default_time_zone: string;
  paging: Paging;
  results: Result[];
  sort: Sort;
  available_sorts: AvailableSort[];
  filters: any[];
  available_filters: AvailableFilter[];
  pdp_tracking: PdpTracking;
  user_context: any;
  ranking_introspection: RankingIntrospection;
}

export interface Seller {
  id: number;
  nickname: string;
}

export interface Paging {
  total: number;
  primary_results: number;
  offset: number;
  limit: number;
}

export interface Result {
  id: string;
  title: string;
  condition: string;
  thumbnail_id: string;
  catalog_product_id: string;
  listing_type_id: string;
  sanitized_title: string;
  permalink: string;
  buying_mode: string;
  site_id: string;
  category_id: string;
  domain_id: string;
  thumbnail: string;
  currency_id: string;
  order_backend: number;
  price: number;
  original_price: any;
  sale_price: SalePrice;
  available_quantity: number;
  official_store_id: any;
  use_thumbnail_id: boolean;
  accepts_mercadopago: boolean;
  shipping: Shipping;
  stop_time: string;
  seller: Seller2;
  address: Address;
  attributes: Attribute[];
  installments: Installments;
  winner_item_id: any;
  catalog_listing: boolean;
  discounts: any;
  promotion_decorations: any;
  promotions: any;
  inventory_id?: string;
  installments_motors: any;
}

export interface SalePrice {
  price_id: string;
  amount: number;
  conditions: Conditions;
  currency_id: string;
  exchange_rate: any;
  payment_method_prices: any[];
  payment_method_type: string;
  regular_amount: any;
  type: string;
  metadata: Metadata;
}

export interface Conditions {
  eligible: boolean;
  context_restrictions: string[];
  start_time: any;
  end_time: any;
}

export interface Metadata {}

export interface Shipping {
  store_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: string;
  mode: string;
  tags: string[];
  benefits: any;
  promise: any;
  shipping_score: number;
}

export interface Seller2 {
  id: number;
  nickname: string;
}

export interface Address {
  state_id: string;
  state_name: string;
  city_id?: string;
  city_name: string;
}

export interface Attribute {
  id: string;
  name: string;
  value_id?: string;
  value_name: string;
  attribute_group_id: string;
  attribute_group_name: string;
  value_struct?: ValueStruct;
  values: Value[];
  source: number;
  value_type: string;
}

export interface ValueStruct {
  number: number;
  unit: string;
}

export interface Value {
  id?: string;
  name: string;
  struct?: Struct;
  source: number;
}

export interface Struct {
  number: number;
  unit: string;
}

export interface Installments {
  quantity: number;
  amount: number;
  rate: number;
  currency_id: string;
  metadata: Metadata2;
}

export interface Metadata2 {
  meliplus_installments: boolean;
  additional_bank_interest: boolean;
}

export interface Sort {
  id: string;
  name: string;
}

export interface AvailableSort {
  id: string;
  name: string;
}

export interface AvailableFilter {
  id: string;
  name: string;
  type: string;
  values: Value2[];
}

export interface Value2 {
  id: string;
  name: string;
  results: number;
}

export interface PdpTracking {
  group: boolean;
  product_info: ProductInfo[];
}

export interface ProductInfo {
  id: string;
  score: number;
  status: string;
}

export interface RankingIntrospection {}
