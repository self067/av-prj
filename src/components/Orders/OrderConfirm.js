import React, { FC } from 'react';
import styled from 'styled-components';
import { Overlay } from '../Modal/ModalItem';
import { OrderTitle, Total, TotalPrice } from './Order';
import ButtonCheckout from '../Styles/ButtonCheckout';
import { projection } from '../Functions/functions';
import { currencyFormat, totalPriceItems } from '../Functions/functions';

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

const sendOrder = () => {
  const newOrder = orders.map(projection(rulesData));
  console.log(newOrder);
  database.ref('orders').push().set({
    clientName: authentication.displayName,
    email: authentication.email,
    order: newOrder,
  });
  setOrders([]);
}
// const db = firebaseDB();

const OrderConfirm = ({
  orders, setOrders, authentication,
  setOpenOrderConfirm,
  firebaseDatabase
}) => {
  const database = firebaseDatabase();

  const total = orders.reduce((result, order) => 
    totalPriceItems(order) + result, 0);
  )
  // sendOrder( orders);
  return (
    <Overlay>
      <Modal>
        <OrderTitle>{authentication.displayName}</OrderTitle>
        <Text>Подтвердить заказ</Text>
        <Total>
          <span>Итого</span>
          <TotalPrice>{formatCurrency(total)}</TotalPrice>
        </Total>
      </Modal>
    </Overlay>
  )
}

export default OrderConfirm;
