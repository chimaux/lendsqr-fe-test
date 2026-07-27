import { create } from "zustand";

interface SearchState {
  query: string;
  setQuery: (query: string) => void;
}

// Holds the value of the TopBar's global "Search for anything" box so any
// page (e.g. the Users table) can read and filter against it live.
export const useSearchStore = create<SearchState>((set) => ({
  query: "",
  setQuery: (query) => set({ query }),
}));
