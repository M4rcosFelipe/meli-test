"use client";
import { SearchService } from "@/services/SearchService";
import { useSearchStore } from "@/store/search-store";
import { SearchResult } from "@/types/search/SearchResult";
import { useSearchParams } from "next/navigation";

function deDuplicateServerItems(serverItems: SearchResult[]) {
  const uniqueServerItemsiDs = [
    ...new Set(serverItems.map((serverItem) => serverItem.id)),
  ];

  return uniqueServerItemsiDs.map((uniqueServerItemId) =>
    serverItems.find((serverItem) => serverItem.id === uniqueServerItemId)
  );
}

export function useSearch() {
  const { currentPage, setCurrentPage, setServerItems, serverItems } =
    useSearchStore((state) => state);

  const searchParams = useSearchParams();

  const searchQuery = searchParams.get("search") ?? "";

  const totalPagesOfItems = Math.ceil(serverItems.length / 10);
  const totalPages = totalPagesOfItems < 10 ? 10 : totalPagesOfItems;

  const items = serverItems.slice((currentPage - 1) * 10, currentPage * 10);
  console.log({
    totalPages,
    totalPagesOfItems,
    items,
    serverItems,
    searchQuery,
  });

  async function updateServerItems(page = 1) {
    const offset = page == 1 ? 0 : page * 10;
    const searchResponse = await SearchService.search(searchQuery, offset);
    const currentServerItems = serverItems;
    console.log("update", { page, offset });

    const uniqueItems = deDuplicateServerItems([
      ...currentServerItems,
      ...searchResponse.items,
    ]);
    setServerItems([...currentServerItems, ...searchResponse.items]);
  }

  function goToPage(pageNumber: number) {
    console.log("goToPage", {
      pageNumber,
      totalPagesOfItems,
    });

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
  };
}
