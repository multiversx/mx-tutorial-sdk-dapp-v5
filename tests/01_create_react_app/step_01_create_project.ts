import { Page } from "@playwright/test";
import { terminal } from "../helpers";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { waitForStepCompletion } from "../../utils/progress-helper";
import { basename } from "path";

export async function step01CreateProject(page: Page): Promise<void> {
  await page.waitForTimeout(2000);

  // Display starting message
  await createTypewriterMessage(
    page,
    "🚀 React + Tailwind + MultiversX dApp Setup Tutorial"
  );
  await page.waitForTimeout(2000);

  // Display starting message with typewriter effect
  await createTypewriterMessage(
    page,
    "Opening terminal and initializing project..."
  );

  // Wait a moment for terminal to be fully ready
  await page.waitForTimeout(1000);

  // Navigate to tutorial directory and run the script
  await terminal.show(page, "01_create_react_app");

  await page.keyboard.type("./step_01_create_project.sh");
  await page.keyboard.press("Enter");

  await waitForStepCompletion(page, basename(__filename, ".ts"));

  console.log("Project creation script completed");
}
