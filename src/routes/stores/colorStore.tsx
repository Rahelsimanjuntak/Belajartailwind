import { create } from "zustand";

type ColorType = "blue" | "red" | null;

interface ColorStore {
  activeColor: ColorType;
  setActiveColor: (color: ColorType) => void;
}

export const useColorStore = create<ColorStore>((set) => ({
  activeColor: null,

  setActiveColor: (color) =>
    set({
      activeColor: color,
    }),
}));