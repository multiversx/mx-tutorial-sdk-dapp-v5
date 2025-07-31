import { Page } from "@playwright/test";
import { openTutorialVideoTerminal } from "../helpers/openTutorialVideoTerminal";
import { createTypewriterMessage } from "../../utils/typewriter-helper";

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

  // Additional wait to ensure everything is settled
  await page.waitForTimeout(2000);

  console.log("Project creation script completed");
}
