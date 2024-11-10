import React, { useState } from 'react'
import { CardItems, ModalProduct, ButtonItem } from '../index'
import { useModal } from '../../hooks'
import './listOfItems.css'

export function ListOfItems({ products }) {
  const { openModal, colseModal, isOpen } = useModal();
  const [activeObject, setActiveObject] = useState({ title: '', detail: { info: '' } });

  const buttonAction = (element) => {
    setActiveObject(element);
    openModal();
  }

  return (
    <>
      <div className='list'>
        {
          products.map((item, i) =>
            <CardItems key={i} >
              <img src={item.img} loading="lazy" alt={`img-${item.title}`} width={'100%'} />
              <div className="description">
                <h2>{item.title}</h2>
                <h4>{item.description}</h4>
                <h2>$ {item.detail.price}</h2>
                <ButtonItem buttonValue={'Ver detalles'} action={() => buttonAction(item)} />
              </div>
            </CardItems>
          )
        }
      </div>
      <ModalProduct isOpen={isOpen} closeModal={colseModal}>
        <h1>{activeObject.title}</h1>
        <h4>{activeObject.detail.info}</h4>
        <h6 className='modal-address'>Address: {activeObject.detail.address}</h6>
      </ModalProduct>
    </>
  )
}