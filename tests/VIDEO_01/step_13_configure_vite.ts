import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { waitForStepCompletion } from "../../utils/progress-helper";
import { basename } from "path";
import { openTutorialVideoTerminal } from "../helpers/openTutorialVideoTerminal";

export async function step13ConfigureVite(page: Page): Promise<void> {
  // Display starting message with typewriter effect
  await createTypewriterMessage(
    page,
    "Installing Vite configuration dependencies..."
  );

  await openTutorialVideoTerminal(page, "VIDEO_01");
  await page.keyboard.type("./step_13_configure_vite.sh");
  await page.keyboard.press("Enter");
  await waitForStepCompletion(page, basename(__filename, ".ts"));

  console.log("Vite configuration dependencies installed successfully");
}
