import { IFilterable } from './filterable';

export interface IRequestSearch {
  page?: number;
  size?: number;
  sort?: string;
  sorts?: string[];
  filters?: IFilterable[];
}
