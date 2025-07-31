import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";

export async function step15ConfigureTsconfig(page: Page): Promise<void> {
  // Display starting message with typewriter effect
  await createTypewriterMessage(
    page,
    "Creating TypeScript configuration file..."
  );

  await page.keyboard.type("./step_15_configure_tsconfig.sh");
  await page.keyboard.press("Enter");
  await page.waitForTimeout(2000);

  console.log("TypeScript configuration file created successfully");
}
