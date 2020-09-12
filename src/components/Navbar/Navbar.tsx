import React, { useContext } from 'react';
import styled from 'styled-components';
import logo from '../../images/logo.svg';
import sign from '../../images/sign.svg';
import Context from '../Functions/context';

const NavbarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100%;
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

const User = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

const LogOut = styled.span`
  margin-right: 30px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
`;

const Figure = styled.figure`
  margin: 0 30px;
`;

const Navbar:React.FC<any> = () => {
  const { auth: { authentication, logIn, logOut } } = useContext(Context);
  
  return (
  <NavbarStyled>
    <Logo>
      <ImgLogo src={logo} alt="logo" />
      <H1>MrDonald</H1>
    </Logo>
    {authentication
      ? (
        <User>
          <Figure>
            <Sign src={sign} alt={authentication.displayName}/>
            <figcaption>{authentication.displayName}</figcaption>
          </Figure>
          <LogOut title="Выйти" onClick={logOut}>Х</LogOut>
        </User>
      )
      : (
        <Login onClick={logIn}>
          <Sign src={sign} />
          Войти
        </Login>
      )

    }
  </NavbarStyled>
)};

export default Navbar;
