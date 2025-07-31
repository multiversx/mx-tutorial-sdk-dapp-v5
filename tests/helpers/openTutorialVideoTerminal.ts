import { Page } from "@playwright/test";

export async function openTutorialVideoTerminal(
  page: Page,
  video: string
): Promise<void> {
  await page.keyboard.press("Control+`");

  // Wait a moment for terminal to be fully ready
  await page.waitForTimeout(1000);

  // Navigate to tutorial directory and run the script
  await page.keyboard.type(
    `cd /Users/tudor/Work/test/ping-pong-tutorial/tutorial/${video}`
  );
  await page.keyboard.press("Enter");
}
