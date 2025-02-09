type Props = {
  pageTotal: number;
  pageCurrent: number;
  changePage(shiftToPrev: boolean): void;
};

export const Paginator = ({ pageCurrent, pageTotal, changePage }: Props) => {
  const prevDisabled = pageCurrent <= 1;
  const nextDisabled = pageCurrent >= pageTotal;

  return (
    <ul className="mx-auto mt-8 flex h-10 items-center justify-center -space-x-px text-base">
      <li>
        <button
          onClick={() => changePage(true)}
          disabled={prevDisabled}
          className="ms-0 flex h-10 cursor-pointer items-center justify-center rounded-s-lg border border-e-0 border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 disabled:cursor-not-allowed dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Previous
        </button>
      </li>
      <li>
        <p className="flex h-10 items-center justify-center border border-gray-300 bg-blue-50 px-4 text-blue-600 dark:border-gray-700 dark:bg-gray-700 dark:text-white">
          Page {pageCurrent} / {pageTotal}
        </p>
      </li>
      <li>
        <button
          onClick={() => changePage(false)}
          disabled={nextDisabled}
          className="flex h-10 cursor-pointer items-center justify-center rounded-e-lg border border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 disabled:cursor-not-allowed dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
        </button>
      </li>
    </ul>
  );
};
