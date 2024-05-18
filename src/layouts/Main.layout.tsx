import React from "react";
import { Outlet } from "react-router-dom";

interface MainLayoutProps {
  CoreHeader?: JSX.Element;
}

export const MainLayout = React.forwardRef<HTMLDivElement, MainLayoutProps>(({ CoreHeader }, ref) => {
  return (
    <div ref={ref}>
      <div className="mx-auto flex max-w-[475px]">
        {CoreHeader}
        <Outlet />
      </div>
    </div>
  );
});
