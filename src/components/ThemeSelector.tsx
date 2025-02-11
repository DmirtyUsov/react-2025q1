export const ThemeSelector = () => {
  const isDarkTheme = false;
  return (
    <label className="inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        value=""
        checked={!isDarkTheme}
        className="peer sr-only bg-lime-400"
      />
      <div
        title="Toggle Color Theme"
        className="peer relative h-5 w-14 rounded-full bg-gray-600 peer-checked:bg-gray-100 peer-focus:ring-2 peer-focus:ring-lime-300 peer-focus:outline-none after:absolute after:start-[4px] after:top-0.5 after:h-4 after:w-6 after:rounded-full after:border after:border-lime-300 after:bg-lime-600 after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-checked:bg-lime-600 dark:peer-focus:ring-lime-800"
      ></div>
    </label>
  );
};
