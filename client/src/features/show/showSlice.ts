import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";

interface ShowState {
  id: number;
  name: string;
  image: string;
}

const initialState: ShowState = {
  id: 0,
  name: "",
  image: "",
}

export const showSlice = createSlice({
  name: "show",
  initialState,
  reducers: {
    setShow: (state, action: PayloadAction<ShowState>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.image = action.payload.image;
    }
  },
});

export const { setShow } = showSlice.actions;
export const selectShow = (state: RootState) => state;
export default showSlice.reducer;