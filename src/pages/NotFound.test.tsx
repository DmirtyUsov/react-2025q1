import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { NotFound } from './NotFound';
import { BrowserRouter } from 'react-router';

describe('Header', () => {
  it('should render with correct text', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    screen.debug();

    const heading = screen.getByRole('heading');

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('404');
  });
});
