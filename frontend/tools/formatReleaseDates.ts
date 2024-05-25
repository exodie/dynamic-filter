export const formatReleaseDates = (value: string) => {
  const formatValue = value.replace(/кв./, ' квартал');

  const quarterMapping: { [key: string]: string } = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
  };

  const quarter = quarterMapping[value[0]] || value[0];

  return `${quarter} ${formatValue.slice(1)}`;
};
