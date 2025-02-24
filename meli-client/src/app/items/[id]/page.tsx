import { ProductService } from "@/services/ProductService";
import "./product-page.scss";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getImageUrlByMediaId } from "@/utils/images";
import ProductPage from "@/components/pages/product-page";

async function getProductPageData(productId: string) {
  const productPage = await ProductService.getProductPage(productId);

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
          url: getImageUrlByMediaId(productPage.item.pictures[0], "large"),
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const previousUrl = (await headers()).get("referer") ?? "/";

  const product = await getProductPageData(id);

  return <ProductPage product={product.item} previousUrl={previousUrl} />;
}
