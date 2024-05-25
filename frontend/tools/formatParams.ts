import type { ApiParams, SearchParams } from '@/shared/types';

export const formatParams = (params: SearchParams) => {
  const { perPage, priceMax, priceMin, projects, rooms, squareMax, squareMin } =
    params;

  const paramsURL: ApiParams = {
    'f[projects][]': projects,
    'f[rooms][]': rooms,
    'f[price][min]': priceMin,
    'f[price][max]': priceMax,
    'f[square][min]': squareMin,
    'f[square][max]': squareMax,
    per_page: perPage || undefined,
  };

  return paramsURL;
};
