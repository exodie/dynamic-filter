import { type FC } from 'react';
import { PulseLoader } from 'react-spinners';

import { useList } from '@/hooks/useList';

import { Button, Card } from '@/shared/ui';

import { formatPagination } from '@/tools';

export const List: FC = () => {
  const { meta, data, error, isPlaceholder, minPerPage, setPerPage } =
    useList();

  if (error)
    return <p className="t7 text-center">Не удалось загрузить список 😢</p>;

  const remainder = meta.total - meta.to;

  return (
    <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-2.5 lg:gap-x-5 lg:gap-y-12 title-gutter">
      {data.map((c) => (
        <Card className="animate-appear" key={c.id} card={c} />
      ))}
      <div className="col-span-full self-end 2xl:col-start-2 2xl:col-end-3 pt-3.5 lg:pt-4">
        {remainder == 0 ? null : (
          <Button
            className="w-full"
            onClick={() => setPerPage((prev) => prev + minPerPage)}
            disabled={isPlaceholder}
          >
            {isPlaceholder ? (
              <div className="flex justify-center items-center">
                <PulseLoader color="#fff" />
              </div>
            ) : (
              formatPagination(remainder, minPerPage)
            )}
          </Button>
        )}
      </div>
    </div>
  );
};
