import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Menu from './components/Menu/Menu';
import GlobalStyle from './components/Styles/GlobalStyle';
import ModalItem from './components/Modal/ModalItem';
// import { tItem } from './type';
import Order from './components/Orders/Order';
import useOpenItem from './components/Hooks/useOpenItem';
import useOrders from './components/Hooks/useOrders';

function App() {
  const openItem = useOpenItem();
  const orders = useOrders();

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Order {...orders} />
      <Menu {...openItem} />
      { openItem.openItem && <ModalItem {...openItem} {...orders} /> }
    </>
  );
}

export default App;
