import SearchPage from "@/components/pages/search-page";
import { Metadata } from "next";

export async function generateMetadata(props: {
  searchParams?: Promise<{
    search?: string;
  }>;
}): Promise<Metadata> {
  const searchParams = await props.searchParams;
  const search = searchParams?.search ?? "";

  return {
    title: search,
    description:
      search != ""
        ? `Envíos Gratis en el día ✓ Comprá ${search} en cuotas sin interés! Conocé nuestras increíbles ofertas y promociones en millones de productos.`
        : "",
    keywords: [],
  };
}

export default async function Page() {
  return <SearchPage />;
}
