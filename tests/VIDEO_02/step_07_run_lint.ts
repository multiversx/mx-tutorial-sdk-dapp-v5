import { Page } from "@playwright/test";
import { terminal } from "../helpers";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { waitForStepCompletion } from "../../utils/progress-helper";
import { basename } from "path";

export async function step07RunLint(page: Page): Promise<void> {
  await page.waitForTimeout(2000);

  await createTypewriterMessage(
    page,
    "Running linting and creating a new commit..."
  );

  await page.waitForTimeout(1000);

  await terminal.show(page, "VIDEO_02");

  await page.keyboard.type("./step_07_run_lint.sh");
  await page.keyboard.press("Enter");

  await waitForStepCompletion(page, basename(__filename, ".ts"));

  await terminal.hide(page);

  console.log("Lint execution completed");
}
