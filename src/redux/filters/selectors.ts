import type { RootState } from "../store";

export const selectNameFilter = (state: RootState) => state.filters.name;

export const selectNumberFilter = (state: RootState) => state.filters.number;
