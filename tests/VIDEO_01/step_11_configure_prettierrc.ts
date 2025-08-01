import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { createNewFile } from "../helpers/createNewFile";
import { waitFor } from "../helpers/waitFor";

export async function step11ConfigurePrettierrc(page: Page): Promise<void> {
  // Display starting message with typewriter effect
  await createTypewriterMessage(
    page,
    "Creating Prettier configuration file..."
  );

  await createNewFile(page, "../.prettierrc");

  await createTypewriterMessage(
    page,
    "Paste Prettier configuration from clipboard..."
  );

  await page.evaluate(() => {
    navigator.clipboard.writeText(
      `{
  "singleQuote": true,
  "jsxSingleQuote": true,
  "semi": true,
  "tabWidth": 2,
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "arrowParens": "always",
  "trailingComma": "none"
}`
    );
  });
  await page.keyboard.press("Meta+v");
  await page.keyboard.press("Meta+s");

  await waitFor(1000);
  await createTypewriterMessage(page, "Done! 🎉");

  console.log("Prettier configuration file created successfully");
}
