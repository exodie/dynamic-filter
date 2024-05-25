export const formatPagination = (remainder: number, perPage: number) => {
  const result = remainder < perPage ? remainder : perPage;
  return `Показать ещё ${result} из ${remainder}`;
};
