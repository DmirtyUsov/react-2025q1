import React, { ReactNode } from 'react';
import Header from './components/Header';
import TopControls from './components/TopControls';

type State = { searchQuery: string };

export default class App extends React.Component {
  state: Readonly<State> = { searchQuery: '' };

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
          <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
          <section>Results {this.state.searchQuery}</section>
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
