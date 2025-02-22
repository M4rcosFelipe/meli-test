import { Price } from "../Price";
import { AttributeDto } from "./AttributeDto";

export interface ProductResponseDto {
  item: Item;
}

export interface Item {
  id: string;
  title: string;
  price: Price;
  pictures: string[];
  condition: string;
  free_shipping: boolean;
  sold_quantity: number | null;
  installments: string;
  description: string;
  attributes: AttributeDto[];
  seller: string;
  category_path_from_root: string[];
}
