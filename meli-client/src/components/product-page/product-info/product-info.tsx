import { Item } from "@/types/product/ProductResponse";
import "./product-info.scss";
import Money from "@/components/money/money";
import { calculateDiscountPercentage } from "@/utils/price";
import Installments from "@/components/search-results/search-result-item/installments/installments";
import Attributes from "../attributes/attributes";

interface Props {
  item: Item;
}
export default function productInfo({ item }: Props) {
  const hasDiscount = item.price.regular_amount != null;
  const hasSoldQuantity = item.sold_quantity != null;

  return (
    <div className="product-info">
      <div className="product-info__condition-wrapper">
        <p
          className={
            "product-info__condition " +
            (hasSoldQuantity ? "product-info__condition--right-detailed" : "")
          }
        >
          {item.condition}
        </p>
        {hasSoldQuantity && (
          <p className="product-info__sold-quantity">
            +{item.sold_quantity} vendidos
          </p>
        )}
      </div>
      <h1 className="product-info__title product-info__title--desktop">
        {item.title}
      </h1>
      {item.seller && (
        <p className="product-info__seller-name">Por {item.seller}</p>
      )}

      <div className="product-info__price">
        {item.price.regular_amount && (
          <s className="product-info__original-price">
            <Money
              amount={item.price.regular_amount}
              currency={item.price.currency}
            />
          </s>
        )}

        <p className="product-info__current-price">
          <Money amount={item.price.amount} currency={item.price.currency} />
          {hasDiscount && (
            <span className="product-info__discount">
              {calculateDiscountPercentage(
                item.price.regular_amount!,
                item.price.amount
              )}
              % OFF
            </span>
          )}
        </p>
        {item.installments && (
          <div className="product-info__installments">
            <Installments installmentsText={item.installments} />
          </div>
        )}
      </div>
      {item.free_shipping && (
        <p className="product-info__free-shipping">Envío Gratis</p>
      )}
      <Attributes attributes={item.attributes} />
    </div>
  );
}
