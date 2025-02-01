import React, { ReactNode } from 'react';
import Header from './components/Header';
import TopControls from './components/TopControls';
import Results from './components/Results';
import { People, Person } from './models';

const API_URL = 'https://swapi.dev/api/people/';

type State = {
  searchQuery: string;
  results: Person[];
  isLoading: boolean;
  isStatusNotOK: boolean;
  errorMessage: string;
};

export default class App extends React.Component {
  state: Readonly<State> = {
    searchQuery: 'Some Text For Mount Swerrq2',
    results: [],
    isLoading: false,
    isStatusNotOK: false,
    errorMessage: '',
  };
  setIsLoadingState(isLoading: boolean) {
    this.setState((prevState: State) => {
      return { ...prevState, isLoading };
    });
  }

  setSearchQuery(searchQuery: string): void {
    this.setState((prevState: State) => {
      return prevState.searchQuery === searchQuery
        ? prevState
        : { searchQuery };
    });
  }

  loadData() {
    if (this.state.isLoading) {
      return;
    }
    const url = this.state.searchQuery
      ? `${API_URL}?search=${this.state.searchQuery}`
      : API_URL;

    this.setIsLoadingState(true);
    fetch(url)
      .then((response: Response) => {
        if (!response.ok) {
          throw new Error(`Status Code ${response.status}`);
        }

        return response.json();
      })
      .then((data: People) => {
        this.setState((prevState: State) => {
          return {
            ...prevState,
            results: data.results,
          };
        });
      })
      .catch((error) => {
        this.setState((prevState: State) => {
          return {
            ...prevState,
            isStatusNotOK: true,
            errorMessage: `${error}`,
          };
        });
      })
      .finally(() => this.setIsLoadingState(false));
  }

  componentDidUpdate(_: unknown, prevState: Readonly<State>): void {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.loadData();
    }
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
            {!this.state.isLoading && (
              <h2 className="mb-6 text-center text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
                Results
              </h2>
            )}
            {!this.state.isLoading && this.state.isStatusNotOK && (
              <ErrorMessage title="" message={this.state.errorMessage} />
            )}
            {this.state.isLoading === true ? (
              <h3 className="mb-6 animate-pulse text-center text-3xl">
                Loading...
              </h3>
            ) : (
              <Results results={this.state.results} />
            )}
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

class ErrorMessage extends React.Component<{ title: string; message: string }> {
  render(): ReactNode {
    return (
      <div
        className="border-l-4 border-orange-500 bg-orange-100 p-4 text-orange-700"
        role="alert"
      >
        <p className="font-bold">{this.props.title || `Be Warned`}</p>
        <p>{this.props.message || `Something wrong.`}</p>
      </div>
    );
  }
}
