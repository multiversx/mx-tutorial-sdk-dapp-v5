import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";

export async function step13ConfigureVite(page: Page): Promise<void> {
  // Display starting message with typewriter effect
  await createTypewriterMessage(
    page,
    "Installing Vite configuration dependencies..."
  );

  await page.keyboard.type("./step_13_configure_vite.sh");
  await page.keyboard.press("Enter");
  await page.waitForTimeout(5000);

  console.log("Vite configuration dependencies installed successfully");
}
