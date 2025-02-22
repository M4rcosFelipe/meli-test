import { ProductService } from "@/services/ProductService";
import "./product-page.scss";
import MediaGallery from "@/components/product-page/media-gallery/media-gallery";
import Breadcrumb from "@/components/product-page/breadcrumb/breadcrumb";
import { headers } from "next/headers";
import ProductInfo from "@/components/product-page/product-info/product-info";
import Description from "@/components/product-page/description/description";
import Divider from "@/components/divider/divider";
import { notFound } from "next/navigation";
import { Metadata } from "next";

async function getProductPageData(id: string) {
  const productPage = await ProductService.getProductPage(id);

  if (!productPage) {
    notFound();
  }

  return productPage;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const productPage = await getProductPageData(id);

  return {
    title: productPage.item.title,
    description: productPage.item.description,
    keywords: [],
    openGraph: {
      images: [
        {
          url: productPage.item.pictures[0], // Must be an absolute URL
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const previousUrl = (await headers()).get("referer");

  const product = await getProductPageData(id);

  return (
    <div className="main-container pdp-container">
      <Breadcrumb
        previousUrl={previousUrl}
        items={product.item.category_path_from_root}
      />
      <div className="pdp-item-container">
        <div className="pdp-item-container__row">
          <h1 className="product-info__title product-info__title--mobile">
            {product.item.title}
          </h1>
          <MediaGallery
            medias={product.item.pictures}
            productTitle={product.item.title}
          />
          <ProductInfo item={product.item} />
        </div>
        <Divider mt="28px" mb="28px" />
        <Description descriptionText={product.item.description} />
      </div>
    </div>
  );
}
