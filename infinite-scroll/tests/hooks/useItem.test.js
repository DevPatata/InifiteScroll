import { renderHook, waitFor } from '@testing-library/react';
import { useItems } from '../../src/hooks/useItem';
import getItems from '../../src/services/getItems';

jest.mock('../../src/services/getItems');

describe('Pruebas en hook useItem', () => {
  test('Prueba valores en hook', async () => {
    getItems.mockReturnValue(Promise.resolve({ pages: 1, data: [] }));
    const { result } = renderHook(() => useItems());

    await waitFor(
      () => expect(result.current.numberOfPages).toBe(1)
    )

    const { loadingNextPage, numberOfPages, keywordToUse } = result.current;

    expect(loadingNextPage).toBe(false);
    expect(numberOfPages).toBe(1);
    expect(keywordToUse).toBe('');
  })
});