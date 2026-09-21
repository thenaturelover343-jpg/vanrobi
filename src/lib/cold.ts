import { create } from "zustand";

type ColdState = {
  grow: number;
  temp: number;
  machineId: string;
  setGrow: (n: number) => void;
  setTemp: (n: number) => void;
  setMachine: (id: string) => void;
};

export const useCold = create<ColdState>((set) => ({
  grow: 0.22,
  temp: 4,
  machineId: "goldy",
  setGrow: (grow) => set({ grow }),
  setTemp: (temp) => set({ temp }),
  setMachine: (machineId) => set({ machineId }),
}));
