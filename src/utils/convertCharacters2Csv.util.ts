import { Character } from '../models';

export const convertCharacters2Csv = (characters: Character[]): string => {
  const header = ['name', 'status', 'species', 'type', 'gender', 'origin'];
  const rows = characters.map((character) => [
    character.name,
    character.status,
    character.species,
    character.type,
    character.gender,
    character.origin.name,
  ]);

  const csvContent =
    'data:text/csv;charset=utf-8,' +
    [header.join(';'), ...rows.map((e) => e.join(';'))].join('\n');
  return encodeURI(csvContent);
};
