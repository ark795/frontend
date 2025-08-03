import { create } from "zustand"

type CategoryFilterState = {
    selectedCategory: string | null
    setCategory : (category: string | null) => void
}

export const useCategoryFilter = create<CategoryFilterState>((set) => ({
    selectedCategory: null,
    setCategory: (category) => set({ selectedCategory: category }),
}))