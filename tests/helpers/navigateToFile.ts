import { Page } from "@playwright/test";
import { waitFor } from "./waitFor";

export const navigateToFile = async (page: Page, path: string) => {
  const parts = path.split("/");

  await page.keyboard.press("Meta+P");

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    const hasSlash = i < parts.length - 1;
    await page.keyboard.type(hasSlash ? part + "/" : part);
    await waitFor(500);
  }

  await page.keyboard.press("Enter");
};
