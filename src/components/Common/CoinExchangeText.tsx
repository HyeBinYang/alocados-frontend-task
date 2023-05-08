import React, { FC } from "react";
import coins from "../../const/coin";
import styled from "styled-components";
import color from "../../const/color";
import Text from "./Text";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;

const CoinExchangeTextImageBox = styled.div`
  img {
    width: 24px;
    height: 24px;
  }
`;

interface CoinExchangeTextProps {
  coin: keyof typeof coins;
  value: string;
}

const CoinExchangeText: FC<CoinExchangeTextProps> = ({ coin, value }) => {
  return (
    <Wrapper>
      <CoinExchangeTextImageBox>
        <img src={coins[coin]["icon"]} alt="" />
      </CoinExchangeTextImageBox>
      <Text element="p" font="Body2Bold" color={color.Light.Shade[700]}>
        {value} {coins[coin]["unit"]}
      </Text>
    </Wrapper>
  );
};

export default CoinExchangeText;
