export interface MeliProductResponse {
  id: string;
  site_id: string;
  title: string;
  seller_id: number;
  category_id: string;
  official_store_id: number;
  price: number;
  base_price: number;
  sold_quantity?: number;
  original_price: number;
  currency_id: string;
  initial_quantity: number;
  sale_terms: SaleTerm[];
  buying_mode: string;
  listing_type_id: string;
  condition: string;
  permalink: string;
  thumbnail_id: string;
  thumbnail: string;
  pictures: Picture[];
  video_id: any;
  descriptions: any[];
  accepts_mercadopago: boolean;
  non_mercado_pago_payment_methods: any[];
  shipping: Shipping;
  international_delivery_mode: string;
  seller_address: SellerAddress;
  seller_contact: any;
  location: Location;
  coverage_areas: any[];
  attributes: Attribute[];
  listing_source: string;
  variations: any[];
  status: string;
  sub_status: any[];
  tags: string[];
  warranty: string;
  catalog_product_id: string;
  domain_id: string;
  parent_item_id: any;
  deal_ids: any[];
  automatic_relist: boolean;
  date_created: string;
  last_updated: string;
  health: any;
  catalog_listing: boolean;
}

export interface SaleTerm {
  id: string;
  name: string;
  value_id?: string;
  value_name: string;
  value_struct?: ValueStruct;
  values: Value[];
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
}

export interface Struct {
  number: number;
  unit: string;
}

export interface Picture {
  id: string;
  url: string;
  secure_url: string;
  size: string;
  max_size: string;
  quality: string;
}

export interface Shipping {
  mode: string;
  methods: any[];
  tags: string[];
  dimensions: any;
  local_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: string;
  store_pick_up: boolean;
}

export interface SellerAddress {
  city: City;
  state: State;
  country: Country;
  search_location: SearchLocation;
  id: number;
}

export interface City {
  name: string;
}

export interface State {
  id: string;
  name: string;
}

export interface Country {
  id: string;
  name: string;
}

export interface SearchLocation {
  neighborhood: Neighborhood;
  city: SearchLocationCity;
  state: SearchLocationState;
}

export interface Neighborhood {
  id: string;
  name: string;
}

export interface SearchLocationCity {
  id: string;
  name: string;
}

export interface SearchLocationState {
  id: string;
  name: string;
}

export interface Location {}

export interface Attribute {
  id: string;
  name: string;
  value_id?: string;
  value_name: string;
  values: AttributeValue[];
  value_type: string;
}

export interface AttributeValue {
  id?: string;
  name: string;
  struct?: AttributeStruct;
}

export interface AttributeStruct {
  number: number;
  unit: string;
}
