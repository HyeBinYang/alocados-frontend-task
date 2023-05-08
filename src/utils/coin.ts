import { Coin } from "../store/coin";

type CoinMap = {
  [key in Coin]: {
    [key in Coin]?: (value: number) => number;
  };
};

export const convertCoin: CoinMap = {
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

export function getDecimal(num: number) {
  const str = String(num);
  let startIndex = str.indexOf(".") + 1;
  let result = str.substring(0, startIndex);
  let cnt = 0;

  while (startIndex < str.length) {
    result += str[startIndex++];
    cnt++;
    if (cnt === 10) break;
  }

  return Number(result);
}
