import { useEffect, useState } from 'react';
import { CardList, Loader, Paginator, Search, Warning } from '../components';
import { Outlet, useSearchParams } from 'react-router';
import { ACTIONS, useApiGetCharacters, useShowDetails } from '../hooks';

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [pageUrl, setPageUrl] = useState<string>('');
  const [action, setAction] = useState<ACTIONS>(ACTIONS.NewSearch);
  const { idDetails, isShowDetails, hideDetails } = useShowDetails();

  const { isLoading, isOk, errorMsg, charactersPage, pageNum, pagesTotal } =
    useApiGetCharacters(searchQuery, pageUrl, action);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const page: string = pageNum.toString();
    searchParams.set('search', searchQuery);
    searchParams.set('page', page);
    setSearchParams(searchParams);
  }, [searchQuery, pageNum, setSearchParams, searchParams]);

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
    setSearchQuery(newSearchQuery);
    setAction(ACTIONS.NewSearch);
  };

  return (
    <main
      onClick={hideDetails}
      className="mx-auto flex max-w-4xl flex-col justify-center sm:flex-row"
    >
      <div>
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
            <Loader />
          ) : (
            <CardList
              characters={charactersPage ? charactersPage.results : []}
            />
          )}

          {pagesTotal > 1 && (
            <Paginator
              pageCurrent={pageNum}
              pageTotal={pagesTotal}
              changePage={(isShiftToPrev) => changePage(isShiftToPrev)}
            />
          )}
        </section>
      </div>
      {isShowDetails && <Outlet context={{ idDetails }} />}
    </main>
  );
};
