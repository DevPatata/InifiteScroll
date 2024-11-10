import React from 'react'
import { render, screen } from '@testing-library/react';
import { CardItems } from '../../../src/components/cardItem/cardItem';


describe('Prueba en componente CardItem', () => {

  test('Prueba match snaptshot', () => {
    const { container } = render(<CardItems />);

    expect(container).toMatchSnapshot();  
  })

  test('Prueba debe de contener un texto "TestCardItem"', () => {
    const children = 'TestCardItem';

    render( <CardItems children={children}/>);
    
    expect( screen.getByText('TestCardItem') ).toBeTruthy();
  })
})