import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { waitFor } from "../helpers";

export async function step16StartDevServer(page: Page): Promise<void> {
  // Display starting message with typewriter effect
  await createTypewriterMessage(page, "Starting the development server...");

  await page.keyboard.type("./step_16_start_dev_server.sh");
  await page.keyboard.press("Enter");
  // await waitForStepCompletion(page, basename(__filename, ".ts"));
  await waitFor(4000);

  console.log("Development server started successfully");
}
