import { useEffect, useState } from 'react';

import { useFilteredApartments } from './api';

import { useAppParams } from './app';

export const useList = () => {
  const minPerPage = 9;

  const {
    maxPriceParams,
    maxSquareParams,
    minPriceParams,
    minSquareParams,
    projectParams,
    roomParams,
  } = useAppParams();

  const [perPage, setPerPage] = useState(minPerPage);

  const { data, error, isLoading, meta, isPlaceholder } = useFilteredApartments(
    {
      projects: projectParams,
      rooms: roomParams,
      priceMin: minPriceParams,
      priceMax: maxPriceParams,
      squareMin: minSquareParams,
      squareMax: maxSquareParams,
      perPage: perPage.toString(),
    },
  );

  useEffect(() => {
    setPerPage(minPerPage);
  }, [meta.total]);

  return {
    data,
    error,
    isLoading,
    meta,
    isPlaceholder,
    minPerPage,
    perPage,
    setPerPage,
  };
};
