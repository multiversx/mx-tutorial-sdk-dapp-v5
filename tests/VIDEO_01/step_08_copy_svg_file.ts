import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";

export async function step08CopySvgFile(page: Page): Promise<void> {
  // Display starting message with typewriter effect
  await createTypewriterMessage(
    page,
    "Copying MultiversX logo SVG file to the project..."
  );

  await page.keyboard.type("./step_08_copy_svg_file.sh");
  await page.keyboard.press("Enter");
  await page.waitForTimeout(2000);

  console.log("SVG file copied successfully");
}
