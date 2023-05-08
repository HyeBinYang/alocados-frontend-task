import React, { FC, InputHTMLAttributes } from "react";
import styled from "styled-components";
import color from "../../const/color";
import Text from "./Text";
import typography from "../../const/typography";

const Wrapper = styled.div<{ error?: boolean }>`
  padding: 10px 16px;
  display: flex;
  flex-direction: column;
  background-color: ${color.Light.Shade[0]};
  border: ${({ error }) => (error ? `1.2px solid ${color.Light.Error[100]}` : "none")};
  border-radius: 12px;
`;

const InputText = styled.input`
  height: 16px;
  padding: 4px 0;
  background-color: transparent;
  border: none;
  outline: none;
  ${typography.Body2Bold};
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  innerLabel?: string;
  error?: boolean;
}

const Input: FC<InputProps> = ({ innerLabel, error, ...inputAttrs }) => {
  return (
    <Wrapper error={error}>
      {innerLabel && (
        <Text element="label" font="MobileOverline" color={color.Light.Shade[600]}>
          {innerLabel}
        </Text>
      )}
      <InputText type="text" {...inputAttrs} />
    </Wrapper>
  );
};

export default Input;
