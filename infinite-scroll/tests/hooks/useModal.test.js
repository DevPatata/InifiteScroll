import { renderHook } from '@testing-library/react';
import { useModal } from '../../src/hooks/useModal';

describe('Pruebas en hook useModal', () => {
  test('Prueba valores en hook', () => {
    const { result } = renderHook(() => useModal());
    const { isOpen } = result.current;

    expect(isOpen).toBeFalsy();
  });
});