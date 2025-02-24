export interface MeliSearchResponse {
  site_id: string;
  country_default_time_zone: string;
  query: string;
  paging: Paging;
  results: MeliSearchResult[];
  sort: Sort;
  available_sorts: AvailableSort[];
  filters: Filter[];
  available_filters: AvailableFilter[];
  pdp_tracking: PdpTracking;
  user_context: any;
  ranking_introspection: RankingIntrospection;
}

export interface Paging {
  total: number;
  primary_results: number;
  offset: number;
  limit: number;
}

export interface MeliSearchResult {
  id: string;
  title: string;
  condition: string;
  thumbnail_id: string;
  catalog_product_id?: string;
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
  original_price?: number;
  sale_price: SalePrice;
  available_quantity: number;
  official_store_id?: number;
  use_thumbnail_id: boolean;
  accepts_mercadopago: boolean;
  shipping: Shipping;
  stop_time: string;
  seller?: Seller;
  address: Address;
  attributes: Attribute[];
  installments: Installments | null;
  winner_item_id: any;
  catalog_listing: boolean;
  discounts: any;
  promotion_decorations: any;
  promotions: any;
  inventory_id?: string;
  installments_motors: any;
  variation_id?: string;
  variation_filters?: string[];
  variations_data?: VariationsData;
  official_store_name?: string;
}

export interface SalePrice {
  price_id: string;
  amount: number;
  conditions: Conditions;
  currency_id: string;
  exchange_rate: any;
  payment_method_prices: any[];
  payment_method_type: string;
  regular_amount: number | null;
  type: string;
  metadata: Metadata;
}

export interface Conditions {
  eligible: boolean;
  context_restrictions: string[];
  start_time?: string;
  end_time?: string;
}

export interface Metadata {
  promotion_id?: string;
  promotion_type?: string;
  campaign_end_date?: string;
  variation?: string;
  campaign_discount_percentage?: number;
  campaign_id?: string;
  experiment_id?: string;
  funding_mode?: string;
  discount_meli_amount?: number;
  order_item_price?: number;
}

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

export interface Seller {
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
  value_name?: string;
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
  name?: string;
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

export interface VariationsData {
  [string: string]: {
    thumbnail: string;
    ratio: string;
    name: string;
    pictures_qty: number;
    price: number;
    inventory_id: string;
    user_product_id: string;
    attributes: VariationsDataAttribute[];
    attribute_combinations: AttributeCombination[];
  };
}

export interface VariationsDataAttribute {
  id: string;
  name: string;
  value_name: string;
  value_type: string;
}

export interface AttributeCombination {
  id: string;
  name: string;
  value_id: any;
  value_name: string;
  value_struct: any;
  values: any;
}

export interface Sort {
  id: string;
  name: string;
}

export interface AvailableSort {
  id: string;
  name: string;
}

export interface Filter {
  id: string;
  name: string;
  type: string;
  values: FilterValue[];
}

export interface FilterValue {
  id: string;
  name: string;
  path_from_root: PathFromRoot[];
}

export interface PathFromRoot {
  id: string;
  name: string;
}

export interface AvailableFilter {
  id: string;
  name: string;
  type: string;
  values: AvailableFilterValue[];
}

export interface AvailableFilterValue {
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
