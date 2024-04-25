import React from 'react';
import { Outlet } from 'react-router-dom';

export const MainLayout = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref}>
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4 py-8">
        <Outlet />
      </div>
    </div>
  );
});
