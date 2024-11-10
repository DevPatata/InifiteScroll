import React from 'react';
import { render, screen } from '@testing-library/react';
import { ButtonItem } from '../../../src/components/button/button'

describe('Pruebas en component button', () => {

  test('Prueba match snaptshot', () => {
    const { container } = render(<ButtonItem />);
    expect(container).toMatchSnapshot();
  });

  test('Prueba valor button', () => {
    const buttonValue = 'TestButton';

    render(<ButtonItem buttonValue={'TestButton'} />);

    expect( screen.getByText(buttonValue)).toBeTruthy();

    expect( screen.getByTestId('button-test-id').innerHTML).toContain(buttonValue);
  });

  test('Prueba className primary button', () => {
    const isPrimary = true;

    render(<ButtonItem isPrimary={isPrimary} />);

    expect(screen.getByTestId('button-test-id').className).toContain('custom-button-primary');
  });

  test('Prueba className secondary button', () => {
    const isPrimary = false;

    render(<ButtonItem isPrimary={isPrimary} />);
    
    expect(screen.getByTestId('button-test-id').className).toContain('custom-button-secondary');
  });
})
