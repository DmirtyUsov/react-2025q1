import { Character } from '../models';

type Props = { character: Character };

const Card = ({ character }: Props) => {
  const { image, status, species, name } = character;
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
        <button className="mt-4 w-full rounded-lg bg-lime-600 px-4 py-2 text-white transition-colors hover:bg-lime-500">
          Show More
        </button>
      </div>
    </div>
  );
};

export default Card;
