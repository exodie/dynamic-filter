import { FC, HTMLProps, PropsWithChildren } from 'react';
import cn from 'classnames';

type Props = HTMLProps<HTMLButtonElement>;

export const Button: FC<PropsWithChildren<Props>> = ({
  className,
  children,
  onClick,
}) => {
  return (
    <button
      className={cn(
        't6-medium bg-blue text-white p-2 rounded-md',
        className && className,
      )}
      onClick={onClick}
    >
      <div className="p-1 lg:p-2">{children}</div>
    </button>
  );
};
