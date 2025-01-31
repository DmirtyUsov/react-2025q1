import React, { ReactNode } from 'react';

const LOCAL_STORAGE_ID = 'search-wer433j';
type State = { inputValue: string };

export default class TopControls extends React.Component<{
  setSearchQuery(searchQuery: string): void;
}> {
  state: Readonly<State> = {
    inputValue: localStorage.getItem(LOCAL_STORAGE_ID) || '',
  };

  updateInputValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value: string = event.target.value;
    this.setState(() => {
      return { inputValue: value };
    });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const inputValue: string = this.state.inputValue.trim();
    this.setState(() => {
      return { inputValue };
    });
    localStorage.setItem(LOCAL_STORAGE_ID, inputValue);
    this.props.setSearchQuery(inputValue);
  };

  render(): ReactNode {
    return (
      <section id="search" className="my-12 scroll-mt-16 p-6">
        <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 sm:text-5xl dark:text-white">
          Search Query
        </h2>
        <form
          onSubmit={(event) => this.handleSubmit(event)}
          className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-2xl sm:flex-row sm:text-3xl"
        >
          <input
            type="text"
            id="subject"
            name="subject"
            value={this.state.inputValue}
            onChange={(event) => this.updateInputValue(event)}
            placeholder="Your Subject"
            autoComplete="false"
            className="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black sm:text-3xl dark:border-white dark:text-white"
          />
          <button className="w-48 cursor-pointer rounded-xl border border-solid border-slate-900 bg-teal-700 p-3 text-white hover:bg-teal-600 active:bg-teal-500 dark:border-none">
            Submit
          </button>
        </form>
      </section>
    );
  }
}
