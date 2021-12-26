import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";
import { MovieData } from "../../types/movieTypes";

interface SearchResultState {
  result: MovieData[];
}

const initialState: SearchResultState = {
  result: [],
}

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setResult: (state, action: PayloadAction<MovieData[]>) => {
      state.result = action.payload;
    }
  },
})

export const { setResult } = searchSlice.actions;
export const selectResult = (state: RootState) => state.search.result;
export default searchSlice.reducer;