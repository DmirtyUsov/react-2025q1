import { clearAll, useAppDispatch, useAppSelector } from '../store';
import { convertCharacters2Csv } from '../utils';

export const Flyout = () => {
  const favorites = useAppSelector((state) => state.favorites.characters);
  const dispatch = useAppDispatch();
  return (
    favorites.length > 0 && (
      <div className="sticky bottom-0 left-0 max-h-max max-w-max overflow-hidden rounded-2xl border-2 border-lime-600 bg-lime-50 p-1.5 text-center shadow-2xl dark:bg-gray-600">
        <h3 className="text-2xl">Total selected {favorites.length}</h3>
        <button
          onClick={() => dispatch(clearAll())}
          className="mt-4 w-full cursor-pointer rounded-lg bg-lime-600 px-4 py-2 text-white transition-colors hover:bg-lime-500"
        >
          Unselect all
        </button>
        <div className="mt-4 w-full cursor-pointer rounded-lg bg-lime-600 px-4 py-2 text-white transition-colors hover:bg-lime-500">
          <a
            href={convertCharacters2Csv(favorites)}
            download={`rmshow-${favorites.length}.csv`}
          >
            Download
          </a>
        </div>
      </div>
    )
  );
};
