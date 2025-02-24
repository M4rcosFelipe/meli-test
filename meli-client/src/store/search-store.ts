import { SearchResult } from "@/types/search/SearchResult";
import { create } from "zustand";

interface SearchState {
  currentPage: number;
  totalPages: number;
  lastPage: number | null;
  serverItems: SearchResult[];
  items: SearchResult[];
  setCurrentPage: (pageNumber: number) => void;
  setLastPage: (pageNumber: number) => void;
  setServerItems: (serverItems: any[]) => void;
}

export const useSearchStore = create<SearchState>()((set) => ({
  currentPage: 1,
  totalPages: 1,
  serverItems: [],
  lastPage: null,
  items: [],
  setLastPage: (pageNumber) => set({ lastPage: pageNumber }),
  setCurrentPage: (pageNumber) => set({ currentPage: pageNumber }),
  setServerItems: (serverItems) => set({ serverItems: serverItems }),
}));
