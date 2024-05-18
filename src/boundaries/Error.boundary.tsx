import { DefaultHeader } from "@components";
import { useRouteError } from "react-router-dom";
import { NotFound } from "src/pages/not-found/NotFound";

export const ErrorBoundary = () => {
  const error = useRouteError();

  if ((error as any).status === 400) {
    return (
      <>
        <DefaultHeader />
        <NotFound />
      </>
    );
  }

  return (
    <>
      <DefaultHeader />
      <NotFound />
    </>
  );
};
