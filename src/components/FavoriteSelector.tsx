type Props = { isFavorite: boolean; toggleFavorite(): void };
export const FavoriteSelector = ({ isFavorite, toggleFavorite }: Props) => {
  return (
    <label className="mt-1 inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        value=""
        checked={isFavorite}
        onChange={toggleFavorite}
        className="peer sr-only"
      />
      <div className="peer relative h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-blue-600 peer-focus:ring-4 peer-focus:ring-blue-300 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-checked:bg-blue-600 dark:peer-focus:ring-blue-800"></div>
      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        Selected
      </span>
    </label>
  );
};
