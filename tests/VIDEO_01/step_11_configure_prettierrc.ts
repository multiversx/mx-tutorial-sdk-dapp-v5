import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { clickLocator } from "../helpers/clickLocator";
import { openTutorialVideoTerminal } from "../helpers/openTutorialVideoTerminal";
import { waitForStepCompletion } from "../../utils/progress-helper";
import { basename } from "path";

export async function step11ConfigurePrettierrc(page: Page): Promise<void> {
  // Display starting message with typewriter effect
  await createTypewriterMessage(
    page,
    "Creating Prettier configuration file..."
  );

  await page.keyboard.type("./step_11_configure_prettierrc.sh");
  await page.keyboard.press("Enter");
  await page.keyboard.press("Control+`");

  await page.waitForTimeout(2000);
  await clickLocator(page, ".prettierrc");
  await page.waitForTimeout(2000);

  await createTypewriterMessage(page, "Prettier configuration looks good 👍");
  await openTutorialVideoTerminal(page, "VIDEO_01");
  await waitForStepCompletion(page, basename(__filename, ".ts"));

  console.log("Prettier configuration file created successfully");
}
