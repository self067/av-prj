import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import Navbar from './components/Navbar/Navbar';
import Menu from './components/Menu/Menu';
import GlobalStyle from './components/Styles/GlobalStyle';
import ModalItem from './components/Modal/ModalItem';
// import { tItem } from './type';
import Order from './components/Orders/Order';
import useOpenItem from './components/Hooks/useOpenItem';
import useOrders from './components/Hooks/useOrders';
import useAuth from './components/Hooks/useAuth';
import { useTitle } from './components/Hooks/useTitle';
import useDB from './components/Hooks/useDB';
import OrderConfirm from './components/Orders/OrderConfirm';
import useOrderConfirm from './components/Hooks/useOrderConfirm';
import Context from './components/Functions/context';

const firebaseConfig = {
  apiKey: 'AIzaSyABY5p1uUpG5QlwWEOCYFSv2YZuPS_IbLw',
  authDomain: 'mrdonalds-713c7.firebaseapp.com',
  databaseURL: 'https://mrdonalds-713c7.firebaseio.com',
  projectId: 'mrdonalds-713c7',
  storageBucket: 'mrdonalds-713c7.appspot.com',
  messagingSenderId: '224814647340',
  appId: '1:224814647340:web:d612a6fa4c5063eff4a989',
};

firebase.initializeApp(firebaseConfig);

function App() {
  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();
  const orderConfirm = useOrderConfirm();
  const database = firebase.database();
  useTitle(openItem.openItem);
  const dbMenu = useDB(database);

  return (
    <Context.Provider value={{
      auth,
      openItem,
      orders,
      orderConfirm,
      firebaseDatabase: database,
    }}
    >
      <GlobalStyle />
      <Navbar />
      <Order />
      <Menu dbMenu={dbMenu} />
      { openItem.openItem && <ModalItem /> }
      {orderConfirm.openOrderConfirm
        && (
        <OrderConfirm
          // {...orders}
          // {...auth}
          // {...orderConfirm}
          // database={database}
        />
        )}
    </Context.Provider>
  );
}

export default App;
