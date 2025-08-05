import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { createNewFile, navigateToFile, textEdit, waitFor } from "../helpers";
import { humanType } from "../../utils/type-helper";

export async function step09ExportDashboard(page: Page): Promise<void> {
  await createTypewriterMessage(page, "Creating Dashboard index.ts file...");
  await createNewFile(page, "index.ts");
  await waitFor(1000);

  await createTypewriterMessage(page, "Export Dashboard page...");

  await humanType(page, "export * from './Dashboard';");
  await page.keyboard.press("Meta+s");
  await waitFor(1000);

  // Update pages index.ts file
  await createTypewriterMessage(page, "Updating pages index.ts file...");
  await navigateToFile(page, "src/pages/index.ts");
  await waitFor(1000);

  await textEdit(page).newLineAt(1);

  await humanType(page, "export * from './Dashboard';");
  await page.keyboard.press("Meta+s");
  await waitFor(1000);

  await createTypewriterMessage(page, "Done! 🎉");

  // ends with Dashboard exports created, terminal closed

  console.log("Dashboard page export completed");
}
