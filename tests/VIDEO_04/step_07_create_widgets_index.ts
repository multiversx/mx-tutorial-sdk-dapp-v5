import { Page } from "@playwright/test";
import { terminal } from "../helpers";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { waitForStepCompletion } from "../../utils/progress-helper";
import { basename } from "path";

export async function step07CreateWidgetsIndex(page: Page): Promise<void> {
  await page.waitForTimeout(2000);

  await createTypewriterMessage(page, "Creating widgets index file...");

  await page.waitForTimeout(1000);

  await terminal.show(page, "VIDEO_04");

  await page.keyboard.type("./step_07_create_widgets_index.sh");
  await page.keyboard.press("Enter");

  await waitForStepCompletion(page, basename(__filename, ".ts"));

  console.log("Widgets index file creation completed");
}
