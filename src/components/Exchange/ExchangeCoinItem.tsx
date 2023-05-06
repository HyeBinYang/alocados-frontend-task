import React from "react";
import coins from "../../const/coin";
import styled from "styled-components";
import color from "../../const/color";
import { useAppSelector } from "../../hooks/useAppSelector";
import { Coin } from "../../store/coin";

const Wrapper = styled.li``;

const CoinInfoGroup = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;
`;

const CoinImageBox = styled.div`
  width: 36px;
  height: 36px;
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

const CoinText = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  color: ${color.Light.Shade[700]};
`;

const BalanceText = styled.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 32px;
  margin-top: 8px;
`;

interface ExchangeCoinItemProps {
  coin: keyof typeof coins;
}

const ExchangeCoinItem: React.FC<ExchangeCoinItemProps> = ({ coin }) => {
  const balance = useAppSelector((state) => state.coin.balance);

  return (
    <Wrapper>
      <CoinInfoGroup>
        <CoinImageBox>
          <img src={coins[coin]["icon"]} alt="" />
        </CoinImageBox>
        <CoinText>{coin}</CoinText>
      </CoinInfoGroup>
      <BalanceText>
        {balance[coin.toLocaleLowerCase() as Coin]} {coins[coin]["unit"]}
      </BalanceText>
    </Wrapper>
  );
};

export default ExchangeCoinItem;
