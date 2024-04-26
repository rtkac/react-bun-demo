import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

import { TranslationsBoundary } from '@boundaries';

// eslint-disable-next-line react-refresh/only-export-components
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <TranslationsBoundary>{children}</TranslationsBoundary>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';
export { customRender as render };
