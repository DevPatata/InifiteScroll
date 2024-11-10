import React from 'react'
import './modalProduct.css'

export const ModalProduct = ({ children, isOpen = false, closeModal = () => { } }) => {
  return (
    <article data-testid='modal-test-id' className={`modal-close ${isOpen && 'div-cotainer'}`} >
      <div className='background' onClick={closeModal}></div>
      <div className='modal-position modal-container'>
        <span className='span-close' onClick={closeModal}>
          <i className="fa fa-times" aria-hidden="true" ></i>
        </span>
        {children}
      </div>
    </article>
  )
}
