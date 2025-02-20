import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { BrowserRouter } from 'react-router';
import { Home } from './Home';

describe('Home', () => {
  it('should render Search', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    screen.debug();

    const heading = screen.getByRole('button', { name: /search/i });

    expect(heading).toBeInTheDocument();
  });
});
