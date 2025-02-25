import { ProductResponseDto } from "../types/dtos/ProductResponseDto";
import { MeliService } from "../services/MeliService";
import { mapProductResponseDto } from "../mapping/MapProductResponse";

export class ProductApplication {
  static async getProductByIdAsync(
    productId: string
  ): Promise<ProductResponseDto> {
    const product = await MeliService.getProductByIdAsync(productId);

    const [description, category, seller] = await Promise.all([
      MeliService.getProductDescriptionByProductIdAsync(productId),
      MeliService.getCategoryByIdAsync(product.category_id),
      MeliService.getSellerByIdAsync(product.seller_id),
    ]);

    return mapProductResponseDto(product, description, category, seller);
  }
}
