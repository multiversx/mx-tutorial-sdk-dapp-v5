import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { clickLocator } from "../helpers/clickLocator";
import { openTutorialVideoTerminal } from "../helpers/openTutorialVideoTerminal";
import { waitForStepCompletion } from "../../utils/progress-helper";
import { basename } from "path";

export async function step16AddFormattingScripts(page: Page): Promise<void> {
  // Display starting message with typewriter effect
  await createTypewriterMessage(
    page,
    "Adding formatting scripts to package.json..."
  );

  await page.keyboard.type("./step_16_add_formatting_scripts.sh");
  await page.keyboard.press("Enter");
  await page.keyboard.press("Control+Meta+h");

  await page.waitForTimeout(2000);
  await clickLocator(page, "package.json");
  await page.waitForTimeout(2000);
  await clickLocator(page, `"lint"`);
  await page.waitForTimeout(2000);
  await clickLocator(page, `"format"`);
  await page.waitForTimeout(2000);

  await createTypewriterMessage(
    page,
    "Formatting scripts added to package.json successfully"
  );
  await openTutorialVideoTerminal(page, "VIDEO_01");
  await waitForStepCompletion(page, basename(__filename, ".ts"));

  console.log("Formatting scripts added to package.json successfully");
}
