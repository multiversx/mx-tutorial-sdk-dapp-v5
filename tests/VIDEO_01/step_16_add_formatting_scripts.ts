import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";

export async function step16AddFormattingScripts(page: Page): Promise<void> {
  // Display starting message with typewriter effect
  await createTypewriterMessage(
    page,
    "Adding formatting scripts to package.json..."
  );

  await page.keyboard.type("./step_16_add_formatting_scripts.sh");
  await page.keyboard.press("Enter");
  await page.waitForTimeout(2000);

  console.log("Formatting scripts added to package.json successfully");
}
