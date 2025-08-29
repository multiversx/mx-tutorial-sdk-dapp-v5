import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { createNewFile, navigateToFile, waitFor } from "../helpers";

export async function step03CreateRoutesFolder(page: Page): Promise<void> {
  await waitFor(2000);

  await createTypewriterMessage(page, "Creating routes folder...");

  await navigateToFile(page, "package.json");

  await waitFor(1000);

  const newFolder = "src/routes";
  await createNewFile(page, newFolder, Boolean(newFolder));
  await waitFor(1000);

  console.log("Routes folder creation completed");
}
