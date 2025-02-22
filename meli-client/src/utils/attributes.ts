import { Attribute } from "@/types/product/Attribute";

export function getMainAttributesById(
  attributeIds: string[],
  attributes: Attribute[]
) {
  return attributes.filter((attribute) => attributeIds.includes(attribute.id));
}
