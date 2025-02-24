import { MeliCategoryResponse } from "../types/responses/MeliCategoryResponse";
import { MeliDescriptionResponse } from "../types/responses/MeliDescriptionResponse";
import { MeliProductResponse } from "../types/responses/MeliProductResponse";
import { MeliSearchResponse } from "../types/responses/MeliSearchResponse";
import { MeliSellerResponse } from "../types/responses/MeliSellerResponse";

export class MeliService {
  static async getProductByIdAsync(productId: string) {
    const response = await fetch(
      `${process.env.MELI_API_BASE_URL}/items/${productId}`
    );

    const result = (await response.json()) as MeliProductResponse;

    return result;
  }

  static async getProductDescriptionByProductIdAsync(productId: string) {
    const response = await fetch(
      `${process.env.MELI_API_BASE_URL}/items/${productId}/description`
    );

    const result = (await response.json()) as MeliDescriptionResponse;

    return result;
  }

  static async getSellerByIdAsync(sellerId: number) {
    const response = await fetch(
      `${process.env.MELI_API_BASE_URL}/sites/MLA/search?seller_id=${sellerId}`
    );

    const result = (await response.json()) as MeliSellerResponse;

    return result;
  }

  static async getCategoryByIdAsync(categoryId: string) {
    const response = await fetch(
      `${process.env.MELI_API_BASE_URL}/categories/${categoryId}`
    );

    const result = (await response.json()) as MeliCategoryResponse;

    return result;
  }

  static async searchAsync(query: string, offset: number) {
    const response = await fetch(
      `${process.env.MELI_API_BASE_URL}/sites/MLA/search?offset=${offset}&q=${query}`
    );

    const result = (await response.json()) as MeliSearchResponse;

    return result;
  }
}
