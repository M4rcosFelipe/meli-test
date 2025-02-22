import { AttributeDto } from "../types/dtos/AttributeDto";
import { ProductResponseDto } from "../types/dtos/ProductResponseDto";
import { Price } from "../types/Price";
import { MeliCategoryResponse } from "../types/responses/MeliCategoryResponse";
import { MeliDescriptionResponse } from "../types/responses/MeliDescriptionResponse";
import { MeliProductResponse } from "../types/responses/MeliProductResponse";
import { MeliSellerResponse } from "../types/responses/MeliSellerResponse";

export function mapProductResponseDto(
  meliProductResponse: MeliProductResponse,
  meliDescription: MeliDescriptionResponse,
  meliCategoryResponse: MeliCategoryResponse,
  meliSellerResponse: MeliSellerResponse
): ProductResponseDto {
  const product: ProductResponseDto = {
    item: {
      id: meliProductResponse.id,
      title: meliProductResponse.title,
      price: mapPrice(meliProductResponse),
      pictures: mapPictures(meliProductResponse),
      condition:
        getAttributeValueById(
          "ITEM_CONDITION",
          meliProductResponse.attributes
        ) ?? meliProductResponse.condition, // novo, usado, recondicionado
      free_shipping: meliProductResponse.shipping.free_shipping,
      sold_quantity: null,
      seller: meliSellerResponse.seller.nickname,
      installments: buildInstallmentsText(meliProductResponse),
      description: meliDescription.plain_text,
      attributes: mapAttributes(meliProductResponse.attributes),
      category_path_from_root: mapCategoryPathFromRoot(meliCategoryResponse),
    },
  };

  return product;
}

function mapPrice(meliProductResponse: MeliProductResponse) {
  const price: Price = {
    currency: meliProductResponse.currency_id,
    amount: meliProductResponse.price,
    decimals: 3,
    regular_amount: meliProductResponse.original_price,
  };

  return price;
}

function mapPictures(meliProductResponse: MeliProductResponse) {
  const pictures: string[] = meliProductResponse.pictures.map(
    (picture) => picture.url
  );

  return pictures;
}

function buildInstallmentsText(meliProductResponse: MeliProductResponse) {
  //a api não retorna essa informação,
  return "";
}

function mapAttributes(meliProductAttributes: AttributeDto[]) {
  return meliProductAttributes.map((meliProductAttribute) => {
    return {
      id: meliProductAttribute.id,
      name: meliProductAttribute.name,
      value_name: meliProductAttribute.value_name,
    };
  });
}

function mapCategoryPathFromRoot(meliCategoryResponse: MeliCategoryResponse) {
  return meliCategoryResponse.path_from_root.map((path) => path.name);
}

function getAttributeValueById(
  attributeId: string,
  attributes: AttributeDto[]
) {
  const attribute = attributes.find((attribute) => attribute.id == attributeId);

  return attribute?.value_name;
}
