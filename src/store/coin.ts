import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Coin = "solana" | "ethereum" | "bnb";
type CoinMap = {
  [key in Coin]: {
    [key in Coin]?: (value: number) => number;
  };
};

const coinMap: CoinMap = {
  solana: {
    ethereum(value: number) {
      return value / 100;
    },
    bnb(value: number) {
      return value / 2;
    },
  },
  ethereum: {
    solana(value: number) {
      return value * 100;
    },
    bnb(value: number) {
      return value * 50;
    },
  },
  bnb: {
    solana(value: number) {
      return value * 2;
    },
    ethereum(value: number) {
      return value / 50;
    },
  },
};

const coin = createSlice({
  name: "coin",
  initialState: {
    balance: {
      solana: 0,
      ethereum: 2000,
      bnb: 0,
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
