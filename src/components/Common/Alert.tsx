import React, { FC, useMemo } from "react";
import styled, { css } from "styled-components";
import Text from "./Text";
import Info from "./Icon/Info";
import color from "../../const/color";
import Close from "./Icon/Close";

type AlertType = "alert";

const Wrapper = styled.div<{ type: AlertType }>`
  padding: 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ type }) => {
    switch (type) {
      case "alert":
        return css`
          background-color: ${color.Light.Info[24]};
        `;
    }
  }};
`;

const AlertContentBox = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;

const AlertCloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

interface AlertProps {
  type: AlertType;
  content: string;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
}

const Alert: FC<AlertProps> = ({ type, content, onClose }) => {
  const alertIcon = useMemo(() => {
    switch (type) {
      case "alert":
        return <Info />;
    }
  }, [type]);

  return (
    <Wrapper type={type}>
      <AlertContentBox>
        <div>{alertIcon}</div>
        <Text element="p" font="Caption-2" color={color.Light.Info.Font}>
          {content}
        </Text>
      </AlertContentBox>
      <AlertCloseButton onClick={onClose}>
        <Close />
      </AlertCloseButton>
    </Wrapper>
  );
};

export default Alert;
