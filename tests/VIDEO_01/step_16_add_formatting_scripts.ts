import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { navigateToFile, terminal } from "../helpers";
import { typeAndEnter } from "../../utils/type-helper";

export async function step16AddFormattingScripts(page: Page): Promise<void> {
  // Display starting message with typewriter effect
  await createTypewriterMessage(
    page,
    "Adding formatting scripts to package.json..."
  );

  await navigateToFile(page, "package.json");
  await terminal.hide(page);

  await page.waitForTimeout(2000);

  await page.keyboard.press("Control+g");
  await page.waitForTimeout(500);
  await typeAndEnter(page, "9");
  await page.waitForTimeout(500);
  await page.keyboard.press("Meta+Shift+ArrowRight");
  await page.waitForTimeout(500);
  await page.keyboard.press("Meta+Backspace");
  await page.waitForTimeout(500);
  await page.evaluate(() => {
    navigator.clipboard.writeText(
      `    "lint": "eslint --ext js,ts,tsx src --fix && prettier --write . --ignore-path .gitignore --ignore-pattern 'public/*' --ignore-pattern 'node_modules/**' --ignore-pattern 'yarn.lock'",`
    );
  });
  await page.keyboard.press("Meta+v");
  await page.keyboard.press("Meta+ArrowLeft");
  await page.waitForTimeout(500);
  await page.keyboard.press("Alt+Shift+f");
  await page.waitForTimeout(500);

  await page.keyboard.press("Meta+s");

  console.log("Formatting scripts added to package.json successfully");
}
