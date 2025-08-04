import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { typeAndEnter, humanType } from "../../utils/type-helper";
import { createNewFile } from "../helpers/createNewFile";
import { waitFor } from "../helpers/waitFor";
import { navigateToFile } from "../helpers/navigateToFile";

export async function step05AddTailwindConfig(page: Page): Promise<void> {
  await page.keyboard.press("Enter");
  await page.keyboard.press("Control+Meta+h");

  await createNewFile(page, "src/tailwind.css");

  await typeAndEnter(page, "@import 'tailwindcss';");

  await createTypewriterMessage(page, "Paste rest from clipboard..");

  await waitFor(1000);

  await page.evaluate(() => {
    navigator.clipboard.writeText(`
@theme {
    --background-image-mvx-white: url('../multiversx-white.svg');
}`);
  });
  await page.keyboard.press("Meta+v");
  await page.keyboard.press("Meta+s");

  await createTypewriterMessage(page, "Done! 🎉");

  await navigateToFile(page, "src/main.tsx");

  await page.keyboard.press("Control+g");
  await typeAndEnter(page, "4");
  await page.keyboard.press("Enter");
  await page.keyboard.press("ArrowUp");
  await humanType(page, "import './tailwind.css'");

  await page.keyboard.press("Meta+s");

  console.log("Tailwind configuration file created successfully");
}
