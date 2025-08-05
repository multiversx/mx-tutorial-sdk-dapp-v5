import { Page } from "@playwright/test";

export const textEdit = (page: Page) => ({
  goToLine: async (line: number) => {
    page.keyboard.press("Control+g");
    await page.waitForTimeout(500);
    page.keyboard.type(line.toString());
    await page.waitForTimeout(500);
    await page.keyboard.press("Enter");
  },
  newLineAt: async function (line: number) {
    await this.goToLine(line);
    await page.keyboard.press("Enter");
    await page.waitForTimeout(500);
    await page.keyboard.press("ArrowUp");
    await page.waitForTimeout(500);
  },
});
