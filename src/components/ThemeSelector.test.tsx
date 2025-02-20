import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ThemeSelector } from './ThemeSelector';

describe('ThemeSelector', () => {
  it('should render checkbox selector', () => {
    render(<ThemeSelector />);
    screen.debug();

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeInTheDocument();
  });
});
