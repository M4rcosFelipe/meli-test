"use client";
import SearchFooter from "@/components/search-footer/search-footer";
import SearchResults from "@/components/search-results/search-results";
import { useSearch } from "@/hooks/useSearch";

import { useEffect } from "react";
import Pagination from "../pagination/pagination";
import SearchEmptyResults from "../search-empty-results/search-empty-results";
import LoadingScreen from "../loading-screen/loading-screen";

export default function SearchPage() {
  const {
    updateServerItems,
    items,
    currentPage,
    goToPage,
    goToNextPage,
    goToPreviousPage,
    totalPages,
    lastPage,
    isPending,
  } = useSearch();

  useEffect(() => {
    updateServerItems();
  }, []);

  const hasLastPage = lastPage != null;
  const hasNoItemsLeftOnPage = items.length == 0;

  if (isPending && hasNoItemsLeftOnPage) {
    return <LoadingScreen />;
  }
  if (hasLastPage && currentPage >= lastPage && hasNoItemsLeftOnPage) {
    return <SearchEmptyResults />;
  }
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
