import { Product } from "@/types/product/ProductResponse";

export class ProductService {
  static async getProductPage(productId: string): Promise<Product> {
    const response = await fetch(
      `http://localhost:3000/api/items/${productId}`
    );

    const result = await response.json();

    return result;
  }
}
