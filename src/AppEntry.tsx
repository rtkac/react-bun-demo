import { ReduxBoundary, RouterBoundary, TranslationsBoundary } from '@boundaries';

import { Logo } from '@assets/svg';

function App() {
  return (
    <TranslationsBoundary>
      <ReduxBoundary>
        <Logo />
        <RouterBoundary />
      </ReduxBoundary>
    </TranslationsBoundary>
  );
}

export default App;
