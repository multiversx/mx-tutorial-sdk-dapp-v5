import { Page } from "@playwright/test";
import { smoothClick } from "../../utils/mouse-helper";

export async function step02InstallDependencies(page: Page): Promise<void> {
  // smoothly move to package.json (visual mouse is auto-injected and removed)
  const packageJsonElement = page.locator("text=package.json");
  await smoothClick(page, packageJsonElement);
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
