import { create } from "zustand";

export interface GridStoreStateType {
  size: number;
  division: number;
  setSize: (size: number) => void;
  setDivision: (size: number) => void;
}
export const useGridStore = create<GridStoreStateType>((set, _get) => ({
  size: 70,
  division: 70,
  setSize: (size: number) => set({ size }),
  setDivision: (division: number) => set({ division }),
}));
