import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";

export async function step06AddPostcssConfig(page: Page): Promise<void> {
  // Display starting message with typewriter effect
  await createTypewriterMessage(page, "Creating PostCSS configuration file...");

  await page.keyboard.type("./step_06_add_postcss_config.sh");
  await page.keyboard.press("Enter");
  await page.waitForTimeout(2000);

  console.log("PostCSS configuration file created successfully");
}
