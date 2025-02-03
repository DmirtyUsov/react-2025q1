import React, { ReactNode } from 'react';
import Header from './components/Header';
import Results from './components/Results';
import { People } from './models';
import Warning from './components/Warning';
import Footer from './components/Footer';
import Search from './components/Search';
import { ApiResponse, apiService } from './api.service';

type State = {
  searchQuery: string;
  isLoading: boolean;
  apiResponse: ApiResponse<People>;
};

export default class App extends React.Component {
  state: Readonly<State> = {
    searchQuery: 'Some Text For Mount Swerrq2',
    isLoading: false,
    apiResponse: { isOk: true, errorMsg: '', payload: undefined },
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

  loadData(): void {
    if (this.state.isLoading) {
      return;
    }

    this.setIsLoadingState(true);

    apiService
      .getPeople(this.state.searchQuery)
      .then((apiResponse: ApiResponse<People>) => {
        console.log(apiResponse);

        this.setState((prevState: State): State => {
          return {
            ...prevState,
            apiResponse,
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
          <Search
            setSearchQuery={(searchQuery) => this.setSearchQuery(searchQuery)}
          />

          <section>
            {!this.state.isLoading && (
              <h2 className="mb-6 text-center text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
                Results
              </h2>
            )}
            {!this.state.isLoading &&
              !this.state.apiResponse.isOk &&
              this.state.apiResponse.payload && (
                <Warning
                  title={`Failed to load data`}
                  message={this.state.apiResponse.errorMsg}
                />
              )}
            {this.state.isLoading === true ? (
              <h3 className="mb-6 animate-pulse text-center text-3xl">
                Loading...
              </h3>
            ) : (
              <Results
                results={
                  this.state.apiResponse.payload
                    ? this.state.apiResponse.payload.results
                    : []
                }
              />
            )}
          </section>
        </main>

        <Footer />
      </div>
    );
  }
}
