import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { navigateToFile, waitFor } from "../helpers";

export async function step01InitApp(page: Page): Promise<void> {
  await createTypewriterMessage(page, "🚀 Starting to interact with sdk-dapp");
  await page.waitForTimeout(1000);

  await createTypewriterMessage(
    page,
    "Updating main.tsx with sdk-dapp initialization..."
  );

  await navigateToFile(page, "src/main.tsx");
  await waitFor(1000);

  await createTypewriterMessage(page, "Replacing main.tsx content...");

  await page.evaluate(() => {
    navigator.clipboard.writeText(
      `import { StrictMode } from 'react';
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
});`
    );
  });
  await waitFor(300);

  await page.keyboard.press("Meta+a");
  await waitFor(1000);

  await page.keyboard.press("Meta+v");
  await page.keyboard.press("Meta+s");
  await waitFor(1000);

  await createTypewriterMessage(
    page,
    "✅ Wrapping our app in sdk-dapp `initApp` completed!"
  );

  // ends with src/main.tsx updated, terminal closed

  console.log("SDK initialization completed");
}
