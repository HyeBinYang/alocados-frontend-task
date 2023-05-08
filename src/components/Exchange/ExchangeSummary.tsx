import React from "react";
import styled from "styled-components";
import color from "../../const/color";
import ExchangeCoinItem from "./ExchangeCoinItem";
import Text from "../Common/Text";

const Wrapper = styled.aside`
  width: 280px;
  padding: 24px;
  background-color: ${color.Light.Shade[0]};

  hr {
    margin: 10px 0;
    border-top: none;
    border-bottom: 1px solid ${color.Light.Shade[300]};
  }
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
      <Text element="h3" font="Strong" color={color.Light.Shade[700]}>
        요약
      </Text>
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
