import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Coin = "Solana" | "Ethereum" | "BnB";
type CoinMap = {
  [key in Coin]: {
    [key in Coin]?: (value: number) => number;
  };
};

const coinMap: CoinMap = {
  Solana: {
    Ethereum(value: number) {
      return value / 100;
    },
    BnB(value: number) {
      return value / 2;
    },
  },
  Ethereum: {
    Solana(value: number) {
      return value * 100;
    },
    BnB(value: number) {
      return value * 50;
    },
  },
  BnB: {
    Solana(value: number) {
      return value * 2;
    },
    Ethereum(value: number) {
      return value / 50;
    },
  },
};

const coin = createSlice({
  name: "coin",
  initialState: {
    balance: {
      Solana: 0,
      Ethereum: 2000,
      BnB: 0,
    },
  },
  reducers: {
    exchangeCoin(state, action: PayloadAction<{ from: Coin; to: Coin; value: number }>) {
      const { payload } = action;
      const { from, to, value } = payload;
      state.balance[from] -= value;
      state.balance[to] = coinMap[from][to]?.(value) as number;
    },
  },
});

export const { exchangeCoin } = coin.actions;
export default coin.reducer;
