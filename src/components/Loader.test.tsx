import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Loader } from './Loader';

describe('Loader', () => {
  it('should render element with title', () => {
    render(<Loader />);
    screen.debug();

    const heading = screen.getByTitle(/loading.../i);

    expect(heading).toBeInTheDocument();
  });
});
