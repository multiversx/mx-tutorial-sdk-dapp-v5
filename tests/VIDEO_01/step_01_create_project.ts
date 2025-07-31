import { Page } from "@playwright/test";
import { openTutorialVideoTerminal } from "../helpers/openTutorialVideoTerminal";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { waitForStepCompletion } from "../../utils/progress-helper";
import { basename } from "path";

export async function step01CreateProject(page: Page): Promise<void> {
  // Display starting message with typewriter effect
  await createTypewriterMessage(
    page,
    "Opening terminal and initializing project..."
  );

  // Wait a moment for terminal to be fully ready
  await page.waitForTimeout(1000);

  // Navigate to tutorial directory and run the script
  await openTutorialVideoTerminal(page, "VIDEO_01");

  await page.keyboard.type("./step_01_create_project.sh");
  await page.keyboard.press("Enter");

  await waitForStepCompletion(page, basename(__filename, ".ts"));

  console.log("Project creation script completed");
}
