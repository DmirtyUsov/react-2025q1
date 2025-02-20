import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Warning } from './Warning';

describe('Warning', () => {
  it('should render title', () => {
    const title = 'Test';
    render(<Warning title={title} />);
    screen.debug();

    expect(screen.getByText(title)).toBeInTheDocument();
  });
  it('should render message', () => {
    const message = 'TestMessage';
    render(<Warning message={message} />);
    screen.debug();

    expect(screen.getByText(message)).toBeInTheDocument();
  });
});
