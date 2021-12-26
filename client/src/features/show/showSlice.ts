import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";
import { SeasonData, EpisodeData, ExpandedSeasonData } from "../../types/movieTypes";

interface ShowState {
  id: number;
  name: string;
  image: string;
  seasons: ExpandedSeasonData[];
  totalEpisodes: number;
  watchedEpisodes: number;
}

const initialState: ShowState = {
  id: 0,
  name: "",
  image: "",
  seasons: [],
  totalEpisodes: 0,
  watchedEpisodes: 0,
}

export const showSlice = createSlice({
  name: "show",
  initialState,
  reducers: {
    setShow: (state, action: PayloadAction<ShowState>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.image = action.payload.image;
      state.seasons = action.payload.seasons;
      state.totalEpisodes = action.payload.totalEpisodes;
      state.watchedEpisodes = action.payload.watchedEpisodes;
    },
  }
});

export const { setShow } = showSlice.actions;
export const selectShow = (state: RootState) => state;
export default showSlice.reducer;