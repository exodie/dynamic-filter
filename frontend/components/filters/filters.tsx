import { FC, useState, AnimationEvent } from 'react';
import { FloatingOverlay } from '@floating-ui/react';
import cn from 'classnames';

import { useAppRouter } from '@/hooks/app';
import { useFiltersData, useList } from '@/hooks';

import { formatTotalFlats } from '@/tools';

import { CloseIcon, ResetIcon } from './ui/icons';

import {
  PriceFeatures,
  ProjectFeatures,
  RoomFeatures,
  SquareFeatures,
} from './ui/features';

import { Button } from '@/shared/ui';

interface Props {
  onVisible?: (value: boolean) => void;
}

export const Filters: FC<Props> = ({ onVisible = () => {} }) => {
  const { clearQuery } = useAppRouter();
  const { meta } = useList();
  const { filtersError, price, projects, rooms, square } = useFiltersData();

  const [animate, setAnimate] = useState('animate-filters-in');

  if (filtersError)
    return (
      <p className="t7 text-center pt-0 p-6 2xl:pt-0 2xl:p-12">
        Ошибка загрузки фильтров:
        <span className="text-red-500">{filtersError.message}</span>
      </p>
    );

  const handleReset = () => clearQuery();

  const handleClose = () => {
    handleReset();
    setTimeout(() => {
      setAnimate('animate-filters-out');
    }, 200);
  };

  const handleShowList = () => setAnimate('animate-filters-out');

  const handleAnimationEnd = (e: AnimationEvent<HTMLDivElement>) =>
    e.animationName === 'filtersSlideOut' && onVisible(false);

  return (
    <>
      <div className="block lg:hidden">
        <FloatingOverlay
          className={cn(
            'fixed top-0 inset-x-0 z-10 backdrop-blur-lg backdrop-brightness-50',
          )}
          lockScroll
        >
          <div
            className={cn('bg-white p-5 pb-0 rounded-b-2xl', animate)}
            onAnimationEnd={handleAnimationEnd}
          >
            <div>
              <CloseIcon className="ml-auto mb-6" onClick={handleClose} />
              <div className="flex flex-col gap-8">
                <h4>ФИЛЬТР</h4>
                <ProjectFeatures projects={projects} />
                <RoomFeatures rooms={rooms} />
                <PriceFeatures price={price} />
                <SquareFeatures square={square} />
              </div>
            </div>
            <Button className="my-12 p-3 w-full" onClick={handleShowList}>
              Смотреть квартиры
            </Button>
          </div>
        </FloatingOverlay>
      </div>

      <div className="hidden lg:block">
        <div className="flex flex-col gap-12 pb-16 mb-12 border-b-2 border-black-500 border-opacity-20">
          <div className="flex gap-3 justify-center xl:justify-between flex-wrap items-end">
            <ProjectFeatures projects={projects} />
            <RoomFeatures rooms={rooms} />
            <PriceFeatures price={price} />
            <SquareFeatures square={square} />
          </div>

          <div className="flex justify-between t8">
            <div className="hidden xl:block xl:w-32" />
            <span className="t8">{formatTotalFlats(meta.total)}</span>
            <button className="flex items-center gap-3" onClick={handleReset}>
              <ResetIcon />
              <span>Очистить все</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
