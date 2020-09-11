import React from 'react';
import styled from 'styled-components';
import ButtonCheckout from '../Styles/ButtonCheckout';
import OrderListItem from './OrderListItem';
import { currencyFormat, totalPriceItems, projection } from '../Functions/functions';

const OrderStyled = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 80px;
  left: 0;
  background: #fff;
  width: 380px;
  height: calc(100% - 80px);
  box-shadow: 3px 4px 5px rgba( 0, 0, 0, 0.25);
  padding: 20px;
`;

const OrderTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;

const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul`

`;

const Total = styled.div`
  display: flex;
  margin: 0 35px 30px;
  & span:first-child {
    flex-grow: 1;
  }
`;

const TotalPrice = styled.span`
  text-align: right;
  min-width: 65px;
  margin-left: 20px;
`;

const EmptyList = styled.p`
  text-align: center;
`;

const rulesData = {
  name: ['name'],
  price: ['price'],
  count: ['count'],
  topping: ['topping', arr => arr.filter( obj => obj.checked).map( obj => obj.name),
    arr => arr.length ? arr : 'no topping'],
  choice: ['choice', item => item ? item : 'no choices'],
};

const Order = ({ orders, setOrders, setOpenItem, authentication, logIn, database }) => {
  // const db = firebaseDB();
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

  const deleteItem = (index) => {
    // const newOrders = orders.filter((item,i)=> index !== i);;
    const newOrders = [...orders];
    newOrders.splice(index, 1);

    setOrders(newOrders);
  };

  const total = orders.reduce((result, order) => totalPriceItems(order) + result, 0);

  const totalCounter = orders.reduce((result, order) => order.count + result, 0);

  return (
    <>
      <OrderStyled>
        <OrderTitle>Ваш заказ</OrderTitle>
        <OrderContent>
          { orders.length
            ? (
              <OrderList>
                { orders.map((order, index) => (
                  <OrderListItem
                    key={index}
                    order={order}
                    deleteItem={deleteItem}
                    index={index}
                    setOpenItem={setOpenItem}
                  />
                ))}
              </OrderList>
            )
            : <EmptyList>Список заказав пуст</EmptyList>}
        </OrderContent>
        <Total>
          <span>Итого</span>
          <span>{totalCounter}</span>
          <TotalPrice>{currencyFormat(total)}</TotalPrice>

        </Total>
        <ButtonCheckout onClick={() => {
          if( authentication) {
            sendOrder( orders);
          } else {
            logIn();
          }
        }}>Оформить</ButtonCheckout>

      </OrderStyled>
    </>
  );
};

export default Order;
