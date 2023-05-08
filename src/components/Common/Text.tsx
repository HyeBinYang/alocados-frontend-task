import React, { FC } from "react";
import styled from "styled-components";
import typography from "../../const/typography";

interface TextStyledProps {
  color: string;
  font: keyof typeof typography;
}

const Wrapper = styled.p<TextStyledProps>`
  ${({ font }) => typography[font]};
  color: ${({ color }) => color};
`;

type TextElement = "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label";

interface TextProps {
  children: React.ReactNode;
  element: TextElement;
  color: string;
  font: keyof typeof typography;
}

const Text: FC<TextProps> = ({ element, children, color, font }) => {
  return (
    <Wrapper as={element} color={color} font={font}>
      {children}
    </Wrapper>
  );
};

export default Text;
