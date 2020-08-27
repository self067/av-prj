import React, { FC } from 'react';
import styled from 'styled-components';
// import { tItem, tImg, tItemList, tFuncSetOpenItem, fModalItem, fOpenItem } from '../type';

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
  display: flex;
  flex-direction: column;
`;

// const Banner = styled.div<tImg>`
const Banner = styled.div`
  width: 100%;
  height: 200px;
  background-color: black;
  /* background-image: ${({ img }) => `url(${img})`}; */
  background-image: url(${({img}) => img});
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
`;

// const ModalItem:React.FC<fOpenItem> = ({openItem, setOpenItem}) => {
const ModalItem = ({openItem, setOpenItem}) => {
  console.log(openItem);

  function closeModal(e) {
    // function closeModal(e:React.MouseEvent) {
    console.log(e.target);

    if (e.target.id === 'overlay') {
      setOpenItem(null);
    }
  }

  if ( !openItem) return null;

  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal className="modal">
        <Banner className="banner" img={openItem.img}/>
        {openItem.name}

        {openItem.price.toLocaleString('ru-RU',{ style: 'currency', currency: 'RUB' })}

      </Modal>
    </Overlay>
  );
};

export default ModalItem;
