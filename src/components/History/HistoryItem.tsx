import React, { FC } from "react";
import ChevonRight from "../Common/Icon/ChevonRight";
import CoinExchangeText from "../Common/CoinExchangeText";
import styled from "styled-components";
import color from "../../const/color";
import { ExchangeInfo } from "../../store/exchange";
import { format } from "date-fns";

const Wrapper = styled.div`
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${color.Light.Shade[100]};
  border-radius: 12px;
`;

const HistoryContent = styled.div`
  display: flex;
  align-items: center;
  column-gap: 40px;
`;

const HistoryItem: FC<ExchangeInfo> = ({ ...exchange }) => {
  return (
    <Wrapper>
      <p>{format(exchange.date as number, "yyyy-MM-dd, a hh:mm")}</p>
      <HistoryContent>
        <CoinExchangeText coin={exchange.from.name} value={String(exchange.from.value)} />
        <div>
          <ChevonRight />
        </div>
        <CoinExchangeText coin={exchange.to.name} value={String(exchange.to.value)} />
      </HistoryContent>
    </Wrapper>
  );
};

export default HistoryItem;
