import { create } from "zustand";
import { persist } from "zustand/middleware";

const MAX = 3;

type CompareState = {
  ids: string[];
  toggle: (id: string) => void;
  clear: () => void;
  has: (id: string) => boolean;
};

export const useCompare = create<CompareState>()(
  persist(
    (set, get) => ({
      ids: [],
      has: (id) => get().ids.includes(id),
      clear: () => set({ ids: [] }),
      toggle: (id) => {
        const ids = get().ids;
        if (ids.includes(id)) {
          set({ ids: ids.filter((x) => x !== id) });
          return;
        }
        if (ids.length >= MAX) return;
        set({ ids: [...ids, id] });
      },
    }),
    { name: "vanrobi-compare" },
  ),
);

export const COMPARE_MAX = MAX;
