import React from 'react'
import { render } from '@testing-library/react';
import { AppRouter } from '../../src/routes/AppRouter';
import { MemoryRouter } from 'react-router-dom';
import { useItems } from '../../src/hooks/useItem';

jest.mock('../../src/hooks/useItem')


describe('Prueba archivo de rutas', () => { 
  useItems.mockReturnValue({
    loading: false,
    items: [],
    setPage: () => {},
    numberOfPages: 1,
    setKeyword: () => {},
    loadingNextPage: false
  })

  test('Prueba redireccion de ruta inexistente', () => {
    const { getByText} = render(
      <MemoryRouter initialEntries={['/redireccionAInicio']}>
        <AppRouter/>
      </MemoryRouter>
    )

    expect( getByText('PatataScroll') ).toBeTruthy();
  });
})