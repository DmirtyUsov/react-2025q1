import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { Card } from './Card';
import { Character } from '../models';
import { mockCharacters } from '../tests/mock.data';
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import { store } from '../store';

describe('Card', () => {
  const character: Character = mockCharacters[0];
  const showDetailsForIdMock = vi.fn();

  vi.mock('showDetails', () => {
    return showDetailsForIdMock;
  });

  vi.mock('useShowDetails', () => {
    return { showDetailsForId: vi.fn() };
  });

  it('should render character', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Card character={character} />
        </BrowserRouter>
      </Provider>
    );
    screen.debug();

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('calls showDetailsForId function when button is clicked', async () => {
    screen.debug();

    const button = screen.getByRole('button');
    const user = userEvent.setup();
    await user.click(button);
    // TODO expect(showDetailsForIdMock).toHaveBeenCalled();
  });
});
