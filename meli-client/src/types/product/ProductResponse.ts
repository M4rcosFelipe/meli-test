import { Price } from "../Price";
import { Attribute } from "./Attribute";

export interface Product {
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
  attributes: Attribute[];
  seller: string;
  category_path_from_root: string[];
}
