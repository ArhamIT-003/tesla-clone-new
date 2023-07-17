import React, { useState } from "react";
import { styled } from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  return (
    <Container>
      <a href="/qq">
        <img src="/images/logo.svg" alt="logo-tesla" />
      </a>

      <Menu>
        <a href="/qq">Model S</a>

        <a href="/qq">Model 3</a>

        <a href="/qq">Model X</a>

        <a href="/qq">Model Y</a>
      </Menu>

      <RightMenu>
        <a href="/qq">Shop</a>
        <a href="/qq">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerOpen(true)}>
          <MenuIcon />
        </CustomMenu>
      </RightMenu>

      <BurgerNav show={burgerOpen}>
        <CloseWrap>
          <CloseBtn onClick={() => setBurgerOpen(false)}></CloseBtn>
        </CloseWrap>

        <li>
          <a href="/qq">Existing Inventory</a>
        </li>
        <li>
          <a href="/qq">Used Inventory</a>
        </li>
        <li>
          <a href="/qq">Trade-In</a>
        </li>
        <li>
          <a href="/qq">Cybertruck</a>
        </li>
        <li>
          <a href="/qq">Roadaster</a>
        </li>
      </BurgerNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  a {
    font-weight: 600;
    padding: 0 10px;
    text-decoration: none;
    text-transform: uppercase;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: nowrap;
  }
`;

const CustomMenu = styled.div`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  background: white;
  top: 0;
  bottom: 0;
  right: 0;
  width: 300px;
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  text-align: start;

  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};

  transition: transform 0.2s ease-in-out;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  a {
    text-decoration: none;
    font-weight: 600;
  }
`;

const CloseBtn = styled(CloseIcon)`
  cursor: pointer;
  padding-top: 5px;
`;
const CloseWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
