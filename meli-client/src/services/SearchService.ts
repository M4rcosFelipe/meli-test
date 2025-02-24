import { SearchResponse } from "@/types/search/SearchResponse";

export class SearchService {
  static async search(
    query: string,
    offset: number = 0
  ): Promise<SearchResponse> {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/items?q=${query}&offset=${offset}`
    );

    if (response.status != 200) {
      return { categories: [], items: [] };
    }

    const result = (await response.json()) as SearchResponse;

    return result;
  }
}
