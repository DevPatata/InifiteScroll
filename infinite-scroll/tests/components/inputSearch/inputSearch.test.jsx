import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';
import { InputSearch } from '../../../src/components/inputSearch/inputSearch';

describe('Prueba componente InputSearch', () => {

  test('Prueba match snapshot', () => {
    const { container } = render(<InputSearch />)

    expect(container).toMatchSnapshot();
  });

  test('Prueba cambio texto input', () => {
    render(<InputSearch />);

    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: 'unTEST' } });

    expect(input.value).toBe('unTEST');
  });

  test('Prueba llamar formatInputValue cuando cambian el input', () => {
    const actionInput = jest.fn();

    render(<InputSearch action={ actionInput }/>);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: 'unTEST' } });
    fireEvent.submit(form);

    expect( actionInput ).toHaveBeenCalled();
    expect( actionInput ).toHaveBeenCalledWith('Untest');
  })
})