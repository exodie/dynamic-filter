import { type FC } from 'react';

import { useAppParams } from '@/hooks/app';

import { type Price } from '@/shared/types';

import { Range } from '@/components/filters/range';

interface Props {
  price: Price;
}

export const PriceFeatures: FC<Props> = ({ price }) => {
  const { min, min_range: minRange, max, max_range: maxRange } = price;

  const { minPriceParams, maxPriceParams } = useAppParams();

  return (
    <Range
      name="price"
      title="Стоимость"
      min={min}
      max={max}
      minRange={minRange}
      maxRange={maxRange}
      minParams={minPriceParams}
      maxParams={maxPriceParams}
    />
  );
};
