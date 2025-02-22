import { SearchResult } from "./SearchResult";

export interface SearchResponse {
  categories: string[];
  items: SearchResult[];
}
