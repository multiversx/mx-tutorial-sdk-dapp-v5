import { Page } from "@playwright/test";
import { openTutorialVideoTerminal } from "../helpers/openTutorialVideoTerminal";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { waitForStepCompletion } from "../../utils/progress-helper";
import { basename } from "path";

export async function step05CreateLayoutComponent(page: Page): Promise<void> {
  await page.waitForTimeout(2000);

  await createTypewriterMessage(page, "Creating Layout component...");

  await page.waitForTimeout(1000);

  await openTutorialVideoTerminal(page, "VIDEO_02");

  await page.keyboard.type("./step_05_create_layout_component.sh");
  await page.keyboard.press("Enter");

  await waitForStepCompletion(page, basename(__filename, ".ts"));

  console.log("Layout component creation completed");
}
