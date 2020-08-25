import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.svg';
import sign from '../images/sign.svg';

const NavbarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #299B01;
  color: white;
  
`;

const Logo = styled.div`
  display: flex;
`;

const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
 `;

const ImgLogo = styled.img`
  width: 50px;
`;

const Login = styled.button`
  background-color: transparent;
  color: white; 

  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  font-size: 18px;
  
`;

const Sign = styled.img`
  margin-bottom: 5px;
`;

const Navbar = () => (
  <NavbarStyled>
    <Logo>
      <ImgLogo src={logo} alt="logo" />
      <H1>MrDonald</H1>
    </Logo>
    <Login>

      <Sign src={sign} />
      Войти
    </Login>
  </NavbarStyled>
);

export default Navbar;
