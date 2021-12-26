import { configureStore } from '@reduxjs/toolkit';
import showsReducer from "../features/show/showSlice";
import searchReducer from "../features/search/searchSlice";

export const store = configureStore({
  reducer: {
    shows: showsReducer,
    search: searchReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;