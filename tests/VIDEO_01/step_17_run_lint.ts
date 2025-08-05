import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { waitForStepCompletion } from "../../utils/progress-helper";
import { basename } from "path";
import { terminal } from "../helpers";

export async function step17RunLint(page: Page): Promise<void> {
  // Display starting message with typewriter effect
  await createTypewriterMessage(
    page,
    "Running linting and creating a new commit..."
  );

  await terminal.show(page, "VIDEO_01");
  await page.keyboard.type("./step_17_run_lint.sh");
  await page.keyboard.press("Enter");
  await waitForStepCompletion(page, basename(__filename, ".ts"));

  console.log("Linting and formatting completed successfully");
}
