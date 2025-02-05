import { useCallback, useEffect, useRef, useState } from 'react';
import useLocalStorage from '../useLocalStorage';

const LOCAL_STORAGE_ID = 'search-wer433j';
type Props = { setSearchQuery(searchQuery: string): void };

const Search = ({ setSearchQuery }: Props) => {
  const [savedSearchQuery, storeSearchQuery] = useLocalStorage<string>(
    LOCAL_STORAGE_ID,
    ''
  );
  const [inputValue, setInputValue] = useState<string>(savedSearchQuery);

  const isMounted = useRef<boolean>(false);
  const runOnMount = useCallback(() => {
    setSearchQuery(inputValue);
  }, [inputValue, setSearchQuery]);

  useEffect(() => {
    if (!isMounted.current) {
      runOnMount();
      isMounted.current = true;
    }
  }, [runOnMount]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setSearchQuery(inputValue);
    storeSearchQuery(inputValue);
  };

  return (
    <section id="search" className="my-12 scroll-mt-16 p-6">
      <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 sm:text-5xl dark:text-white">
        Search Query
      </h2>
      <form
        onSubmit={(event) => handleSubmit(event)}
        className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-2xl sm:flex-row sm:text-3xl"
      >
        <input
          type="text"
          id="subject"
          name="subject"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Character within the show Rick and Morty"
          autoComplete="false"
          className="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black sm:text-3xl dark:border-white dark:text-white"
        />
        <button className="w-48 cursor-pointer rounded-xl border border-solid border-slate-900 bg-teal-700 p-3 text-white hover:bg-teal-600 active:bg-teal-500 dark:border-none">
          Search
        </button>
      </form>
    </section>
  );
};

export default Search;
