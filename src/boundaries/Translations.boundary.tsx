import type { PropsWithChildren } from 'react';

import { registerTranslations } from '@helpers';

registerTranslations();

interface TranslationsBoundary extends PropsWithChildren {}

export const TranslationsBoundary: React.FC<TranslationsBoundary> = ({ children }) => {
  return children;
};
