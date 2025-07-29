import { Page } from "@playwright/test";

export async function step03InstallTailwind(page: Page): Promise<void> {
  await page.keyboard.type(
    "cd /Users/tudor/Work/test/ping-pong-tutorial/tutorial/VIDEO_01"
  );
  await page.keyboard.press("Enter");
  await page.keyboard.type("./step_03_install_tailwind.sh");
  await page.keyboard.press("Enter");
  console.log("Executing step_03_install_tailwind.sh...");
}
