import { Page } from "@playwright/test";
import { terminal } from "../helpers";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { waitForStepCompletion } from "../../utils/progress-helper";
import { basename } from "path";

export async function step06CreatePingpongWidget(page: Page): Promise<void> {
  await page.waitForTimeout(2000);

  await createTypewriterMessage(page, "Creating the PingPongAbi widget...");

  await page.waitForTimeout(1000);

  await terminal.show(page, "VIDEO_04");

  await page.keyboard.type("./step_06_create_pingpong_widget.sh");
  await page.keyboard.press("Enter");

  await waitForStepCompletion(page, basename(__filename, ".ts"));

  console.log("PingPongAbi widget creation completed");
}
