import { type AxiosResponse } from 'axios';

export interface Price {
  max: number;
  max_range: number;
  min: number;
  min_range: number;
}

export interface Project {
  disabled?: boolean;
  id: number;
  is_active?: boolean;
  title: string;
}

export interface Room {
  disabled: boolean;
  is_active: boolean;
  number: number;
}

export interface Square {
  max: number;
  max_range: number;
  min: number;
  min_range: number;
}

export interface Filters {
  price: Price;
  projects: Project[];
  rooms: Room[];
  square: Square;
}

export interface ApartmentDetails {
  id: number;
  project_title: string;
  rooms: number;
  studio: boolean;
  price: string;
  old_price?: string;
  square: string;
  release_dates: string;
  floor: string;
  image: string;
}

export interface PagesLink {
  first: string;
  last: string;
  prev: string | null;
  next: string | null;
}

export interface MetaLink {
  url: string | null;
  label: string;
  active: boolean;
}

export interface MetaData {
  current_page: number;
  from: number;
  last_page: number;
  links: MetaLink[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface FilteredResponse {
  data: ApartmentDetails[];
  meta: MetaData;
}

export interface AxiosData<T> extends AxiosResponse<T> {
  meta: MetaData;
}

export interface ApiParams {
  'f[projects][]': string | null;
  'f[rooms][]': string[];
  'f[price][min]': string | null;
  'f[price][max]': string | null;
  'f[square][min]': string | null;
  'f[square][max]': string | null;
  per_page?: string | null;
}

export interface SearchParams {
  projects: string | null;
  rooms: string[];
  priceMin: string | null;
  priceMax: string | null;
  squareMin: string | null;
  squareMax: string | null;
  perPage?: string | null;
}
