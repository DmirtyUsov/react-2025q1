import { Location } from './location.model';
export type OrganismStatus = 'Alive' | 'Dead' | 'unknown';
export type Gender = 'Female' | 'Male' | 'Genderless' | 'unknown';
export type Character = {
  id: number;
  name: string;
  status: OrganismStatus;
  species: string;
  type: string;
  gender: Gender;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
};
