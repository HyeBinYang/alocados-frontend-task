import React, { useMemo } from "react";
import Swap from "../Common/Icon/Swap";
import styled from "styled-components";
import HistoryItem from "../History/HistoryItem";
import color from "../../const/color";
import ExchangeInput from "./ExchangeInput";
import { useAppSelector } from "../../hooks/useAppSelector";
import useAppDispatch from "../../hooks/useAppDispatch";
import { addHistory, setIsFinish } from "../../store/exchange";
import { exchangeCoin } from "../../store/coin";
import typography from "../../const/typography";

const Wrapper = styled.div`
  flex: 1;
`;

const ExchangeGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 30px;

  & > div {
    width: 100%;
  }
`;

const ExchangeButton = styled.button`
  width: 100%;
  height: 56px;
  padding: 10px 16px;
  margin-top: 48px;
  margin-bottom: 36px;
  background-color: ${color.Light.Primary[100]};
  border: none;
  border-radius: 12px;
  color: ${color.White};
  cursor: pointer;

  ${typography.ButtonBase};

  &:disabled {
    background-color: ${color.Light.Shade[200]};
    color: ${color.Light.Shade[400]};
  }
`;

const ExchangeForm = () => {
  const exchangeInput = useAppSelector((state) => state.exchange.input);
  const history = useAppSelector((state) => state.exchange.history);
  const dispatch = useAppDispatch();

  const isDisabled = useMemo(() => {
    return !exchangeInput.from.value || !exchangeInput.to.value;
  }, [exchangeInput]);

  const handleExchangeClick = () => {
    dispatch(
      addHistory({
        date: Date.now(),
        ...exchangeInput,
      })
    );
    dispatch(
      exchangeCoin({
        from: exchangeInput.from.name,
        to: exchangeInput.to.name,
        value: Number(exchangeInput.from.value),
      })
    );
    dispatch(setIsFinish(true));
  };

  return (
    <Wrapper>
      <ExchangeGroup>
        <ExchangeInput innerLabel="전환 수량 (FROM)" name="from" />
        <Swap />
        <ExchangeInput innerLabel="전환 수량 (TO)" name="to" />
      </ExchangeGroup>
      <ExchangeButton onClick={handleExchangeClick} disabled={isDisabled}>
        환전
      </ExchangeButton>
      {history.length > 0 && <HistoryItem {...history[0]} />}
    </Wrapper>
  );
};

export default ExchangeForm;
