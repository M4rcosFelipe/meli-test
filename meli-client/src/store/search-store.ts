import { SearchResult } from "@/types/search/SearchResult";
import { create } from "zustand";

interface SearchState {
  currentPage: number;
  totalPages: number;
  serverItems: SearchResult[];
  items: any[];
  query: string;
  setCurrentPage: (pageNumber: number) => void;
  setSearchQuery: (query: string) => void;
  setServerItems: (serverItems: any[]) => void;
}

export const useSearchStore = create<SearchState>()((set) => ({
  currentPage: 1,
  totalPages: 1,
  serverItems: [],
  items: [],
  query: "",
  setCurrentPage: (pageNumber) => set({ currentPage: pageNumber }),
  setSearchQuery: (query) => set({ query: query }),
  setServerItems: (serverItems) => set({ serverItems: serverItems }),
}));
