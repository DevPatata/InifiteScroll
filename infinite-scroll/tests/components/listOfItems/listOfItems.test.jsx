import React from 'react'
import { render, screen } from '@testing-library/react';
import { ListOfItems } from '../../../src/components';

describe('Prueba en componente ListOfItems', () => {
  test('Prueba match snaptshot', () => {
    const listItems = [];
    const { container } = render(<ListOfItems products={listItems} />);

    expect(container).toMatchSnapshot();
  });

  test('Prueba renderiza elementos pasados por parametro', () => {
    const listItems = [
      {
        img: 'urlImgTest',
        title: 'TitleTestDiferente',
        description: 'DescriptionTest',
        detail: { price: 0 }
      },
      {
        img: 'urlImgTest',
        title: 'TitleTest',
        description: 'DescriptionTest',
        detail: { price: 0 }
      }
    ];

    render(<ListOfItems products={listItems} />);

    expect(screen.getAllByRole('img').length).toBe(2);
    expect(screen.getByText('TitleTest')).toBeTruthy();
    expect(screen.getByText('TitleTestDiferente')).toBeTruthy();

  })
})