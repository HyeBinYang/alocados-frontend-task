import React from "react";
import styled from "styled-components";
import ExchangeSummary from "../../components/Exchange/ExchangeSummary";
import ExchangeForm from "../../components/Exchange/ExchangeForm";

const Wrapper = styled.main`
  max-width: 1000px;
  margin: 120px auto 0;
`;

const PageTitle = styled.h1`
  font-size: 22px;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 24px;
`;

const PageBody = styled.section`
  display: flex;
  column-gap: 16px;
`;

const ExchangePage = () => {
  return (
    <Wrapper>
      <PageTitle>환전하기</PageTitle>
      <PageBody>
        <ExchangeSummary />
        <ExchangeForm />
      </PageBody>
    </Wrapper>
  );
};

export default ExchangePage;
