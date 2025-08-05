import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { createNewFile, waitFor } from "../helpers";
import { humanType, typeAndEnter } from "../../utils/type-helper";

export async function step01CreateConfigs(page: Page): Promise<void> {
  //   await createTypewriterMessage(page, "🏗️ Building Dashboard with Widgets");
  //   await page.waitForTimeout(2000);

  //   await createTypewriterMessage(page, "Creating configs for our dApp...");

  //   await page.waitForTimeout(1000);

  // Create config directory
  //   const configFolder = "config";
  //   await createNewFile(page, configFolder, Boolean(configFolder));
  //   await page.waitForTimeout(1000);

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

  await page.evaluate(() => {
    navigator.clipboard.writeText(
      `export const contractAddress =
    'erd1qqqqqqqqqqqqqpgqm6ad6xrsjvxlcdcffqe8w58trpec09ug9l5qde96pq';
  export const environment = EnvironmentsEnum.devnet;`
    );
  });
  await page.keyboard.press("Meta+v");
  await page.keyboard.press("Meta+s");
  await waitFor(1000);

  //   // Create config index.ts
  //   await createNewFile(page, "src/config/index.ts");
  //   await createTypewriterMessage(page, "Creating config index file...");
  //   await humanType(page, "export * from './config.devnet';");
  //   await page.keyboard.press("Meta+s");
  //   await waitFor(1000);

  //   // Create lib/sdk-dapp directory
  //   const libFolder = "src/lib/sdk-dapp";
  //   await createNewFile(page, libFolder, Boolean(libFolder));
  //   await page.waitForTimeout(1000);

  //   // Create sdk-dapp.types.ts
  //   await createNewFile(page, "src/lib/sdk-dapp/sdk-dapp.types.ts");
  //   await createTypewriterMessage(page, "Creating SDK types file...");
  //   await page.evaluate(() => {
  //     navigator.clipboard.writeText(
  //       `export { EnvironmentsEnum } from '@multiversx/sdk-dapp/out/types/enums.types';`
  //     );
  //   });
  //   await page.keyboard.press("Meta+v");
  //   await page.keyboard.press("Meta+s");
  //   await waitFor(1000);

  //   // Update lib/sdk-dapp/index.ts
  //   await createNewFile(page, "src/lib/sdk-dapp/index.ts");
  //   await createTypewriterMessage(page, "Updating SDK index file...");
  //   await page.evaluate(() => {
  //     navigator.clipboard.writeText(
  //       `export * from './sdk-dapp.helpers';
  // export * from './sdk-dapp.types';`
  //     );
  //   });
  //   await page.keyboard.press("Meta+v");
  //   await page.keyboard.press("Meta+s");
  //   await waitFor(1000);

  //   await createTypewriterMessage(page, "Done! 🎉");

  console.log("Configs creation completed");
}
