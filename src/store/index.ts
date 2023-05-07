import { configureStore } from "@reduxjs/toolkit";
import coin from "./coin";
import exchange from "./exchange";

export const store = configureStore({
  reducer: {
    coin,
    exchange,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
