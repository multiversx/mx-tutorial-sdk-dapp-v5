import { Page } from "@playwright/test";

export async function step02InstallDependencies(page: Page): Promise<void> {
  // open package.json by pressing cmd+p
  await page.keyboard.press("Meta+p");
  await page.waitForTimeout(400);
  await page.keyboard.type("package.json");
  await page.waitForTimeout(400);
  await page.keyboard.press("Enter");
  await page.waitForTimeout(4000);

  // open install dependencies script
  await page.keyboard.press("Control+`");
  await page.keyboard.type(
    "cd /Users/tudor/Work/test/ping-pong-tutorial/tutorial/VIDEO_01"
  );
  await page.keyboard.press("Enter");
  await page.keyboard.type("./step_02_install_dependencies.sh");
  await page.keyboard.press("Enter");
  console.log("Executing step_02_install_dependencies.sh...");
}
