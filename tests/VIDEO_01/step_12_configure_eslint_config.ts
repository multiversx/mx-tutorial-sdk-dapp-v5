import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";

export async function step12ConfigureEslintConfig(page: Page): Promise<void> {
  // Display starting message with typewriter effect
  await createTypewriterMessage(page, "Creating ESLint configuration file...");

  await page.keyboard.type("./step_12_configure_eslint_config.sh");
  await page.keyboard.press("Enter");
  await page.waitForTimeout(3000);

  console.log("ESLint configuration file created successfully");
}
