import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Search } from './Search';
import userEvent from '@testing-library/user-event';

describe('Search', () => {
  const query = 'Test';
  const setSearchQueryMock = vi.fn();
  it('should render input with search query', () => {
    render(
      <Search setSearchQuery={setSearchQueryMock} initSearchQuery={query} />
    );
    screen.debug();

    expect(screen.getByDisplayValue(query)).toBeInTheDocument();
  });
  it('calls setSearchQuery function when button is clicked', async () => {
    screen.debug();

    const button = screen.getByRole('button');
    const user = userEvent.setup();
    await user.click(button);
    expect(setSearchQueryMock).toHaveBeenCalled();
  });
});
