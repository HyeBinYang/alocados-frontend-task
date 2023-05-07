import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Coin } from "./coin";
import { convertCoin } from "../utils/coin";

export type ExchangeNameType = "from" | "to";

export interface ExchangeInfo {
  date?: number;
  from: {
    name: Coin;
    value: number | string;
  };
  to: {
    name: Coin;
    value: number | string;
  };
}

interface ExchangeState {
  history: ExchangeInfo[];
  input: ExchangeInfo;
}

const initialState: ExchangeState = {
  history: [],
  input: {
    from: {
      name: "Solana",
      value: "",
    },
    to: {
      name: "Ethereum",
      value: "",
    },
  },
};

const exchange = createSlice({
  name: "exchange",
  initialState,
  reducers: {
    addHistory(state: ExchangeState, action: PayloadAction<ExchangeInfo>) {
      state.history = [action.payload, ...state.history];
    },
    reverseHistory(state: ExchangeState) {
      state.history.reverse();
    },
    setInputValue(state: ExchangeState, action: PayloadAction<{ name: "from" | "to"; value: string }>) {
      const { payload } = action;
      const { name, value } = payload;
      const { from, to } = state.input;

      if (name === "from") {
        state.input["from"]["value"] = value;
        state.input["to"]["value"] = convertCoin[from.name][to.name]?.(Number(value)) as number;
      } else {
        state.input["from"]["value"] = convertCoin[to.name][from.name]?.(Number(value)) as number;
        state.input["to"]["value"] = value;
      }
    },
    setInputCoinName(state: ExchangeState, action: PayloadAction<{ name: "from" | "to"; value: Coin }>) {
      const { payload } = action;
      const { name, value } = payload;
      state.input[name]["name"] = value;
    },
  },
});

export const { addHistory, reverseHistory, setInputValue, setInputCoinName } = exchange.actions;
export default exchange.reducer;