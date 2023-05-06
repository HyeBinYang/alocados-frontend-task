import { configureStore } from "@reduxjs/toolkit";
import coin from "./coin";

export const store = configureStore({
  reducer: {
    coin,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;