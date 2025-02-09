import { useEffect, useState } from 'react';
import { ACTIONS, useApiGetCharacters } from '../hooks/useApiGetCharacters';
import { CardList, Paginator, Search, Warning } from '../components';
import { useSearchParams } from 'react-router';

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [pageUrl, setPageUrl] = useState<string>('');
  const [action, setAction] = useState<ACTIONS>(ACTIONS.NewSearch);

  const { isLoading, isOk, errorMsg, charactersPage, pageNum, pagesTotal } =
    useApiGetCharacters(searchQuery, pageUrl, action);

  const [searchParams, setSearchParams] = useSearchParams({
    search: '',
    page: '',
  });

  useEffect(() => {
    const page: string = pageNum.toString();
    setSearchParams({ search: searchQuery, page });
  }, [searchQuery, pageNum, setSearchParams]);

  const changePage = (isShiftToPrev: boolean): void => {
    const pageUrl = isShiftToPrev
      ? charactersPage?.info.prev
      : charactersPage?.info.next;
    if (pageUrl) {
      setPageUrl(pageUrl);
      setAction(ACTIONS.LoadPage);
    }
  };

  const makeNewSearch = (newSearchQuery: string): void => {
    console.log(searchParams.get('page'));
    setSearchQuery(newSearchQuery);
    setAction(ACTIONS.NewSearch);
  };

  return (
    <main className="mx-auto max-w-4xl">
      <Search
        initSearchQuery={searchParams.get('search') || ''}
        setSearchQuery={(newSearchQuery) => makeNewSearch(newSearchQuery)}
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
        <Paginator
          pageCurrent={pageNum}
          pageTotal={pagesTotal}
          changePage={(isShiftToPrev) => changePage(isShiftToPrev)}
        />
      </section>
    </main>
  );
};
