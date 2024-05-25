import { formatPrice } from './formatPrice';

export const formatRangeData = (name: 'price' | 'square', value: number) =>
  name === 'price' ? formatPrice(value) : value;
