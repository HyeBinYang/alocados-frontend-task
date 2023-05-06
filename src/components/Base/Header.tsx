import React, { useCallback } from "react";
import styled from "styled-components";
import Logo from "../Common/Icon/Logo";
import { Link, useLocation } from "react-router-dom";
import color from "../../const/color";

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const LinkGroup = styled.ul`
  display: flex;
  column-gap: 40px;
`;

const LinkItem = styled.li<{ active?: boolean }>`
  padding: 10px 16px;
  background-color: ${({ active }) => (active ? color.Light.Primary[24] : "#fff")};
  border-radius: 12px;

  a {
    text-decoration: none;
    color: ${({ active }) => (active ? color.Light.Primary.Font : color.Light.Shade[700])};
    font-size: 15px;
    font-weight: 600;
    line-height: 36px;
  }
`;

const Header = () => {
  const location = useLocation();

  const getIsLinkedPage = useCallback(
    (path: string) => {
      return path === location.pathname;
    },
    [location]
  );

  return (
    <Wrapper>
      <Logo />
      <LinkGroup>
        <LinkItem active={getIsLinkedPage("/exchange")}>
          <Link to={"/exchange"}>환전하기</Link>
        </LinkItem>
        <LinkItem active={getIsLinkedPage("/history")}>
          <Link to={"/history"}>거래내역</Link>
        </LinkItem>
      </LinkGroup>
    </Wrapper>
  );
};

export default Header;