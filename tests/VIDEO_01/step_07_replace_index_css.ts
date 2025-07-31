import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";

export async function step07ReplaceIndexCss(page: Page): Promise<void> {
  // Display starting message with typewriter effect
  await createTypewriterMessage(
    page,
    "Replacing index.css with Tailwind directives..."
  );

  await page.keyboard.type("./step_07_replace_index_css.sh");
  await page.keyboard.press("Enter");
  await page.waitForTimeout(2000);

  console.log("Index.css updated with Tailwind directives successfully");
}
