import React from "react";
import coins from "../../const/coin";
import styled from "styled-components";
import color from "../../const/color";
import { useAppSelector } from "../../hooks/useAppSelector";
import { Coin } from "../../store/coin";
import Text from "../Common/Text";
import { getDecimal } from "../../utils/coin";

const Wrapper = styled.li``;

const CoinInfoGroup = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;
`;

const CoinImageBox = styled.div`
  width: 36px;
  height: 36px;
  margin-right: 4px;
  background-color: ${color.Light.Shade.Opacity[5]};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  img {
    width: 20px;
    height: 20px;
  }
`;

interface ExchangeCoinItemProps {
  coin: Coin;
}

const ExchangeCoinItem: React.FC<ExchangeCoinItemProps> = ({ coin }) => {
  const balance = useAppSelector((state) => state.coin.balance);

  return (
    <Wrapper>
      <CoinInfoGroup>
        <CoinImageBox>
          <img src={coins[coin]["icon"]} alt="" />
        </CoinImageBox>
        <Text element="p" font="Body2" color={color.Light.Shade[700]}>
          {coin}
        </Text>
      </CoinInfoGroup>
      <Text element="p" font="Body2Bold" color={color.Light.Shade[900]}>
        {Number.isInteger(balance[coin]) ? balance[coin].toLocaleString() : getDecimal(balance[coin]).toLocaleString()}{" "}
        {coins[coin]["unit"]}
      </Text>
    </Wrapper>
  );
};

export default ExchangeCoinItem;
