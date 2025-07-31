import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { clickLocator } from "../helpers/clickLocator";
import { waitForStepCompletion } from "../../utils/progress-helper";
import { basename } from "path";

export async function step05AddTailwindConfig(page: Page): Promise<void> {
  // Display starting message with typewriter effect
  await createTypewriterMessage(
    page,
    "Creating Tailwind CSS configuration file..."
  );

  await page.keyboard.type("./step_05_add_tailwind_config.sh");
  await page.keyboard.press("Enter");
  await page.keyboard.press("Control+`");

  await page.waitForTimeout(2000);
  await clickLocator(page, "tailwind.config.js");
  await createTypewriterMessage(
    page,
    "Tailwind CSS configuration looks good 👍"
  );
  await waitForStepCompletion(page, basename(__filename, ".ts"));

  console.log("Tailwind configuration file created successfully");
}
