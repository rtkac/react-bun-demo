// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { expect } from "bun:test";
import type { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";

declare module "bun:test" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  interface Matchers<T = any> extends TestingLibraryMatchers<ReturnType, T> {}
}
