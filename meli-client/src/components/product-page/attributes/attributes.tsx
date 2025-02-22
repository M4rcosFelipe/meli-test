import { Attribute } from "@/types/product/Attribute";
import "./attributes.scss";
import { getMainAttributesById } from "@/utils/attributes";

interface Props {
  attributes: Attribute[];
}
export default function Attributes({ attributes }: Props) {
  const displayAttributes = getMainAttributesById(
    ["MAIN_COLOR", "BRAND"],
    attributes
  );

  return (
    <div className="attributes">
      <ul className="attributes__list">
        {displayAttributes.map((attribute) => (
          <li className="attributes__item" key={attribute.id}>
            {attribute.name}:
            <span className="attributes__value"> {attribute.value_name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
