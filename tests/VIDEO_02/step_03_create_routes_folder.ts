import { Page } from "@playwright/test";
import { openTutorialVideoTerminal } from "../helpers/openTutorialVideoTerminal";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { waitForStepCompletion } from "../../utils/progress-helper";
import { basename } from "path";

export async function step03CreateRoutesFolder(page: Page): Promise<void> {
  await page.waitForTimeout(2000);

  await createTypewriterMessage(page, "Creating routes folder structure...");

  await page.waitForTimeout(1000);

  await openTutorialVideoTerminal(page, "VIDEO_02");

  await page.keyboard.type("./step_03_create_routes_folder.sh");
  await page.keyboard.press("Enter");

  await waitForStepCompletion(page, basename(__filename, ".ts"));

  console.log("Routes folder creation completed");
}
