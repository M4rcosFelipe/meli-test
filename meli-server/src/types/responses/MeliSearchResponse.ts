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
  "55627871608"?: N55627871608;
  "55627871612"?: N55627871612;
  "185660386177"?: N185660386177;
  "66199198783"?: N66199198783;
  "66199198798"?: N66199198798;
  "181170280507"?: N181170280507;
  "179513436418"?: N179513436418;
  "177056529771"?: N177056529771;
  "177056529769"?: N177056529769;
}

export interface N55627871608 {
  thumbnail: string;
  ratio: string;
  name: string;
  pictures_qty: number;
  price: number;
  inventory_id: string;
  user_product_id: string;
  attributes: Attribute2[];
  attribute_combinations: AttributeCombination[];
}

export interface Attribute2 {
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

export interface N55627871612 {
  thumbnail: string;
  ratio: string;
  name: string;
  pictures_qty: number;
  price: number;
  inventory_id: string;
  user_product_id: string;
  attributes: Attribute3[];
  attribute_combinations: AttributeCombination2[];
}

export interface Attribute3 {
  id: string;
  name: string;
  value_name: string;
  value_type: string;
}

export interface AttributeCombination2 {
  id: string;
  name: string;
  value_id: any;
  value_name: string;
  value_struct: any;
  values: any;
}

export interface N185660386177 {
  thumbnail: string;
  ratio: string;
  name: string;
  pictures_qty: number;
  price: number;
  inventory_id: string;
  user_product_id: string;
  attributes: Attribute4[];
  attribute_combinations: AttributeCombination3[];
}

export interface Attribute4 {
  id: string;
  name: string;
  value_name: string;
  value_type: any;
}

export interface AttributeCombination3 {
  id: string;
  name: string;
  value_id: any;
  value_name: string;
  value_struct: any;
  values: any;
}

export interface N66199198783 {
  thumbnail: string;
  ratio: string;
  name: string;
  pictures_qty: number;
  price: number;
  inventory_id: string;
  user_product_id: string;
  attributes: Attribute5[];
  attribute_combinations: AttributeCombination4[];
}

export interface Attribute5 {
  id: string;
  name: string;
  value_name: string;
  value_type: string;
}

export interface AttributeCombination4 {
  id: string;
  name: string;
  value_id: any;
  value_name: string;
  value_struct: any;
  values: any;
}

export interface N66199198798 {
  thumbnail: string;
  ratio: string;
  name: string;
  pictures_qty: number;
  price: number;
  inventory_id: string;
  user_product_id: string;
  attributes: Attribute6[];
  attribute_combinations: AttributeCombination5[];
}

export interface Attribute6 {
  id: string;
  name: string;
  value_name: string;
  value_type: string;
}

export interface AttributeCombination5 {
  id: string;
  name: string;
  value_id: any;
  value_name: string;
  value_struct: any;
  values: any;
}

export interface N181170280507 {
  thumbnail: string;
  ratio: string;
  name: string;
  pictures_qty: number;
  price: number;
  inventory_id: string;
  user_product_id: string;
  attributes: Attribute7[];
  attribute_combinations: AttributeCombination6[];
}

export interface Attribute7 {
  id: string;
  name: string;
  value_name: string;
  value_type: string;
}

export interface AttributeCombination6 {
  id: string;
  name: string;
  value_id: any;
  value_name: string;
  value_struct: any;
  values: any;
}

export interface N179513436418 {
  thumbnail: string;
  ratio: string;
  name: string;
  pictures_qty: number;
  price: number;
  inventory_id: string;
  user_product_id: string;
  attributes: Attribute8[];
  attribute_combinations: AttributeCombination7[];
}

export interface Attribute8 {
  id: string;
  name: string;
  value_name: string;
  value_type: string;
}

export interface AttributeCombination7 {
  id: string;
  name: string;
  value_id: any;
  value_name: string;
  value_struct: any;
  values: any;
}

export interface N177056529771 {
  thumbnail: string;
  ratio: string;
  name: string;
  pictures_qty: number;
  price: number;
  inventory_id: string;
  user_product_id: string;
  attributes: Attribute9[];
  attribute_combinations: AttributeCombination8[];
}

export interface Attribute9 {
  id: string;
  name: string;
  value_name: string;
  value_type: any;
}

export interface AttributeCombination8 {
  id: string;
  name: string;
  value_id: any;
  value_name: string;
  value_struct: any;
  values: any;
}

export interface N177056529769 {
  thumbnail: string;
  ratio: string;
  name: string;
  pictures_qty: number;
  price: number;
  inventory_id: string;
  user_product_id: string;
  attributes: Attribute10[];
  attribute_combinations: AttributeCombination9[];
}

export interface Attribute10 {
  id: string;
  name: string;
  value_name: string;
  value_type: any;
}

export interface AttributeCombination9 {
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
  values: Value2[];
}

export interface Value2 {
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
  values: Value3[];
}

export interface Value3 {
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
