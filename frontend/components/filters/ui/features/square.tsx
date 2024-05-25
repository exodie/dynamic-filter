import { type FC } from 'react';

import { useAppParams } from '@/hooks/app';

import { Square } from '@/shared/types';

import { Range } from '@/components/filters/range';

interface Props {
  square: Square;
}

export const SquareFeatures: FC<Props> = ({ square }) => {
  const { min, min_range: minRange, max, max_range: maxRange } = square;

  const { minSquareParams, maxSquareParams } = useAppParams();

  return (
    <Range
      name="square"
      title="Задайте площадь, м²"
      min={min}
      max={max}
      minRange={minRange}
      maxRange={maxRange}
      minParams={minSquareParams}
      maxParams={maxSquareParams}
    />
  );
};
