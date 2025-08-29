import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { waitForStepCompletion } from "../../utils/progress-helper";
import { basename } from "path";
import { terminal } from "../helpers";

export async function step15RunLint(page: Page): Promise<void> {
  // Display starting message with typewriter effect
  await createTypewriterMessage(
    page,
    "Running linting and creating a new commit..."
  );

  await terminal.show(page, "01_create_react_app");
  await page.keyboard.type("./step_15_run_lint.sh");
  await page.keyboard.press("Enter");
  await waitForStepCompletion(page, basename(__filename, ".ts"));

  await terminal.hide(page);

  console.log("Linting and formatting completed successfully");
}
