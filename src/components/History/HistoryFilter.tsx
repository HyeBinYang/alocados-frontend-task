import React from "react";
import styled from "styled-components";
import Text from "../Common/Text";
import color from "../../const/color";
import ArrowDown from "../Common/Icon/ArrowDown";
import useAppDispatch from "../../hooks/useAppDispatch";
import { reverseHistory } from "../../store/exchange";

const Wrapper = styled.div`
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  margin-top: 24px;
  margin-bottom: 8px;
  background-color: ${color.Light.Shade[100]};
  border-radius: 12px;
`;

const SortButtonGroup = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const HistoryFilter = () => {
  const dispatch = useAppDispatch();

  const handleReverseClick = () => {
    dispatch(reverseHistory());
  };

  return (
    <Wrapper>
      <SortButtonGroup onClick={handleReverseClick}>
        <Text element="p" font="Poppins" color={color.Light.Shade[900]}>
          환전 시간
        </Text>
        <ArrowDown />
      </SortButtonGroup>
      <Text element="p" font="Caption-1" color={color.Light.Shade[900]}>
        환전금액
      </Text>
    </Wrapper>
  );
};

export default HistoryFilter;
