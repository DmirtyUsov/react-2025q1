import { useShowDetails } from '../hooks';
import { useOutletContext } from 'react-router';
import { Loader } from './Loader';
import { useGetCharacterQuery } from '../api.service';

export const Details = () => {
  const { idDetails }: { idDetails: string } = useOutletContext();

  const { isLoading, data: character } = useGetCharacterQuery(idDetails);
  const { hideDetails } = useShowDetails();

  return (
    <div className="sticky top-40 mx-4 max-h-min">
      {isLoading && <Loader />}
      {character && !isLoading && (
        <div className="overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-gray-700">
          <img
            src={character.image}
            alt={`Image of ${character.name}`}
            className="h-32 w-full object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-lime-800 dark:text-white">
              {character.name}
            </h3>
            <div className="mt-2 flex flex-col items-center justify-between">
              <p className="font-bold text-lime-600">{character.species}</p>
              <span className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800">
                {character.status}
              </span>
            </div>
            <button
              onClick={hideDetails}
              className="mt-4 w-full cursor-pointer rounded-lg bg-lime-600 px-4 py-2 text-white transition-colors hover:bg-lime-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
