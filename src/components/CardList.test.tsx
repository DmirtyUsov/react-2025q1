import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { CardList } from './CardList';
import { Character } from '../models';
import { mockCharacters } from '../tests/mock.data';
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import { store } from '../store';

describe('CardList', () => {
  it('should not render cards then list is empty', () => {
    const characters: Character[] = [];
    render(<CardList characters={characters} />);
    screen.debug();

    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
  it('should render the list of characters', () => {
    const characters: Character[] = mockCharacters;
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CardList characters={characters} />
        </BrowserRouter>
      </Provider>
    );
    screen.debug();

    const list = screen.getAllByRole('img');
    expect(list).toHaveLength(characters.length);
  });
});
