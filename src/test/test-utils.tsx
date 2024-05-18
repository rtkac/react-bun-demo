import { expect } from "bun:test";
import type React from "react";
import type { ReactElement } from "react";
import { render, type RenderOptions } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";
import { TranslationsBoundary } from "@boundaries";

expect.extend(matchers);

// eslint-disable-next-line react-refresh/only-export-components
const AllTheProviders = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <TranslationsBoundary>{children}</TranslationsBoundary>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
  render(ui, {
    wrapper: AllTheProviders,
    ...options,
  });

// eslint-disable-next-line react-refresh/only-export-components
export * from "@testing-library/react";
export { customRender as render };
