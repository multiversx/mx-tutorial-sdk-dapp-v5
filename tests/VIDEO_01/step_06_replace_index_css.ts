import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { navigateToFile, terminal, waitFor } from "../helpers";

export async function step07ReplaceIndexCss(page: Page): Promise<void> {
  // Display starting message with typewriter effect
  await createTypewriterMessage(page, "Replacing index.css contents...");

  await terminal.hide(page);

  await navigateToFile(page, "src/index.css");
  await waitFor(500);

  await page.keyboard.press("Meta+a");
  await waitFor(1500);
  await page.keyboard.press("Backspace");
  await waitFor(1500);

  await createTypewriterMessage(
    page,
    "Paste index.css contents from clipboard..."
  );

  await page.evaluate(() => {
    navigator.clipboard
      .writeText(`@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

* {
  font-family: 'Inter', sans-serif;
}`);
  });

  await page.keyboard.press("Meta+v");
  await page.keyboard.press("Meta+s");

  await createTypewriterMessage(page, "Index.css updated 👍");

  console.log("Index.css updated with Tailwind directives successfully");
}
