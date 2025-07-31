import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";

export async function step11ConfigurePrettierrc(page: Page): Promise<void> {
  // Display starting message with typewriter effect
  await createTypewriterMessage(
    page,
    "Creating Prettier configuration file..."
  );

  await page.keyboard.type("./step_11_configure_prettierrc.sh");
  await page.keyboard.press("Enter");
  await page.waitForTimeout(2000);

  console.log("Prettier configuration file created successfully");
}
