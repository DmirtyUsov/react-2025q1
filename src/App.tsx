import { useState } from 'react';
import Header from './components/Header';
import Warning from './components/Warning';
import Footer from './components/Footer';
import Search from './components/Search';

import CardList from './components/CardList';

import { useApiGetCharacters } from './hooks/useApiGetCharacters';

const App = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { isLoading, isOk, errorMsg, charactersPage } =
    useApiGetCharacters(searchQuery);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
      <Header title="Task1: Class components. Error boundary."></Header>

      <main className="mx-auto max-w-4xl">
        <Search setSearchQuery={(searchQuery) => setSearchQuery(searchQuery)} />

        <section>
          {!isLoading && (
            <h2 className="mb-6 text-center text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
              Results
            </h2>
          )}
          {!isLoading && !isOk && charactersPage?.results && (
            <Warning title={`Failed to load data`} message={errorMsg} />
          )}
          {isLoading === true ? (
            <h3 className="mb-6 animate-pulse text-center text-3xl">
              Loading...
            </h3>
          ) : (
            <CardList
              characters={charactersPage ? charactersPage.results : []}
            />
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};
export default App;
