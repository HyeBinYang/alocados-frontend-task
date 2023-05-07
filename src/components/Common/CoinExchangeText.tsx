import React, { FC } from "react";
import coins from "../../const/coin";
import styled from "styled-components";
import color from "../../const/color";

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

const CoinExchangeTextContent = styled.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 32px;
  color: ${color.Light.Shade[700]};
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
      <CoinExchangeTextContent>
        {value} {coins[coin]["unit"]}
      </CoinExchangeTextContent>
    </Wrapper>
  );
};

export default CoinExchangeText;
