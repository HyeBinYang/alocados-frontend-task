import React, { ChangeEvent, useCallback, useEffect, useMemo } from "react";
import styled from "styled-components";
import Input from "../Common/Input";
import Dropdown from "../Common/Dropdown";
import coins from "../../const/coin";
import ChevonDown from "../Common/Icon/ChevonDown";
import Text from "../Common/Text";
import color from "../../const/color";
import useAppDispatch from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { ExchangeNameType, setInputCoinName, setInputValue } from "../../store/exchange";
import { Coin } from "../../store/coin";

const Wrapper = styled.div`
  height: 60px;
  display: flex;
  column-gap: 16px;

  & > *:first-child {
    flex: 1;
  }

  .coin__options {
    width: 100%;
    padding: 10px 0;
    background-color: ${color.Light.Shade[0]};
  }

  .coin__option {
    padding: 10px;
    cursor: pointer;
  }
`;

const CurrentSelectedBox = styled.div`
  width: 170px;
  height: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 20px;
  background-color: ${color.Light.Shade[0]};
  border-radius: 12px;
  box-sizing: border-box;
  cursor: pointer;
`;

const CoinOptionBox = styled.div<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  column-gap: 8px;
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};

  img {
    width: 24px;
    height: 24px;
  }
`;

interface ExchangeInputProps {
  innerLabel: string;
  name: ExchangeNameType;
}

const ExchangeInput: React.FC<ExchangeInputProps> = ({ innerLabel, name }) => {
  const balance = useAppSelector((state) => state.coin.balance);
  const exchangeInput = useAppSelector((state) => state.exchange.input);
  const { name: coinName, value } = exchangeInput[name];
  const dispatch = useAppDispatch();

  const isError = useMemo(() => value === "0" || balance[coinName] < Number(value), [coinName, value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // const numberRe = /^\d*[.]?\d*$/g;
    // if (!numberRe.test(value)) return;
    if (name === "from" || name === "to") dispatch(setInputValue({ name, value }));
  };

  const getCanSelectCoin = useCallback(
    (coin: Coin) => {
      return exchangeInput["from"].name === coin || exchangeInput["to"].name === coin;
    },
    [exchangeInput]
  );

  const handleSelect = (name: ExchangeNameType, coin: Coin) => () => {
    if (getCanSelectCoin(coin)) return;
    dispatch(setInputCoinName({ name, value: coin }));

    if (name === "from") {
      dispatch(setInputValue({ name, value: String(exchangeInput.from.value) }));
    } else {
      dispatch(setInputValue({ name, value: String(exchangeInput.to.value) }));
    }
  };

  return (
    <Wrapper>
      <Input innerLabel={innerLabel} name={name} value={value} onChange={handleChange} error={name === "from" && isError} />
      <Dropdown>
        <Dropdown.Trigger>
          <CurrentSelectedBox>
            <CoinOptionBox>
              <div>
                <img src={coins[coinName]["icon"]} alt="" />
              </div>
              <Text element="p" font={"Caption-1"} color={color.Light.Shade[900]}>
                {coinName}
              </Text>
            </CoinOptionBox>
            <div>
              <ChevonDown />
            </div>
          </CurrentSelectedBox>
        </Dropdown.Trigger>
        <Dropdown.List className="coin__options">
          <Dropdown.Item className="coin__option" onSelect={handleSelect(name, "Solana")}>
            <CoinOptionBox disabled={getCanSelectCoin("Solana")}>
              <div>
                <img src={coins.Solana.icon} alt="" />
              </div>
              <Text element="p" font={"Caption-1"} color={color.Light.Shade[900]}>
                Solana
              </Text>
            </CoinOptionBox>
          </Dropdown.Item>
          <Dropdown.Item className="coin__option" onSelect={handleSelect(name, "Ethereum")}>
            <CoinOptionBox disabled={getCanSelectCoin("Ethereum")}>
              <div>
                <img src={coins.Ethereum.icon} alt="" />
              </div>
              <Text element="p" font={"Caption-1"} color={color.Light.Shade[900]}>
                Ethereum
              </Text>
            </CoinOptionBox>
          </Dropdown.Item>
          <Dropdown.Item className="coin__option" onSelect={handleSelect(name, "BnB")}>
            <CoinOptionBox disabled={getCanSelectCoin("BnB")}>
              <div>
                <img src={coins.BnB.icon} alt="" />
              </div>
              <Text element="p" font={"Caption-1"} color={color.Light.Shade[900]}>
                BnB
              </Text>
            </CoinOptionBox>
          </Dropdown.Item>
        </Dropdown.List>
      </Dropdown>
    </Wrapper>
  );
};

export default ExchangeInput;
