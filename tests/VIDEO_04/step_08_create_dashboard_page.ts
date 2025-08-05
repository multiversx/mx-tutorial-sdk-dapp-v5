import { Page } from "@playwright/test";
import { terminal } from "../helpers";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { waitForStepCompletion } from "../../utils/progress-helper";
import { basename } from "path";

export async function step08CreateDashboardPage(page: Page): Promise<void> {
  await page.waitForTimeout(2000);

  await createTypewriterMessage(page, "Creating the Dashboard page...");

  await page.waitForTimeout(1000);

  await terminal.show(page, "VIDEO_04");

  await page.keyboard.type("./step_08_create_dashboard_page.sh");
  await page.keyboard.press("Enter");

  await waitForStepCompletion(page, basename(__filename, ".ts"));

  console.log("Dashboard page creation completed");
}
