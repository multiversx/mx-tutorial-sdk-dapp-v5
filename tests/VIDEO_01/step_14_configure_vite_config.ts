import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { clickLocator } from "../helpers/clickLocator";
import { openTutorialVideoTerminal } from "../helpers/openTutorialVideoTerminal";

export async function step14ConfigureViteConfig(page: Page): Promise<void> {
  // Display starting message with typewriter effect
  await createTypewriterMessage(page, "Creating Vite configuration file...");

  await page.keyboard.type("./step_14_configure_vite_config.sh");
  await page.keyboard.press("Enter");
  await page.keyboard.press("Control+`");

  await page.waitForTimeout(2000);
  await clickLocator(page, "vite.config.ts");
  await createTypewriterMessage(page, "Vite configuration looks good 👍");
  await openTutorialVideoTerminal(page, "VIDEO_01");
  await page.waitForTimeout(4000);

  console.log("Vite configuration file created successfully");
}
