import { Page } from "@playwright/test";
import { smoothClick } from "../../utils/mouse-helper";
import { createTypewriterMessage } from "../../utils/typewriter-helper";

export async function step02InstallDependencies(page: Page): Promise<void> {
  // Display starting message with typewriter effect
  await createTypewriterMessage(page, "Inspecting package.json file");
  await page.keyboard.press("Control+`");
  await page.waitForTimeout(2000);

  // smoothly move to package.json (visual mouse is auto-injected and removed)
  const packageJsonElement = page.locator("text=package.json");
  await smoothClick(page, packageJsonElement);
  await createTypewriterMessage(page, "The package.json file looks good 👍");
  await page.waitForTimeout(1000);

  await createTypewriterMessage(page, "Continuing to install dependencies...");
  await page.waitForTimeout(1000);

  // open install dependencies script
  await page.keyboard.press("Control+`");
  await page.keyboard.type(
    "cd /Users/tudor/Work/test/ping-pong-tutorial/tutorial/VIDEO_01"
  );
  await page.keyboard.press("Enter");
  await page.keyboard.type("./step_02_install_dependencies.sh");
  await page.keyboard.press("Enter");
  await page.waitForTimeout(12000);

  console.log("Executing step_02_install_dependencies.sh...");
}
