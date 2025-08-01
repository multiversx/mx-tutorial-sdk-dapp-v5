import { Page } from "@playwright/test";
import { waitFor } from "./waitFor";

export const createNewFile = async (page: Page, path: string) => {
  const parts = path.split("/");

  await page.keyboard.press("Meta+Shift+P");
  await waitFor(500);

  await page.keyboard.type("New file");
  await waitFor(500);

  await page.keyboard.press("Enter");
  await waitFor(500);

  for (const part of parts) {
    await page.keyboard.type(part);
    await waitFor(500);
  }

  await page.keyboard.press("Tab");
  await waitFor(500);

  await page.keyboard.press("Space");
  await waitFor(300);

  await page.keyboard.press("Enter");
  await waitFor(300);
};
