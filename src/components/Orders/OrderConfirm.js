import React, { useContext } from 'react';
import styled from 'styled-components';
import { Overlay } from '../Modal/ModalItem';
import { OrderTitle, Total, TotalPrice } from './Order';
import ButtonCheckout from '../Styles/ButtonCheckout';
import { projection } from '../Functions/functions';
import { currencyFormat, totalPriceItems } from '../Functions/functions';
import Context from '../Functions/context';

const Modal = styled.div`
  background-color: white;
  width: 600px;
  padding: 30px;
`;

const Text = styled.h3`
  text-align: center;
  margin-botton: 30px;
`;
// const 

const rulesData = {
  name: ['name'],
  price: ['price'],
  count: ['count'],
  topping: ['topping', arr => arr.filter( obj => obj.checked).map( obj => obj.name),
    arr => arr.length ? arr : 'no topping'],
  choice: ['choice', item => item ? item : 'no choices'],
};

const sendOrder = (dataBase, orders, authentication) => {
  const newOrder = orders.map(projection(rulesData));
  console.log(newOrder);
  dataBase.ref('orders').push().set({
    clientName: authentication.displayName,
    email: authentication.email,
    order: newOrder,
  });
  // setOrders([]);
}
// const db = firebaseDB();

const OrderConfirm = () => {
  // const database = firebaseDatabase();
  const {
    orders: {orders, setOrders},
    auth: {authentication},
    orderConfirm: { setOpenOrderConfirm },
    firebaseDatabase
  } = useContext(Context);
  const total = orders.reduce((result, order) => totalPriceItems(order) + result, 0);
  // sendOrder( orders);
  return (
    <Overlay>
      <Modal>
        <OrderTitle>{authentication.displayName}</OrderTitle>
        <Text>Подтвердить заказ</Text>
        <Total>
          <span>Итого</span>
          <TotalPrice>{currencyFormat(total)}</TotalPrice>
        </Total>
        <ButtonCheckout
          onClick={() => {
            sendOrder( firebaseDatabase, orders, authentication);
            setOrders([]);
            setOpenOrderConfirm(false);
          }}>Подтвердить заказ</ButtonCheckout>
      </Modal>
    </Overlay>
  )
}

export default OrderConfirm;
