import React, { ReactNode } from 'react';
import Header from './components/Header';
import TopControls from './components/TopControls';
import Results from './components/Results';
import { Person } from './models';
import { initResult } from './data';

type State = { searchQuery: string; result: Person[] };

export default class App extends React.Component {
  state: Readonly<State> = { searchQuery: '', result: initResult };

  setSearchQuery(searchQuery: string): void {
    this.setState((prevState: State) => {
      return prevState.searchQuery === searchQuery
        ? prevState
        : { searchQuery };
    });
  }
  render(): ReactNode {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
        <Header title="Task1: Class components. Error boundary."></Header>

        <main className="mx-auto max-w-4xl">
          <TopControls
            setSearchQuery={(searchQuery) => this.setSearchQuery(searchQuery)}
          />
          <section>
            <h2 className="mb-6 text-center text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
              Results
            </h2>
            <Results results={this.state.result} />
          </section>
        </main>
        <footer id="footer" className="bg-teal-700 text-xl text-white">
          <div className="mx-auto flex max-w-4xl p-4">
            <button className="w-48 cursor-pointer rounded-xl border border-solid border-slate-900 bg-amber-700 p-3 text-white hover:bg-amber-600 active:bg-amber-500">
              Make Error
            </button>
          </div>
        </footer>
      </div>
    );
  }
}
