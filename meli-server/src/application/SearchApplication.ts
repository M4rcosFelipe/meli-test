import { SearchResponseDto } from "../types/dtos/SearchResponseDto";
import { mapMeliSearchResponseToSearchResponseDto } from "../mapping/MapMeliSearchResponseToSearchResponseDto";
import { MeliService } from "../services/MeliService";

export class SearchApplication {
  static async searchAsync(
    query: string,
    offset: number = 0
  ): Promise<SearchResponseDto> {
    const response = await MeliService.searchAsync(query, offset);

    const searchResponse = mapMeliSearchResponseToSearchResponseDto(response);

    return searchResponse;
  }
}
