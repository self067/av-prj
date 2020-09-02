import React, { FC } from 'react';
import styled from 'styled-components';
import dbmenu from '../DBMenu';
import ListItem from './ListItem';
// import { tFuncSetOpenItem, fModalItem, fOpenItem } from '../type';

const MenuStyled = styled.menu`
  background-color: #ccc;
  margin-top: 80px;
  margin-left: 380px;
`;

const SectionMenu = styled.section`
  padding: 30px;
`;

// const Menu:FC<tFuncSetOpenItem> = ({ setOpenItem }) => (
const Menu = ({ setOpenItem }) => (
  <MenuStyled>
    <SectionMenu>
      <h2>Бургеры</h2>
      <ListItem
        itemList={dbmenu.burger}
        setOpenItem={setOpenItem}
      />
    </SectionMenu>
    <SectionMenu>
      <h2>Закуски и напитки</h2>
      <ListItem
        itemList={dbmenu.other}
        setOpenItem={setOpenItem}
      />
    </SectionMenu>
  </MenuStyled>
);

export default Menu;