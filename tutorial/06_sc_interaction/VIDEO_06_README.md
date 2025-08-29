# Building a dApp from scratch with React, Tailwind, @multiversx/sdk-core and @multiversx/sdk-dapp.

## Overview

This is the scenario description for integrating the MultiversX SDK components and implementing authentication flow.

Video 6:
Integrating SDK components and implementing authentication.

### Step 1: Initialize SDK in main.tsx

First, we need to initialize the MultiversX SDK in the main.tsx file. This sets up the SDK configuration and environment before the app renders.

Update the main.tsx file with the following content:

```tsx
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
    environment: EnvironmentsEnum.devnet
  }
};

initApp(config).then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
```

### Step 2: Update Unlock component and Header navigation

The Unlock component needs to be updated to integrate with the MultiversX SDK for authentication. This component will handle the wallet connection flow and navigation.

Update the Unlock.tsx file with the following content:

```tsx
import { useEffect } from 'react';
import { UnlockPanelManager } from '@multiversx/sdk-dapp/out/managers/UnlockPanelManager';
import { useGetIsLoggedIn } from '@multiversx/sdk-dapp/out/react/account/useGetIsLoggedIn';
import { useNavigate } from 'react-router-dom';
import { RouteNamesEnum } from 'routes';

export const Unlock = () => {
  const navigate = useNavigate();
  const isLoggedIn = useGetIsLoggedIn();

  const unlockPanelManager = UnlockPanelManager.init({
    loginHandler: () => {
      navigate(RouteNamesEnum.dashboard);
    },
    onClose: () => {
      navigate(RouteNamesEnum.home);
    }
  });

  const handleOpenUnlockPanel = () => {
    unlockPanelManager.openUnlockPanel();
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate(RouteNamesEnum.dashboard);
      return;
    }
    handleOpenUnlockPanel();
  }, [isLoggedIn]);

  return null;
};
```

Finally, we need to update the Header component to navigate to the unlock route instead of the dashboard route.

In the Header.tsx file, replace:

```tsx
navigate(RouteNamesEnum.dashboard); // TODO: replace with navigate(RouteNamesEnum.unlock);
```

with:

```tsx
navigate(RouteNamesEnum.unlock);
```
