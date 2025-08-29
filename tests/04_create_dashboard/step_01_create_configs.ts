import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import {
  createNewFile,
  navigateToFile,
  terminal,
  textEdit,
  waitFor,
} from "../helpers";
import { humanType, typeAndEnter } from "../../utils/type-helper";

export async function step01CreateConfigs(page: Page): Promise<void> {
  await createTypewriterMessage(page, "🏗️ Building Dashboard with Widgets");
  await waitFor(2000);

  await createTypewriterMessage(page, "Creating configs for our dApp...");

  await waitFor(1000);

  //   Create config directory
  const configFolder = "config";
  await createNewFile(page, configFolder, Boolean(configFolder));
  await waitFor(1000);

  // Create config.devnet.ts
  await createTypewriterMessage(page, "Creating devnet configuration...");

  await createNewFile(page, "config/config.devnet.ts");

  await typeAndEnter(
    page,
    `import { EnvironmentsEnum } from '@multiversx/sdk-dapp/out/types/enums.types';`
  );

  await createTypewriterMessage(
    page,
    "Paste contract address from clipboard..."
  );

  await page.keyboard.press("Enter");

  await textEdit(page).pasteText(
    `export const contractAddress =
      'erd1qqqqqqqqqqqqqpgqm6ad6xrsjvxlcdcffqe8w58trpec09ug9l5qde96pq';
    export const environment = EnvironmentsEnum.devnet;`
  );

  await page.keyboard.press("Meta+s");
  await waitFor(1000);

  // Create config index.ts
  await createTypewriterMessage(page, "Creating config index file...");

  await createNewFile(page, "index.ts");
  await humanType(page, "export * from './config.devnet';");
  await page.keyboard.press("Meta+s");
  await waitFor(1000);

  // edit package.json
  await createTypewriterMessage(page, "Adding new scripts to package.json...");
  await navigateToFile(page, "package.json");
  await terminal.hide(page);
  await waitFor(1000);

  await textEdit(page).newLineAt(8);
  await typeAndEnter(
    page,
    `"start-devnet": "yarn run copy-devnet-config & vite dev",`
  );
  await humanType(
    page,
    `"copy-devnet-config": "cp ./src/config/config.devnet.ts ./src/config/index.ts",`
  );
  // format
  await waitFor(500);
  await page.keyboard.press("Alt+Shift+f");

  await page.keyboard.press("Meta+s");
  await waitFor(1000);

  // ends with package.json line 9, terminal closed

  console.log("Configs creation completed");
}
