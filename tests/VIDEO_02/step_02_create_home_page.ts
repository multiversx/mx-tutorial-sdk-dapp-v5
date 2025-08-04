import { Page } from "@playwright/test";
import { openTutorialVideoTerminal } from "../helpers/openTutorialVideoTerminal";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { waitForStepCompletion } from "../../utils/progress-helper";
import { basename } from "path";

export async function step02CreateHomePage(page: Page): Promise<void> {
  await page.waitForTimeout(2000);

  await createTypewriterMessage(
    page,
    "Creating pages folder and Home page component..."
  );

  await page.waitForTimeout(1000);

  await openTutorialVideoTerminal(page, "VIDEO_02");

  await page.keyboard.type("./step_02_create_home_page.sh");
  await page.keyboard.press("Enter");

  await waitForStepCompletion(page, basename(__filename, ".ts"));

  console.log("Home page creation completed");
}
