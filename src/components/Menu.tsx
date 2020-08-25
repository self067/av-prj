import React from 'react';
import styled from 'styled-components';
import dbmenu from './DBMenu';
import ListItem from './ListItem';
import banner from '../images/banner.png';


const MenuStyled = styled.menu`
  background-color: #ccc;
  margin-top: 80px;
`;

const SectionMenu = styled.section`
  padding: 30px;
  
`;

const Banner = styled.div`
  position: relative;
  
  background-image: url(${banner});
  background-position: center;
  background-size: cover;
  height: 400px;
  width: auto;
  
  
`;

const Menu = () => (
  <MenuStyled>
    <Banner />
    <SectionMenu>
      <h2>Бургеры</h2>
      <ListItem itemList={dbmenu.burger} />
    </SectionMenu>
    <SectionMenu>
      <h2>Закуски и напитки</h2>
      <ListItem itemList={dbmenu.other} />
    </SectionMenu>
  </MenuStyled>
);

export default Menu;
