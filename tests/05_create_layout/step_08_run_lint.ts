import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { terminal, waitFor } from "../helpers";
import { waitForStepCompletion } from "../../utils/progress-helper";
import { basename } from "path";

export async function step08RunLint(page: Page): Promise<void> {
  await waitFor(2000);

  await createTypewriterMessage(page, "Running lint to fix errors...");

  await waitFor(1000);

  await terminal.show(page, "05_create_layout");

  await page.keyboard.type("./step_08_run_lint.sh");
  await page.keyboard.press("Enter");

  await waitForStepCompletion(page, basename(__filename, ".ts"));

  await createTypewriterMessage(page, "✅ Lint completed successfully!");

  await terminal.hide(page);

  console.log("Lint execution completed");
}
