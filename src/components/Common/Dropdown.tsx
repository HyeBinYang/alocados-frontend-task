import React, { createContext, ReactNode, useContext, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;

  .dropdown__list {
    position: absolute;
    z-index: 100;
  }
`;

interface DropdownProps {
  children: ReactNode;
  className?: string;
  onSelect?: (...args: any) => any;
}

interface DropdownState {
  open: boolean;
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropdownContext = createContext<DropdownState | undefined>(undefined);

const Dropdown = ({ children }: DropdownProps) => {
  const [open, toggle] = useState(false);

  return (
    <DropdownContext.Provider value={{ open, toggle }}>
      <Wrapper>{children}</Wrapper>
    </DropdownContext.Provider>
  );
};

const Trigger: React.FC<DropdownProps> = ({ children }) => {
  const dropdownContext = useContext(DropdownContext);
  if (!dropdownContext) return null;

  const { open, toggle } = dropdownContext;

  return (
    <div
      style={{ height: "100%" }}
      onClick={() => {
        toggle(!open);
      }}
    >
      {children}
    </div>
  );
};

const List: React.FC<DropdownProps> = ({ children, className }) => {
  const dropdownContext = useContext(DropdownContext);
  if (!dropdownContext) return null;

  return dropdownContext.open ? <ul className={`dropdown__list ${className}`}>{children}</ul> : null;
};

const Item: React.FC<DropdownProps> = ({ children, className, onSelect = () => {} }) => {
  const dropdownContext = useContext(DropdownContext);
  if (!dropdownContext) return null;

  const { toggle } = dropdownContext;

  return (
    <li
      className={`${className}`}
      onClick={() => {
        toggle(false);
        onSelect();
      }}
    >
      {children}
    </li>
  );
};

Dropdown.Trigger = Trigger;
Dropdown.List = List;
Dropdown.Item = Item;

export default Dropdown;
