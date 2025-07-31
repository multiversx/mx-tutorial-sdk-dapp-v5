import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { clickLocator } from "../helpers/clickLocator";
import { openTutorialVideoTerminal } from "../helpers/openTutorialVideoTerminal";
import { waitForStepCompletion } from "../../utils/progress-helper";
import { basename } from "path";

export async function step06AddPostcssConfig(page: Page): Promise<void> {
  // Display starting message with typewriter effect
  await createTypewriterMessage(page, "Creating PostCSS configuration file...");

  await openTutorialVideoTerminal(page, "VIDEO_01");
  await page.keyboard.type("./step_06_add_postcss_config.sh");
  await page.keyboard.press("Enter");
  await page.keyboard.press("Control+`");

  await page.waitForTimeout(2000);
  await clickLocator(page, "postcss.config.js");
  await createTypewriterMessage(page, "PostCSS configuration looks good 👍");
  await openTutorialVideoTerminal(page, "VIDEO_01");
  await waitForStepCompletion(page, basename(__filename, ".ts"));

  console.log("PostCSS configuration file created successfully");
}
