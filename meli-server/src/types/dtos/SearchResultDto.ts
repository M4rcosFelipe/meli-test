import { Price } from "../Price";

export interface SearchResultDto {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  installments: string;
  sellerName: string;
}
