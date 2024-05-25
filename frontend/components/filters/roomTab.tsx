import { type FC, useEffect } from 'react';
import cn from 'classnames';

import { useAppRouter } from '@/hooks/app';

import { formatRoomsNumber } from '@/tools';

interface Props {
  number: number;
  active: boolean;
  disabled: boolean;
}

export const RoomTab: FC<Props> = ({ number, active, disabled }) => {
  const { appendQuery, deleteQuery } = useAppRouter();

  useEffect(() => {
    if (disabled) deleteQuery('rooms', number.toString());
  }, [disabled, number]);

  const handleClick = (number: number) => {
    appendQuery('rooms', number.toString());
  };

  return (
    <button
      className={cn(
        't7 border border-black-100 rounded-base px-4 py-4 sm:px-6 sm:py-3.5 cursor-pointer',
        active && 'bg-blue !border-none text-white',
        disabled && 'bg-gray-200 !border-none text-white !cursor-not-allowed',
      )}
      onClick={() => handleClick(number)}
      disabled={disabled}
    >
      {formatRoomsNumber(number)}
    </button>
  );
};
