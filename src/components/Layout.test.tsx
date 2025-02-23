import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Loader } from './Loader';
import { Layout } from './Layout';

describe('Layout', () => {
  it('should render element with title', () => {
    render(
      <Layout>
        <Loader />
      </Layout>
    );
    screen.debug();

    const heading = screen.getByTitle(/loading.../i);

    expect(heading).toBeInTheDocument();
  });
});
