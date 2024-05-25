import { FC, PropsWithChildren } from 'react';
import cn from 'classnames';

interface Props {
  title: string;
  className?: string;
}

export const FilterWithTitle: FC<PropsWithChildren<Props>> = ({
  title,
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        'flex flex-col gap-3 lg:basis-[428px]',
        className && className,
      )}
    >
      <span className="opacity-40 t13 sm:t8">{title}</span>
      {children}
    </div>
  );
};
