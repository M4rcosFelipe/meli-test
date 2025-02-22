import { SearchResult } from "@/types/search/SearchResult";
import Money from "@/components/money/money";
import Installments from "../installments/installments";
import { calculateDiscountPercentage } from "@/utils/price";

interface Props {
  item: SearchResult;
}

export default function SearchResultPrice({ item }: Props) {
  const hasDiscount = item.price.regular_amount != null;

  return (
    <div className="search-result__price">
      {item.price.regular_amount && (
        <s className="search-result__original-price">
          <Money
            amount={item.price.regular_amount}
            currency={item.price.currency}
          />
        </s>
      )}

      <p className="search-result__current-price">
        <Money amount={item.price.amount} currency={item.price.currency} />
        {hasDiscount && (
          <span className="search-result__discount">
            {calculateDiscountPercentage(
              item.price.regular_amount!,
              item.price.amount
            )}
            % OFF
          </span>
        )}
      </p>
      {item.installments && (
        <div className="search-result__installments">
          <Installments installmentsText={item.installments} />
        </div>
      )}
    </div>
  );
}
