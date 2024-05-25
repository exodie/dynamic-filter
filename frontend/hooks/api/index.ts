import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { MetaData, Price, SearchParams, Square } from '@/shared/types';

import { getFilteredApartments, getFilters } from '@/shared/api';

export const useFilters = (params: SearchParams) => {
  const { data, error, isLoading, isSuccess, isPlaceholderData } = useQuery({
    queryKey: ['filters', params],
    queryFn: () => getFilters(params),
    placeholderData: keepPreviousData,
  });

  const projects = data ? data.projects : [];
  const rooms = data ? data.rooms.sort((a, b) => a.number - b.number) : [];
  const price = data ? data.price : ({} as Price);
  const square = data ? data.square : ({} as Square);

  return {
    projects,
    price,
    rooms,
    square,
    filtersData: data,
    filtersError: error,
    filtersLoading: isLoading || !isSuccess,
    filtersPlaceholder: isPlaceholderData,
  };
};

export const useFilteredApartments = (params: SearchParams) => {
  const result = useQuery({
    queryKey: ['filtered', params],
    queryFn: () => getFilteredApartments(params),
    placeholderData: keepPreviousData,
  });

  const data = result.data ? result.data.data : [];
  const meta = result.data ? result.data.meta : ({} as MetaData);

  return {
    data,
    meta,
    error: result.error,
    isLoading: result.isLoading || !result.isSuccess,
    isPlaceholder: result.isPlaceholderData,
  };
};
