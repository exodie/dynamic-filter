import { FC, PropsWithChildren, useState } from 'react';
import { MoonLoader } from 'react-spinners';

import { useFiltersData, useList } from '@/hooks';

import { Button } from '@/shared/ui';

import { FilterIcon } from '../filters/ui/icons';
import { Filters } from '../filters/filters';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const [showFilters, setShowFilters] = useState(false);
  const { isLoading } = useList();
  const { filtersLoading } = useFiltersData();

  if (isLoading || filtersLoading)
    return (
      <div className="flex h-screen justify-center items-center">
        <MoonLoader color="#2495FE" />
      </div>
    );

  return (
    <main className="w-full overflow-y-auto">
      <div className="container h-dvh pt-4 lg:pt-8 flex flex-col">
        <h4 className="mb-6 2xl:mb-12">ПЛАНИРОВКИ</h4>
        <div className="flex lg:hidden flex-col">
          {showFilters && <Filters onVisible={setShowFilters} />}
          <div className="flex flex-col py-2.5 mb-8">
            <Button onClick={() => setShowFilters(true)}>
              <span className="flex justify-center items-baseline gap-2">
                Фильтр
                <FilterIcon />
              </span>
            </Button>
          </div>
        </div>

        <div className="hidden lg:flex lg:flex-col">
          <Filters />
        </div>

        <div className="flex-grow">{children}</div>
      </div>
    </main>
  );
};
