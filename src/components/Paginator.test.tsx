import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { Paginator } from './Paginator';

describe('Paginator', () => {
  const pageCurrentMock = 1;
  const pageTotalMock = 10;
  const changePageMock = vi.fn();
  render(
    <Paginator
      pageCurrent={pageCurrentMock}
      pageTotal={pageTotalMock}
      changePage={changePageMock}
    />
  );
  screen.debug();

  it('should render two buttons', () => {
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });
  it('calls changePage function when button is clicked', async () => {
    screen.debug();

    const button = screen.getByRole('button', { name: /next/i });
    const user = userEvent.setup();
    await user.click(button);
    expect(changePageMock).toHaveBeenCalled();
  });
});
