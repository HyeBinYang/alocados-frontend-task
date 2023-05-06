import React from "react";
import styled from "styled-components";
import color from "../../const/color";
import ExchangeCoinItem from "./ExchangeCoinItem";

const Wrapper = styled.aside`
  width: 280px;
  padding: 24px;
  background-color: ${color.Light.Shade[0]};
`;

const SummaryTitle = styled.h3`
  color: ${color.Light.Shade[700]};
  font-size: 20px;
  font-weight: 600;
  line-height: 27px;
`;

const ExchangeCoinList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  padding: 8px 0;
`;

const ExchangeSummary = () => {
  return (
    <Wrapper>
      <SummaryTitle>요약</SummaryTitle>
      <hr />
      <ExchangeCoinList>
        <ExchangeCoinItem coin="Solana" />
        <ExchangeCoinItem coin="Ethereum" />
        <ExchangeCoinItem coin="BnB" />
      </ExchangeCoinList>
    </Wrapper>
  );
};

export default ExchangeSummary;
