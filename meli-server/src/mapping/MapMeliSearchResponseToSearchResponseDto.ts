import { SearchResponseDto } from "../types/dtos/SearchResponseDto";
import { SearchResultDto } from "../types/dtos/SearchResultDto";
import { Price } from "../types/Price";
import {
  Attribute,
  Filter,
  Installments,
  MeliSearchResponse,
  MeliSearchResult,
  SalePrice,
} from "../types/responses/MeliSearchResponse";
import { formatMoney } from "../utils/money";

export function mapMeliSearchResponseToSearchResponseDto(
  meliSearchResponse: MeliSearchResponse
) {
  const items = meliSearchResponse.results.map((result) =>
    mapMeliSearchResultToSearchResultDto(result)
  );

  const categories = mapFiltersToCategories(meliSearchResponse.filters);

  const searchResponse: SearchResponseDto = {
    categories: categories,
    items: items,
  };

  return searchResponse;
}

function mapMeliSearchResultToSearchResultDto(
  meliSearchResult: MeliSearchResult
) {
  const searchResult: SearchResultDto = {
    id: meliSearchResult.id,
    title: meliSearchResult.title,
    price: mapSalePriceToPrice(meliSearchResult.sale_price),
    picture: meliSearchResult.use_thumbnail_id
      ? getPictureUrlByThumbnailId(meliSearchResult.thumbnail_id)
      : meliSearchResult.thumbnail,
    condition:
      getAttributeValueById("ITEM_CONDITION", meliSearchResult.attributes) ??
      meliSearchResult.condition,
    free_shipping: meliSearchResult.shipping.free_shipping,
    installments:
      meliSearchResult.installments == null
        ? ""
        : getInstallmentsText(meliSearchResult.installments),
    sellerName: meliSearchResult.seller ? meliSearchResult.seller.nickname : "",
  };

  return searchResult;
}

function mapSalePriceToPrice(salePrice: SalePrice) {
  const price: Price = {
    currency: salePrice.currency_id,
    amount: salePrice.amount,
    decimals: 3,
    regular_amount: salePrice.regular_amount,
  };

  return price;
}

function getPictureUrlByThumbnailId(thumbnailId: string) {
  return `https://http2.mlstatic.com/D_${thumbnailId}-V.jpg`;
}

function getInstallmentsText(installments: Installments) {
  const formatedValue = formatMoney(
    installments.currency_id,
    installments.amount
  );

  if (installments.rate == 0) {
    return `Mismo precio en ${installments.quantity} cuotas de ${formatedValue}`;
  }

  return `en ${installments.quantity} cuotas de ${formatedValue}`;
}

function mapFiltersToCategories(filters: Filter[]) {
  return filters.map((filter) => filter.name);
}

function getAttributeValueById(attributeId: string, attributes: Attribute[]) {
  const attribute = attributes.find((attribute) => attribute.id == attributeId);

  return attribute?.value_name;
}
