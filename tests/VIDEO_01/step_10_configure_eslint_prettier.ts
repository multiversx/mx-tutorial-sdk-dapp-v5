import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";

export async function step10ConfigureEslintPrettier(page: Page): Promise<void> {
  // Display starting message with typewriter effect
  await createTypewriterMessage(
    page,
    "Installing ESLint and Prettier for code formatting..."
  );

  await page.keyboard.type("./step_10_configure_eslint_prettier.sh");
  await page.keyboard.press("Enter");
  await page.waitForTimeout(8000);

  console.log("ESLint and Prettier installed successfully");
}
