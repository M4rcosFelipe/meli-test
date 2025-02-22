import { ProductResponseDto } from "../types/dtos/ProductResponseDto";
import { MeliService } from "../services/MeliService";
import { mapProductResponseDto } from "../mapping/MapProductResponse";

export class ProductApplication {
  static async getProductByIdAsync(
    productId: string
  ): Promise<ProductResponseDto> {
    const product = await MeliService.getProductByIdAsync(productId);
    const description = await MeliService.getProductDescriptionByProductIdAsync(
      productId
    );
    const category = await MeliService.getCategoryByIdAsync(
      product.category_id
    );
    const seller = await MeliService.getSellerByIdAsync(product.seller_id);

    return mapProductResponseDto(product, description, category, seller);
  }
}
