import type { ApiParams, SearchParams } from '@/shared/types';
import { formatParams } from './formatParams';

export const getURLSearchParams = (params: SearchParams) => {
  const paramsApi = formatParams(params);

  const searchParams = new URLSearchParams();

  for (const param in paramsApi) {
    const value = paramsApi[param as keyof ApiParams];

    if (!value) continue;

    const arr = Array.isArray(value) ? value : [value];

    arr.forEach((item: string) => {
      searchParams.append(param, item);
    });
  }

  searchParams.append('page', '1');

  return searchParams;
};
