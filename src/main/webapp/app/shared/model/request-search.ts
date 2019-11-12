import { IFilterable } from './filterable';

export interface IRequestSearch {
  page?: number;
  size?: number;
  sort?: string;
  filters?: IFilterable[];
}
