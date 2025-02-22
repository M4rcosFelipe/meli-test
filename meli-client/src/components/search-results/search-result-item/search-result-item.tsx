import { SearchResult } from "@/types/search/SearchResult";
import "./search-result-item.scss";
import Link from "next/link";

import SearchResultPrice from "./search-result-price/search-result-price";

interface Props {
  item: SearchResult;
}
export default function SearchResultItem({ item }: Props) {
  return (
    <li className="search-result">
      <Link href={`/items/${item.id}`}>
        {/* <p>{item.id}</p> */}
        <div className="search-result__content">
          <div className="search-result__image">
            <img src={item.picture} alt="" />
          </div>
          <div className="search-result__info">
            <h3 className="search-result__title">{item.title}</h3>
            {item.sellerName && (
              <p className="search-result__seller-name">
                Por {item.sellerName}
              </p>
            )}

            <SearchResultPrice item={item} />
            {item.free_shipping && (
              <p className="search-result__free-shipping">Envío Gratis</p>
            )}
            {item.condition != "Nuevo" && (
              <p className="search-result__condition">{item.condition}</p>
            )}
          </div>
        </div>
      </Link>
    </li>
  );
}
