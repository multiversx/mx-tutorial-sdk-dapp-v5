import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { waitForStepCompletion } from "../../utils/progress-helper";
import { basename } from "path";
import { terminal } from "../helpers";

export async function step04InstallTailwind(page: Page): Promise<void> {
  // Display starting message with typewriter effect
  await createTypewriterMessage(
    page,
    "Installing Tailwind CSS and its dependencies..."
  );

  await terminal.show(page, "01_create_react_app");

  await page.keyboard.type("./step_03_install_tailwind.sh");
  await page.keyboard.press("Enter");
  await waitForStepCompletion(page, basename(__filename, ".ts"));

  console.log("Tailwind CSS installed successfully");
}
