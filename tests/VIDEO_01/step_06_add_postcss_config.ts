import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { createNewFile } from "../helpers/createNewFile";
import { waitFor } from "../helpers/waitFor";

export async function step06AddPostcssConfig(page: Page): Promise<void> {
  // Display starting message with typewriter effect
  await createTypewriterMessage(page, "Creating PostCSS configuration file...");

  await createNewFile(page, "../postcss.config.js");

  await createTypewriterMessage(
    page,
    "Paste PostCSS configuration from clipboard..."
  );

  await page.evaluate(() => {
    navigator.clipboard.writeText(
      `export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {}
  }
};`
    );
  });
  await page.keyboard.press("Meta+v");
  await page.keyboard.press("Meta+s");

  await waitFor(1000);
  await createTypewriterMessage(page, "PostCSS configuration looks good 👍");

  console.log("PostCSS configuration file created successfully");
}
