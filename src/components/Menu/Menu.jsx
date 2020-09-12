import React, { useContext } from 'react';
import styled from 'styled-components';
import dbmenu from '../DBMenu';
import ListItem from './ListItem';
// import useFetch from '../Hooks/useFetch';
// import { tFuncSetOpenItem, fModalItem, fOpenItem } from '../type';
import Context from '../Functions/context';

const MenuStyled = styled.menu`
  background-color: #ccc;
  margin-top: 80px;
  margin-left: 380px;
`;

const SectionMenu = styled.section`
  padding: 30px;
`;

// const Menu:FC<tFuncSetOpenItem> = ({ setOpenItem }) => (
const Menu = ({ dbMenu }) => {
  const { openItem: { setOpenItem }} = useContext( Context);
  // const res = useFetch();
  // const dbMenu = res.response;
  return (
    <MenuStyled>
      {/* <Banner /> */}
      { dbMenu
        ? (
          <>
            <SectionMenu>
              <h2>Бургеры</h2>
              <ListItem
                itemList={dbmenu.burger}
                // setOpenItem={setOpenItem}
              />
            </SectionMenu>
            <SectionMenu>
              <h2>Закуски и напитки</h2>
              <ListItem
                itemList={dbmenu.other}
                // setOpenItem={setOpenItem}
              />
            </SectionMenu>
          </>
        )
        // : res.error
        //   ? <div>Loading Error...</div>
          : <div>Loading...</div>}
    </MenuStyled>
  );
};

export default Menu;
