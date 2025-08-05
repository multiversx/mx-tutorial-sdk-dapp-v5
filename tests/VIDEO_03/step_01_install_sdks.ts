import { Page } from "@playwright/test";
import { terminal } from "../helpers";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { waitForStepCompletion } from "../../utils/progress-helper";
import { basename } from "path";

export async function step01InstallSdks(page: Page): Promise<void> {
  await page.waitForTimeout(2000);

  await createTypewriterMessage(page, "🚀 MultiversX SDK Setup");
  await page.waitForTimeout(2000);

  await createTypewriterMessage(
    page,
    "Installing MultiversX SDK and its dependencies..."
  );

  await page.waitForTimeout(1000);

  await terminal.show(page, "VIDEO_03");

  await page.keyboard.type("./step_01_install_sdks.sh");
  await page.keyboard.press("Enter");

  await waitForStepCompletion(page, basename(__filename, ".ts"));

  await createTypewriterMessage(page, "✅ MultiversX SDK Setup completed");

  // State: App.tsx opened with focused terminal

  console.log("MultiversX SDK installation completed");
}
