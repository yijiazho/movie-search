import { createWithEqualityFn } from "zustand/traditional";
import { MovieFilter } from "../data/filter/movie-filter";

interface FilterState {
    filter: MovieFilter;
}

interface FilterAction {
    setFilter: <Key extends keyof MovieFilter>(key: Key, value: MovieFilter[Key]) => void;
    clearFilter: (key: keyof MovieFilter) => void;
    clearAllFilters: () => void;
}

export const useFilterStore = createWithEqualityFn<FilterState & FilterAction>(
    (set) => ({
        filter: {},

        setFilter: (key, value) => {
            set((state) => ({
                filter: {
                    ...state.filter,
                    [key]: value,
                },
            }));
        },

        clearFilter: (key) => {
            set((state) => {
                const newFilter = { ...state.filter };
                delete newFilter[key];
                return { filter: newFilter };
            });
        },

        clearAllFilters: () => {
            set({ filter: {} });
        },
    }),
    Object.is
);
