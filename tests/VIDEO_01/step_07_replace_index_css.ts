import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { clickLocator } from "../helpers/clickLocator";
import { waitForStepCompletion } from "../../utils/progress-helper";
import { basename } from "path";

export async function step07ReplaceIndexCss(page: Page): Promise<void> {
  // Display starting message with typewriter effect
  await createTypewriterMessage(
    page,
    "Replacing index.css with Tailwind directives..."
  );

  await page.keyboard.type("./step_07_replace_index_css.sh");
  await page.keyboard.press("Enter");
  await page.keyboard.press("Control+`");

  await page.waitForTimeout(2000);
  await clickLocator(page, "src");
  await page.waitForTimeout(1000);
  await clickLocator(page, "index.css");
  await createTypewriterMessage(
    page,
    "Index.css updated with Tailwind directives successfully"
  );
  await waitForStepCompletion(page, basename(__filename, ".ts"));

  console.log("Index.css updated with Tailwind directives successfully");
}
