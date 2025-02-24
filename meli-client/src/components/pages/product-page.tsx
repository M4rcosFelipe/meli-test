import { Item } from "@/types/product/ProductResponse";
import Divider from "../divider/divider";
import Breadcrumb from "../product-page/breadcrumb/breadcrumb";
import Description from "../product-page/description/description";
import MediaGallery from "../product-page/media-gallery/media-gallery";
import ProductInfo from "../product-page/product-info/product-info";

interface Props {
  product: Item;
  previousUrl: string;
}
export default function ProductPage({ product, previousUrl }: Props) {
  return (
    <div className="main-container pdp-container">
      <Breadcrumb
        previousUrl={previousUrl}
        items={product.category_path_from_root}
      />
      <div className="pdp-item-container">
        <div className="pdp-item-container__row">
          <h1 className="product-info__title product-info__title--mobile">
            {product.title}
          </h1>
          <MediaGallery
            medias={product.pictures}
            productTitle={product.title}
          />
          <ProductInfo item={product} />
        </div>
        <Divider mt="28px" mb="28px" />
        <Description descriptionText={product.description} />
      </div>
    </div>
  );
}
