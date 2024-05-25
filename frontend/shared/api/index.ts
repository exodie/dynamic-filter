import { AxiosResponse } from 'axios';
import { apiConfig } from './config';

import type {
  SearchParams,
  Filters,
  AxiosData,
  ApartmentDetails,
} from '@/shared/types';

import { getURLSearchParams } from '@/tools';

export const getFilters = async (params: SearchParams) => {
  const { data } = await apiConfig<AxiosResponse<Filters>>('filters', {
    params: getURLSearchParams(params),
  });

  return data.data;
};

export const getFilteredApartments = async (params: SearchParams) => {
  const { data } = await apiConfig<AxiosData<ApartmentDetails[]>>('flats', {
    params: getURLSearchParams(params),
  });

  return { data: data.data, meta: data.meta };
};
