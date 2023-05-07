import React from "react";
import Text from "../../components/Common/Text";
import color from "../../const/color";
import styled from "styled-components";
import HistoryList from "../../components/History/HistoryList";
import HistoryFilter from "../../components/History/HistoryFilter";

const Wrapper = styled.main`
  width: 900px;
  margin: 120px auto 0;
`;

const HistoryPage = () => {
  return (
    <Wrapper>
      <Text element="h1" font="Title 1" color={color.Light.Shade[900]}>
        환전 내역
      </Text>
      <HistoryFilter />
      <HistoryList />
    </Wrapper>
  );
};

export default HistoryPage;
