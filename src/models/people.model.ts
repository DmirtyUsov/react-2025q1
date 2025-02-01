import { Person } from './person.model';

export type People = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Person[];
};
