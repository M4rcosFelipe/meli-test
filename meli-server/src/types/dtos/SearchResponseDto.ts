import { SearchResultDto } from "./SearchResultDto";

export interface SearchResponseDto {
  categories: string[];
  items: SearchResultDto[];
}
