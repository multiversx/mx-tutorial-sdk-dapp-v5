import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { waitForStepCompletion } from "../../utils/progress-helper";
import { basename } from "path";

export async function step18StartDevServer(page: Page): Promise<void> {
  // Display starting message with typewriter effect
  await createTypewriterMessage(page, "Starting the development server...");

  await page.keyboard.type("./step_18_start_dev_server.sh");
  await page.keyboard.press("Enter");
  await waitForStepCompletion(page, basename(__filename, ".ts"));

  console.log("Development server started successfully");
}
