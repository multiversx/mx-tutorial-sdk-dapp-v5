import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { waitForStepCompletion } from "../../utils/progress-helper";
import { basename } from "path";
import { openTutorialVideoTerminal } from "../helpers/openTutorialVideoTerminal";
import { waitFor } from "../helpers/waitFor";

export async function step04InstallTailwind(page: Page): Promise<void> {
  // Display starting message with typewriter effect
  await createTypewriterMessage(
    page,
    "Installing Tailwind CSS and its dependencies..."
  );

  await page.keyboard.press("Control+`");
  await waitFor(500);
  await openTutorialVideoTerminal(page, "VIDEO_01");

  await page.keyboard.type("./step_04_install_tailwind.sh");
  await page.keyboard.press("Enter");
  await waitForStepCompletion(page, basename(__filename, ".ts"));

  console.log("Tailwind CSS installed successfully");
}
