import { StrictMode } from 'react';
import { initApp } from '@multiversx/sdk-dapp/out/methods/initApp/initApp';
import type { InitAppType } from '@multiversx/sdk-dapp/out/methods/initApp/initApp.types';
import { EnvironmentsEnum } from '@multiversx/sdk-dapp/out/types/enums.types';
import { createRoot } from 'react-dom/client';
import App from './App';

import './index.css';
import './tailwind.css';

const config: InitAppType = {
  storage: { getStorageCallback: () => localStorage },
  dAppConfig: {
    environment: EnvironmentsEnum.devnet,
    theme: 'mvx:light-theme'
  }
};

initApp(config).then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
