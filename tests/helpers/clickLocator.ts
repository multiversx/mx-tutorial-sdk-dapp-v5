import { Page } from "@playwright/test";
import { smoothClick } from "../../utils/mouse-helper";

export async function clickLocator(
  page: Page,
  locatorText: string
): Promise<void> {
  const element = page.locator(`text=${locatorText}`);
  await smoothClick(page, element);
}
