import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";

export async function step05AddTailwindConfig(page: Page): Promise<void> {
  // Display starting message with typewriter effect
  await createTypewriterMessage(
    page,
    "Creating Tailwind CSS configuration file..."
  );

  await page.keyboard.type("./step_05_add_tailwind_config.sh");
  await page.keyboard.press("Enter");
  await page.waitForTimeout(2000);

  console.log("Tailwind configuration file created successfully");
}
