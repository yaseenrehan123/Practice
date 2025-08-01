import { create } from "zustand";
import type { CounterStore } from "./types";

export const useCounterStore = create<CounterStore>((set)=>({
    count:0,
    incrementCount:()=>set((state)=>({count:state.count + 1})),
    decrementCount:()=>set((state)=>({count:state.count-1}))
}));