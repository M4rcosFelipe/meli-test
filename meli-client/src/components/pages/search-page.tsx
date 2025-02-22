"use client";
import SearchFooter from "@/components/search-footer/search-footer";
import SearchResults from "@/components/search-results/search-results";
import { useSearch } from "@/hooks/useSearch";

import { useEffect } from "react";

export default function SearchPage() {
  const { updateServerItems, items } = useSearch();
  useEffect(() => {
    updateServerItems();
  }, []);

  return (
    <>
      <SearchResults results={items} />
      <SearchFooter />
    </>
  );
}
