import React, { ReactNode } from 'react';

type State = { query: string; inputValue: string };
type Validation = { minLength: number; maxLength: number };
export default class TopControls extends React.Component {
  state: Readonly<State> = {
    query: 'InitQ',
    inputValue: 'InitI',
  };

  validation: Readonly<Validation> = { minLength: 3, maxLength: 60 };

  changeQuery = (): void => {};

  updateInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = event.target.value;
    this.setState((prevState) => {
      return { ...prevState, inputValue: value };
    });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputValue: string = this.state.inputValue;
    if (
      inputValue.length > this.validation.minLength &&
      inputValue.length <= this.validation.maxLength
    ) {
      this.setState((prevState: State) => {
        return { ...prevState, query: prevState.inputValue };
      });
    }
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
            onChange={(event) => this.updateInputValue(event)}
            required
            minLength={this.validation.minLength}
            maxLength={this.validation.maxLength}
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
