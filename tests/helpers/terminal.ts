import { Page } from "@playwright/test";
import { waitFor } from "./waitFor";

async function openTutorialVideoTerminal(
  page: Page,
  video: string
): Promise<void> {
  await page.keyboard.press("Control+Shift+`");

  // Wait a moment for terminal to be fully ready
  await waitFor(1000);

  // Navigate to tutorial directory and run the script
  await page.keyboard.type(
    `cd /Users/tudor/Work/test/ping-pong-tutorial/tutorial/${video}`
  );
  await page.keyboard.press("Enter");
}

export const terminal = {
  hide: async (page: Page) => {
    await page.keyboard.press("Control+Meta+h");
  },
  show: openTutorialVideoTerminal,
};
