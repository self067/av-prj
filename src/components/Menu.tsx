import React, { FC } from 'react';
import styled from 'styled-components';
import dbmenu from './DBMenu';
import ListItem from './ListItem';
import { Banner } from './Banner';
import { tItem, tImg, tItemList, tFuncSetOpenItem, fModalItem, fOpenItem } from '../type';

const MenuStyled = styled.menu`
  background-color: #ccc;
  margin-top: 80px;
`;

const SectionMenu = styled.section`
  padding: 30px;
  
`;

const Menu:FC<tFuncSetOpenItem> = ({ setOpenItem }) => (
  <MenuStyled>
    <Banner />
    <SectionMenu>
      <h2>Бургеры</h2>
      <ListItem 
        itemList={dbmenu.burger}
        setOpenItem={setOpenItem}
         />
    </SectionMenu>
    <SectionMenu>
      <h2>Закуски и напитки</h2>
      <ListItem itemList={dbmenu.other}
              setOpenItem={setOpenItem}
/>
    </SectionMenu>
  </MenuStyled>
);

export default Menu;
