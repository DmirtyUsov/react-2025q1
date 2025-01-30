import React, { ReactNode } from 'react';

export default class Header extends React.Component<{ title: string }> {
  render(): ReactNode {
    return (
      <header className="sticky top-0 z-10 bg-teal-700 text-white">
        <section className="mx-auto flex max-w-4xl items-center gap-2 p-4">
          <img src="react.svg" alt="React Logo" />
          <div>RS React 2025 Q1</div>
          <h1 className="text-3xl font-medium">
            <a href="#hero">{this.props.title}</a>
          </h1>
        </section>
      </header>
    );
  }
}
