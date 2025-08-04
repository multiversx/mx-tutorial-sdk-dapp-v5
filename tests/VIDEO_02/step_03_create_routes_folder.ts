import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { createNewFile } from "../helpers/createNewFile";
import { navigateToFile } from "../helpers/navigateToFile";

export async function step03CreateRoutesFolder(page: Page): Promise<void> {
  await page.waitForTimeout(2000);

  await createTypewriterMessage(page, "Creating routes folder...");

  await navigateToFile(page, "package.json");

  await page.waitForTimeout(1000);

  const newFolder = "src/routes";
  await createNewFile(page, newFolder, Boolean(newFolder));
  await page.waitForTimeout(1000);

  console.log("Routes folder creation completed");
}
