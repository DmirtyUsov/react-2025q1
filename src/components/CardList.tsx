import { Character } from '../models';
import Card from './Card';

type Props = { characters: Character[] };

const CardList = ({ characters }: Props) => {
  if (characters.length === 0) {
    return (
      <h3 className="mb-6 text-center text-xl text-slate-900 sm:text-2xl dark:text-white">
        No Entries
      </h3>
    );
  }
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      {characters.map((character: Character) => (
        <Card key={character.id} character={character}></Card>
      ))}
    </div>
  );
};

export default CardList;
