import React from 'react';
import styled from 'styled-components';
import trashImg from '../../images/trash.svg';
import { currencyFormat, totalPriceItems } from '../Functions/functions';

const OrderItemStyled = styled.li`
  display: flex;
  margin: 15px 0;
`;

const ItemName = styled.span`
  flex-grow: 1;

`;

const ItemPrice = styled.span`
  margin-left: 20px;
  margin-right: 10px;
  min-width: 65px;
  text-align: right;
`;

const TrashButton = styled.button`
  width: 24px;
  height: 24px;
  border-color: transparent;
  background-color: transparent;
  background-image: url(${trashImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const OrderListItem = ({order}) => (
  <OrderItemStyled>
    <ItemName>{order.name}</ItemName>
    <span>{order.count}</span>
    <ItemPrice>{currencyFormat(totalPriceItems(order))}</ItemPrice>
    <TrashButton />
  </OrderItemStyled>
);

export default OrderListItem;
