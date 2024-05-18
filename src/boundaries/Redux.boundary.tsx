import type { PropsWithChildren } from "react";
import { Provider } from "react-redux";

import { store } from "@redux";

interface ReduxBoundaryProps extends PropsWithChildren {}

export const ReduxBoundary: React.FC<ReduxBoundaryProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
