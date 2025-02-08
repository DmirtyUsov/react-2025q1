import { useEffect, useState } from 'react';
import { useApiGetCharacters } from '../hooks/useApiGetCharacters';
import { CardList, Search, Warning } from '../components';
import { useSearchParams } from 'react-router';

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { isLoading, isOk, errorMsg, charactersPage } =
    useApiGetCharacters(searchQuery);
  const [searchParams, setSearchParams] = useSearchParams({
    search: '',
    page: '1',
  });

  useEffect(() => {
    setSearchParams({ search: searchQuery });
  }, [searchQuery, setSearchParams]);
  return (
    <main className="mx-auto max-w-4xl">
      <Search
        initSearchQuery={searchParams.get('search') || ''}
        setSearchQuery={(newSearchQuery) => setSearchQuery(newSearchQuery)}
      />

      <section>
        {!isLoading && (
          <h2 className="mb-6 text-center text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            Results
          </h2>
        )}
        {!isLoading && !isOk && charactersPage && (
          <Warning title={`Failed to load data`} message={errorMsg} />
        )}
        {isLoading === true ? (
          <h3 className="mb-6 animate-pulse text-center text-3xl">
            Loading...
          </h3>
        ) : (
          <CardList characters={charactersPage ? charactersPage.results : []} />
        )}
      </section>
    </main>
  );
};
