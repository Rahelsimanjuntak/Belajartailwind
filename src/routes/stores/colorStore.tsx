import { create } from "zustand";

type ColorType = "blue" | "red" | null;

interface colorStore {
  activeColor: ColorType;
  setActiveColor: (color: ColorType) => void;
}

export const useColorStore = create<colorStore>((set) => ({
  activeColor: null,
  setActiveColor: (color) =>
    set({
      activeColor: color,
    }),
}));