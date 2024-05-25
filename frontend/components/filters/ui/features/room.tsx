import { type FC } from 'react';

import { useAppParams } from '@/hooks/app';

import { Room } from '@/shared/types';

import { FilterWithTitle } from '@/components/filters/filterWithTitle';
import { RoomTab } from '@/components/filters/roomTab';

interface Props {
  rooms: Room[];
}

export const RoomFeatures: FC<Props> = ({ rooms }) => {
  const { roomParams: params } = useAppParams();

  return (
    <FilterWithTitle title="Укажите количество комнат">
      <div className="flex justify-between">
        {rooms.map((room) => (
          <RoomTab
            key={room.number}
            number={room.number}
            active={params.includes(room.number.toString())}
            disabled={room.disabled}
          />
        ))}
      </div>
    </FilterWithTitle>
  );
};
