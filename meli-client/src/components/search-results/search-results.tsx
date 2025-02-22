import { SearchResult } from "@/types/search/SearchResult";
import "./search-results.scss";
import SearchResultItem from "./search-result-item/search-result-item";

interface Props {
  results: SearchResult[];
}

export default function SearchResults({ results }: Props) {
  return (
    <ul className="search-results main-container">
      {results.map((item) => (
        <SearchResultItem item={item} key={item.id} />
      ))}
    </ul>
  );
}
