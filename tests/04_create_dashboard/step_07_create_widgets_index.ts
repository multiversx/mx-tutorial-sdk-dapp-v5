import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { createNewFile, waitFor } from "../helpers";

export async function step07CreateWidgetsIndex(page: Page): Promise<void> {
  await createTypewriterMessage(page, "Creating widgets index.ts file...");
  await createNewFile(page, "index.ts");
  await waitFor(1000);

  await createTypewriterMessage(page, "Paste widgets index content...");

  await page.evaluate(() => {
    navigator.clipboard.writeText(
      `export * from './Account';
export * from './PingPongAbi';`
    );
  });
  await page.keyboard.press("Meta+v");
  await page.keyboard.press("Meta+s");
  await waitFor(1000);

  await createTypewriterMessage(page, "Done! 🎉");

  // ends with src/pages/Dashboard/widgets/index.ts, terminal closed

  console.log("Widgets index file creation completed");
}
