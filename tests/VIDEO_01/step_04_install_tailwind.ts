import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";

export async function step04InstallTailwind(page: Page): Promise<void> {
  // Display starting message with typewriter effect
  await createTypewriterMessage(
    page,
    "Installing Tailwind CSS and its dependencies..."
  );

  await page.keyboard.type("./step_04_install_tailwind.sh");
  await page.keyboard.press("Enter");
  await page.waitForTimeout(8000);

  console.log("Tailwind CSS installed successfully");
}
