import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { waitForStepCompletion } from "../../utils/progress-helper";
import { basename } from "path";
import { terminal } from "../helpers";

export async function step08CopySvgFile(page: Page): Promise<void> {
  // Display starting message with typewriter effect
  await createTypewriterMessage(
    page,
    "Copying MultiversX logo SVG file to the project..."
  );

  await terminal.show(page, "01_create_react_app");
  await page.keyboard.type("./step_07_copy_svg_file.sh");
  await page.keyboard.press("Enter");
  await waitForStepCompletion(page, basename(__filename, ".ts"));

  console.log("SVG file copied successfully");
}
