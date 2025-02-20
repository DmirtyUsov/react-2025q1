import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Loader } from './Loader';
import { ThemeProvider } from './ThemeProvider';

describe('ThemeProvider', () => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: function () {},
        removeListener: function () {},
      };
    };

  it('should render Loader', () => {
    render(
      <ThemeProvider>
        <Loader />
      </ThemeProvider>
    );
    screen.debug();

    const heading = screen.getByTitle(/loading.../i);

    expect(heading).toBeInTheDocument();
  });
});
