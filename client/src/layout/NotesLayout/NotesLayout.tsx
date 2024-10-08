import { useEffect, useState } from 'react';

import ExpandedNote from '@features/ExpandedNote/ExpandedNote';
import NavigationDrawer from '@layout/NotesLayout/ui/NavigationDrawer';
import { urlParams } from '@shared/lib/const';
import cn from '@shared/lib/helpers/cn';
import useUrl from '@shared/lib/hooks/useUrl';
import { Outlet } from 'react-router-dom';

const NotesLayout = () => {
  const { readUrl } = useUrl();
  const isNoteSelected = Number.isFinite(
    Number.parseInt(readUrl(urlParams.NOTE_ID), 10),
  );
  const [isNoteExpanded, setIsNoteExpanded] = useState(isNoteSelected);

  useEffect(() => {
    setIsNoteExpanded(isNoteSelected);
  }, [isNoteSelected]);

  return (
    <main
      className={cn(
        'grid max-h-dvh grid-cols-[300px_1fr_1fr] grid-rows-1 gap-6 text-on-surface transition-all duration-400 ease-emphasized-decelerate',
        {
          'grid-cols-[300px_1fr_0fr] ease-emphasized-accelerate':
            !isNoteExpanded,
        },
      )}>
      <aside className="h-full w-full overflow-scroll px-3 pt-3">
        <NavigationDrawer />
      </aside>
      <section className="relative h-full w-full gap-3">
        <Outlet />
      </section>
      <section
        className={cn(
          'grid scale-95 grid-rows-[max-content_1fr] overflow-hidden pb-4 pr-4 pt-4 opacity-0 transition-all delay-[50ms] duration-200',
          {
            'scale-100 opacity-100 delay-0': isNoteExpanded,
          },
        )}>
        <ExpandedNote />
      </section>
    </main>
  );
};

export default NotesLayout;
