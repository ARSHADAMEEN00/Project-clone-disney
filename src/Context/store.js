import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
// import UserSlice from "./UserSlice";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});
// movie store
