import { configureStore } from "@reduxjs/toolkit";
import { type } from "os";
import postSlice from "./postSlice";

export const store = configureStore({
  reducer: {
    posts: postSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
