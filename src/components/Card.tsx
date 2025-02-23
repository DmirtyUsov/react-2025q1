import { Character } from '../models';
import { useShowDetails } from '../hooks';
import { FavoriteSelector } from './FavoriteSelector';
import {
  addFavorite,
  removeFavorite,
  useAppDispatch,
  useAppSelector,
} from '../store';
import { useEffect, useState } from 'react';
import { RootState } from '../store/store';

type Props = { character: Character };

export const Card = ({ character }: Props) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(
    (state: RootState) => state.favorites.characters
  );
  const { id, image, status, species, name } = character;

  const { showDetailsForId } = useShowDetails();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const showDetails = (event: React.MouseEvent) => {
    event.stopPropagation();
    const details = id.toString();
    showDetailsForId(details);
  };

  useEffect(() => {
    const isFavorite = favorites.some((item) => item.id === id);
    setIsFavorite(isFavorite);
  }, [favorites, id]);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite({ id }));
    } else {
      dispatch(addFavorite(character));
    }
  };

  return (
    <div className="transform overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl dark:bg-gray-700">
      <img
        src={image}
        alt={`Image of ${name}`}
        className="h-64 w-full object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-lime-800 dark:text-white">
          {name}
        </h3>
        <div className="mt-2 flex items-center justify-between">
          <p className="font-bold text-lime-600">{species}</p>
          <span className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800">
            {status}
          </span>
        </div>
        <button
          onClick={(event) => showDetails(event)}
          className="mt-4 w-full cursor-pointer rounded-lg bg-lime-600 px-4 py-2 text-white transition-colors hover:bg-lime-500"
        >
          Show More
        </button>
        <FavoriteSelector
          toggleFavorite={toggleFavorite}
          isFavorite={isFavorite}
        />
      </div>
    </div>
  );
};
