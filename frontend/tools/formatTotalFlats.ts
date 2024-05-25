export const formatTotalFlats = (total: number) => {
  if (total === 0) return 'Ничего не найдено';

  const totalStr = String(total);

  const endsWith = (suffix: string) => totalStr.endsWith(suffix);

  if (endsWith('1') && !endsWith('11')) {
    return `Найдено ${total} квартира`;
  }
  if (
    (endsWith('2') && !endsWith('12')) ||
    (endsWith('3') && !endsWith('13')) ||
    (endsWith('4') && !endsWith('14'))
  ) {
    return `Найдено ${total} квартиры`;
  }

  return `Найдено ${total} квартир`;
};
