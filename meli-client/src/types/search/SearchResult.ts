import { Price } from "../Price";

export interface SearchResult {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  installments: string;
  sellerName: string;
}
