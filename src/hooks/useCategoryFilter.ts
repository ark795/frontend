import { create } from "zustand"

type CategoryFilterState = {
    selectedCategory: string | null
    searchText: string
    setCategory : (category: string | null) => void
    setSearchText: (text: string) => void
}

export const useCategoryFilter = create<CategoryFilterState>((set) => ({
    selectedCategory: null,
    searchText: "",
    setCategory: (category) => set({ selectedCategory: category }),
    setSearchText: (text) => set({ searchText: text }),
}))