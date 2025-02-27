"use client";
import { SearchService } from "@/services/SearchService";
import { useSearchStore } from "@/store/search-store";
import { SearchResult } from "@/types/search/SearchResult";
import { useSearchParams } from "next/navigation";
import { useTransition } from "react";

function deDuplicateServerItems(serverItems: SearchResult[]) {
  const uniqueServerItemsiDs = [
    ...new Set(serverItems.map((serverItem) => serverItem.id)),
  ];

  return uniqueServerItemsiDs.map((uniqueServerItemId) =>
    serverItems.find((serverItem) => serverItem.id === uniqueServerItemId)
  );
}

export function useSearch() {
  const {
    currentPage,
    setCurrentPage,
    setServerItems,
    serverItems,
    lastPage,
    setLastPage,
  } = useSearchStore((state) => state);

  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const searchQuery = searchParams.get("search") ?? "";

  const totalPagesOfItems = Math.ceil(serverItems.length / 10);
  const totalPages = totalPagesOfItems < 10 ? 10 : totalPagesOfItems;

  const items = serverItems.slice((currentPage - 1) * 10, currentPage * 10);

  async function updateServerItems(page = 1) {
    const offset = page == 1 ? 0 : page * 10;
    startTransition(async () => {
      const searchResponse = await SearchService.search(searchQuery, offset);

      if (lastPage == null && searchResponse.items.length == 0) {
        setLastPage(page);
      }

      const currentServerItems = serverItems;
      const uniqueItems = deDuplicateServerItems([
        ...currentServerItems,
        ...searchResponse.items,
      ]);
      setServerItems(uniqueItems);
    });
  }

  function goToPage(pageNumber: number) {
    if (pageNumber >= totalPagesOfItems) {
      updateServerItems(pageNumber);
    }
    setCurrentPage(pageNumber);
  }

  function goToNextPage() {
    const nextPage = currentPage + 1;
    if (nextPage > totalPages) {
      return;
    }
    goToPage(nextPage);
  }

  function goToPreviousPage() {
    const previousPageNumber = currentPage - 1;
    if (previousPageNumber < 1) {
      return;
    }

    goToPage(currentPage - 1);
  }

  return {
    currentPage,
    setServerItems,
    serverItems,
    updateServerItems,
    searchQuery,
    items,
    totalPages,
    goToPage,
    goToPreviousPage,
    goToNextPage,
    lastPage,
    isPending,
  };
}
