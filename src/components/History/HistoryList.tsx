import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../hooks/useAppSelector";
import HistoryItem from "./HistoryItem";

const Wrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const HistoryList = () => {
  const history = useAppSelector((state) => state.exchange.history);

  return (
    <Wrapper>
      {history.map((h) => (
        <HistoryItem key={h.date} {...h} />
      ))}
    </Wrapper>
  );
};

export default HistoryList;
