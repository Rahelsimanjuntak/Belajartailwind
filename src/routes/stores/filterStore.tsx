import { create } from "zustand";

interface FilterStore {
  userFilter: string;
  commentFilter: string;

  setUserFilter: (value: string) => void;
  setCommentFilter: (value: string) => void;
}

export const useFilterStore = create<FilterStore>((set) => ({
  userFilter: "",
  commentFilter: "",

  setUserFilter: (value) =>
    set({
      userFilter: value,
    }),

  setCommentFilter: (value) =>
    set({
      commentFilter: value,
    }),
}));