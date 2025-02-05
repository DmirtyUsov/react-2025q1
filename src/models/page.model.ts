import { Pagination } from './pagination.model';

export type Page<T> = {
  info: Pagination;
  results: T[];
};
