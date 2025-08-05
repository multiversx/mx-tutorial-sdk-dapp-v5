import { Page } from "@playwright/test";
import { terminal } from "../helpers";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { waitForStepCompletion } from "../../utils/progress-helper";
import { basename } from "path";

export async function step02CreateLibStructure(page: Page): Promise<void> {
  await page.waitForTimeout(2000);

  await createTypewriterMessage(
    page,
    "Creating lib folder structure for SDK re-exports..."
  );

  await page.waitForTimeout(1000);

  await terminal.show(page, "VIDEO_03");

  await page.keyboard.type("./step_02_create_lib_structure.sh");
  await page.keyboard.press("Enter");

  await waitForStepCompletion(page, basename(__filename, ".ts"));

  console.log("Lib folder structure creation completed");
}
