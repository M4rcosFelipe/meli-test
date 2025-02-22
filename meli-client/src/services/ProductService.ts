import { Product } from "@/types/product/ProductResponse";

export class ProductService {
  static async getProductPage(productId: string): Promise<Product> {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/items/${productId}`
    );

    const result = await response.json();

    return result;
  }
}
