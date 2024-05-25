import { FC, useEffect, useState } from 'react';
import cn from 'classnames';

import { Like } from './like';

import { formatPrice, formatReleaseDates } from '@/tools';

import { ApartmentDetails } from '@/shared/types';

import { $likes } from '@/store';

interface Props {
  card: ApartmentDetails;
  className?: string;
}

export const Card: FC<Props> = ({ card, className }) => {
  const {
    rooms,
    studio,
    square,
    price,
    old_price: oldPrice,
    image,
    project_title: title,
    floor,
    release_dates: release,
  } = card;

  const [fillColor, setFillColor] = useState('#040306');

  useEffect(() => {
    const updateColor = (value: readonly number[], prev: readonly number[]) => {
      setFillColor(value.includes(card.id) ? 'red' : '#040306');
    };

    const unsubscribe = $likes.listen(updateColor);

    updateColor($likes.get(), []);

    return () => unsubscribe();
  }, [card.id, $likes]);

  return (
    <section
      className={cn(
        'flex flex-col gap-7 md:gap-12 border border-black-100 rounded-base px-6 py-4 md:px-10 md:pt-8 md:pb-12',
        className && className,
      )}
    >
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="t6-medium normal-case">
            {studio ? <span>студия </span> : <span>{rooms}-комнатная </span>}
            {square} м<sup>2</sup>
          </h3>
          <div className="flex items-baseline gap-4">
            <h2 className="t3">{formatPrice(price)}</h2>
            {oldPrice && (
              <span className="line-through">{formatPrice(oldPrice)}</span>
            )}
          </div>
        </div>
        <Like
          className="self-start hover:cursor-pointer active:cursor-pointer"
          fill={fillColor}
          triggered={() =>
            $likes.get().includes(card.id)
              ? $likes.set($likes.get().filter((id) => id !== card.id))
              : $likes.set([...$likes.get(), card.id])
          }
        />
      </div>

      <div className="flex justify-center">
        <img className="h-44 md:h-52 xl:h-72" src={image} alt="plan" />
      </div>

      <div className="flex flex-col last:border-none">
        <Project project_title={title} />
        <Floor floor={floor} />
        <ReleaseDates release_dates={release} />
      </div>
    </section>
  );
};

const Project: FC<Pick<ApartmentDetails, 'project_title'>> = ({
  project_title,
}) => {
  return (
    <div className="flex justify-between border-b border-black-100 border-opacity-20 py-1 last:pb-0 last:border-none t10-min">
      <span className="opacity-50">Проект</span>
      <span>{project_title}</span>
    </div>
  );
};

const Floor: FC<Pick<ApartmentDetails, 'floor'>> = ({ floor }) => {
  return (
    <div className="flex justify-between border-b border-black-100 border-opacity-20 py-1 last:pb-0 last:border-none t10-min">
      <span className="opacity-50">Этаж</span>
      <span>{floor}</span>
    </div>
  );
};

const ReleaseDates: FC<Pick<ApartmentDetails, 'release_dates'>> = ({
  release_dates,
}) => {
  return (
    <div className="flex justify-between border-b border-black-100 border-opacity-20 py-1 last:pb-0 last:border-none t10-min">
      <span className="opacity-50">Срок сдачи</span>
      <span>{formatReleaseDates(release_dates)}</span>
    </div>
  );
};
