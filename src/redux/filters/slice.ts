import { createSlice } from '@reduxjs/toolkit';

interface FiltersState {
  name: string;
  number: string;
}

const initialState:FiltersState = {
  name: '',
  number: '',
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilterByName(state, action) {
      state.name = action.payload;
    },
    changeFilterByNumber(state, action) {
      state.number = action.payload;
    },
  },
});

export const { changeFilterByName, changeFilterByNumber } = filterSlice.actions;

export default filterSlice.reducer;
