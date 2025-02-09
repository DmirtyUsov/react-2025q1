import { Link } from 'react-router';

export const NotFound = () => {
  return (
    <div className="mx-auto max-w-screen-sm text-center">
      <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-lime-600 lg:text-9xl dark:text-lime-500">
        404
      </h1>
      <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
        Moved to another universe.
      </p>

      <Link
        to="/"
        replace
        className="my-4 inline-flex rounded-lg bg-lime-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 focus:outline-none dark:focus:ring-lime-900"
      >
        Get Me Home
      </Link>
    </div>
  );
};
