import React, { FC } from 'react';
import styled from 'styled-components';
import { tItem, tImg, tItemList, tFuncSetOpenItem, fModalItem, fOpenItem } from '../type';

const Overlay = styled.div`
display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%
  background-color: rgba( 0, 0, 0, 0.5);
  z-index: 20;

`;

const Banner = styled.div<tItem>`
width: 100%;
  height: 200px;
  background-color: black;
  background-image: ${({ img }) => `url(${img})`};
  /* background-image: url(${({img})=>img}); */
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
`;
const Modal = styled.div`
  background-color: #fff;
  width: 600px;
  height: 600px;
`;

const ModalItem:React.FC<fOpenItem> = ({openItem, setOpenItem}) => {
  function closeModal(e) {
    if (e.target.id === 'overlay') {
      setOpenItem(null);
    }
  }
  if( !openItem) return null;
  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img}>
        {openItem.name}
        {openItem.price.toLocaleString('ru-RU',
            { style: 'currency', currency: 'RUB' })}

        </Banner>
      </Modal>
    </Overlay>
  );
};

export default ModalItem;
