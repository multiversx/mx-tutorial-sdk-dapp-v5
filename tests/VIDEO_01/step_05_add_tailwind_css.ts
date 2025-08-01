import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { typeAndEnter } from "../../utils/type-helper";
import { createNewFile } from "../helpers/createNewFile";
import { waitFor } from "../helpers/waitFor";

export async function step05AddTailwindConfig(page: Page): Promise<void> {
  await page.keyboard.press("Enter");
  await page.keyboard.press("Control+`");

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

  console.log("Tailwind configuration file created successfully");
}
