import React from 'react'
import { render, screen } from '@testing-library/react';
import { ModalProduct } from "../../../src/components/modalProduct/modalProduct";

describe('Prueba en componente ModalProduct', () => {
  test('Prueba match snaptshot', () => {
    const { container } = render(<ModalProduct />);

    expect(container).toMatchSnapshot(); 
  });

  test('Prueba modal contiene classname "div-cotainer"', () => {
    const isOpen = true;

    render(<ModalProduct isOpen={isOpen}/>);

    expect( screen.getByTestId('modal-test-id').className ).toContain('div-cotainer'); 
  });

  test('Prueba modal no contiene classname "div-cotainer"', () => {
    const isOpen = false;

    render(<ModalProduct isOpen={isOpen}/>);

    expect( screen.getByTestId('modal-test-id').className ).not.toContain('div-cotainer'); 
  });

  test('Prueba modal muestra elemento children', () => {
    const children = 'ModalTest';

    render(<ModalProduct children={children}/>);
    
    expect( screen.getByText('ModalTest') ).toBeTruthy();
  });
})