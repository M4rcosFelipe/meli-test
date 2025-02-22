"use client";
import SearchFooter from "@/components/search-footer/search-footer";
import SearchResults from "@/components/search-results/search-results";
import { useSearch } from "@/hooks/useSearch";

import { useEffect } from "react";
import Pagination from "../pagination/pagination";

export default function SearchPage() {
  const {
    updateServerItems,
    items,
    currentPage,
    goToPage,
    goToNextPage,
    goToPreviousPage,
    totalPages,
  } = useSearch();

  useEffect(() => {
    updateServerItems();
  }, []);

  return (
    <>
      <SearchResults results={items} />

      {items.length > 0 && (
        <SearchFooter>
          <Pagination
            currentPage={currentPage}
            goToPage={goToPage}
            goToNextPage={goToNextPage}
            goToPreviousPage={goToPreviousPage}
            totalPages={totalPages}
          />
        </SearchFooter>
      )}
    </>
  );
}
