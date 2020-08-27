import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import GlobalStyle from './components/GlobalStyle';
import ModalItem from './components/ModalItem';
import { tItem } from './type';


function App() {
  const [openItem, setOpenItem] = useState< tItem | null>(null);

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Menu setOpenItem={setOpenItem} />
      <ModalItem openItem={openItem} setOpenItem={setOpenItem} />
    </>
  );
}

export default App;
