import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";

export async function step17RunLint(page: Page): Promise<void> {
  // Display starting message with typewriter effect
  await createTypewriterMessage(
    page,
    "Running linting and formatting on the project..."
  );

  await page.keyboard.type("./step_17_run_lint.sh");
  await page.keyboard.press("Enter");
  await page.waitForTimeout(5000);

  console.log("Linting and formatting completed successfully");
}
