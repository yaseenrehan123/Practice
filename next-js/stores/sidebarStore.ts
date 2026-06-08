import type { SidebarStore as SidebarStore } from "@/utils/types";
import { create } from "zustand";

const useSidebarStore = create<SidebarStore>((set) => ({
    enabled: false,
    setEnabled: (val: boolean) => set(() => ({ enabled: val }))
}));

export default useSidebarStore;