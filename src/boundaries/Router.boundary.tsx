import * as fromNav from "@navigation";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { DefaultHeader } from "@components";
import { MainLayout } from "@layouts";

import { ErrorBoundary } from "./Error.boundary";
import { Home } from "../pages/home/Home";
import { Profile } from "../pages/profile/Profile";
import { NotFound } from "../pages/not-found/NotFound";

export const RouterBoundary = () => {
  const router = createBrowserRouter([
    {
      path: fromNav.DASHBOARD,
      element: <MainLayout CoreHeader={<DefaultHeader />} />,
      children: [
        {
          path: fromNav.DASHBOARD,
          element: <Home />,
        },
      ],
    },
    {
      path: fromNav.PROFILE,
      element: <MainLayout />,
      children: [
        {
          path: fromNav.PROFILE,
          errorElement: <ErrorBoundary />,
          element: <Profile />,
        },
      ],
    },
    {
      path: fromNav.NOT_FOUND,
      element: <MainLayout CoreHeader={<DefaultHeader />} />,
      children: [
        {
          path: fromNav.NOT_FOUND,
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
