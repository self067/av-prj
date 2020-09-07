import React, { FC } from 'react';
import styled from 'styled-components';
// import { tItem, tImg, tItemList, tFuncSetOpenItem, fModalItem, fOpenItem } from '../type';
import ButtonCheckout from '../Styles/ButtonCheckout';
import CountItem from './CountItem';
import useCount from '../Hooks/useCount';
import { currencyFormat, totalPriceItems } from '../Functions/functions';
import Toppings from './Toppings';
import Choices from './Choices';
import useToppings from '../Hooks/useToppings';
import useChoices from '../Hooks/useChoices';

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba( 0, 0, 0, 0.5);
  z-index: 20;
`;


const Modal = styled.div`
  background-color: #fff;
  width: 600px;
  height: 600px;
`;

// const Banner = styled.div<tImg>`
const Banner = styled.div`
  width: 100%;
  height: 200px;
  /* background-color: black; */
  /* background-image: ${({ img }) => `url(${img})`}; */
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
  
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 200px);
  padding: 30px;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  font-weight: 700;
  font-family: 'Pacifico', cursive;
`;

const TotalPriceItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

// const ModalItem:React.FC<fOpenItem> = ({openItem, setOpenItem}) => {
const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {
  const counter = useCount(openItem.count);
  const toppings = useToppings(openItem);
  const choices = useChoices(openItem);
  const isEdit = openItem.index > -1;

  const closeModal = (e) => {
    // function closeModal(e:React.MouseEvent) {
    // console.log(e.target);
    if (e.target.id === 'overlay') {
      setOpenItem(null);
    }
  }

  const order = {
    ...openItem,
    count: counter.count,
    topping: toppings.toppings,
    choice: choices.choice,
  };

  const editOrder = () => {
    const newOrders = [...orders];
    newOrders[openItem.index] = order;
    setOrders(newOrders);
    setOpenItem(null);
  }

  const addToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  };

  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal className="modal">
        <Banner className="banner" img={openItem.img}/>
        <Content>
          <HeaderContent>
            <div>
              {openItem.name}
            </div>
            <div>
              {currencyFormat(openItem.price)}

            </div>
          </HeaderContent>
          <CountItem {...counter} />
          {openItem.toppings && <Toppings {...toppings} />}
          {openItem.choices && <Choices {...choices} openItem={openItem} />}
          <TotalPriceItem>
            <span>Цена</span>
            <span>
              {currencyFormat(totalPriceItems(order))}
            </span>
          </TotalPriceItem>
          {console.log(order)}
          <ButtonCheckout
            onClick={isEdit ? editOrder : addToOrder}
            disabled={ order.choices && !order.choice}
          >{isEdit ? 'Изменить' : 'Добавить'}
          </ButtonCheckout>

        </Content>

      </Modal>
    </Overlay>
  );
};

export default ModalItem;
