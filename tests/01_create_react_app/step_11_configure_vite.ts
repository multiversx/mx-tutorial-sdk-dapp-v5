import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { waitForStepCompletion } from "../../utils/progress-helper";
import { basename } from "path";
import { terminal } from "../helpers";

export async function step13ConfigureVite(page: Page): Promise<void> {
  // Display starting message with typewriter effect
  await createTypewriterMessage(
    page,
    "Installing Vite configuration dependencies..."
  );

  await terminal.show(page, "01_create_react_app");
  await page.keyboard.type("./step_11_configure_vite.sh");
  await page.keyboard.press("Enter");
  await waitForStepCompletion(page, basename(__filename, ".ts"));

  console.log("Vite configuration dependencies installed successfully");
}
