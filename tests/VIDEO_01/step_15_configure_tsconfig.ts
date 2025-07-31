import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { clickLocator } from "../helpers/clickLocator";
import { openTutorialVideoTerminal } from "../helpers/openTutorialVideoTerminal";

export async function step15ConfigureTsconfig(page: Page): Promise<void> {
  // Display starting message with typewriter effect
  await createTypewriterMessage(
    page,
    "Creating TypeScript configuration file..."
  );

  await page.keyboard.type("./step_15_configure_tsconfig.sh");
  await page.keyboard.press("Enter");
  await page.keyboard.press("Control+`");

  await page.waitForTimeout(2000);
  await clickLocator(page, "tsconfig.json");
  await createTypewriterMessage(page, "TypeScript configuration looks good 👍");
  await openTutorialVideoTerminal(page, "VIDEO_01");
  await page.waitForTimeout(4000);

  console.log("TypeScript configuration file created successfully");
}
