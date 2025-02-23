import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { BrowserRouter } from 'react-router';
import { Home } from './Home';
import { Provider } from 'react-redux';
import { store } from '../store';

describe('Home', () => {
  it('should render Search', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );
    screen.debug();

    const heading = screen.getByRole('button', { name: /search/i });

    expect(heading).toBeInTheDocument();
  });
});
