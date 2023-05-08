import React from "react";
import styled from "styled-components";
import ExchangeSummary from "../../components/Exchange/ExchangeSummary";
import ExchangeForm from "../../components/Exchange/ExchangeForm";
import Alert from "../../components/Common/Alert";
import { useAppSelector } from "../../hooks/useAppSelector";
import useAppDispatch from "../../hooks/useAppDispatch";
import { setIsFinish } from "../../store/exchange";
import typography from "../../const/typography";

const Wrapper = styled.main`
  max-width: 1000px;
  margin: 120px auto 0;
`;

const PageTitle = styled.h1`
  ${typography["Title 1"]};
  margin-bottom: 24px;
`;

const PageBody = styled.section`
  display: flex;
  column-gap: 16px;
  margin-top: 14px;
`;

const ExchangePage = () => {
  const isFinish = useAppSelector((state) => state.exchange.isFinish);
  const dispatch = useAppDispatch();

  const handleCloseAlertClick = () => {
    dispatch(setIsFinish(false));
  };

  return (
    <Wrapper>
      <PageTitle>환전하기</PageTitle>
      {isFinish && <Alert type="alert" content="최근 거래 후 갱신되었습니다." onClose={handleCloseAlertClick} />}
      <PageBody>
        <ExchangeSummary />
        <ExchangeForm />
      </PageBody>
    </Wrapper>
  );
};

export default ExchangePage;
