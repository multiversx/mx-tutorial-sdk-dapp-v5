import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";

export async function step14ConfigureViteConfig(page: Page): Promise<void> {
  // Display starting message with typewriter effect
  await createTypewriterMessage(page, "Creating Vite configuration file...");

  await page.keyboard.type("./step_14_configure_vite_config.sh");
  await page.keyboard.press("Enter");
  await page.waitForTimeout(2000);

  console.log("Vite configuration file created successfully");
}
