import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Character } from '../models';
import { mockCharacters } from '../tests/mock.data';
import { Details } from './Details';
import { MemoryRouter, Route, Routes } from 'react-router';
import { Home } from '../pages';
import { Provider } from 'react-redux';
import { store } from '../store';

describe('Details', () => {
  vi.mock('useShowDetails', () => {
    const hideDetails = vi.fn();

    return { hideDetails };
  });
  vi.mock('useApiGetCharacterById', () => {
    const isLoading = false;
    const character: Character = mockCharacters[0];

    return { isLoading, character };
  });

  it('should render character', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/?search=ric&page=1&details=3']}>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/" element={<Details />} />
            </Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    screen.debug();

    await waitFor(() => {
      const element = screen.getByRole('button', { name: /close/i });
      expect(element).toBeInTheDocument();
    });
  });
});
