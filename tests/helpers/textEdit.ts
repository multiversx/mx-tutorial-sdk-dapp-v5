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
  goToEndOfLine: async function (line: number) {
    await this.goToLine(line);
    await page.waitForTimeout(300);
    await page.keyboard.press("Meta+ArrowRight");
    await page.waitForTimeout(500);
  },
  formatFile: async function () {
    await page.keyboard.press("Alt+Shift+f");
    await page.waitForTimeout(500);
  },
  goToTopOfFile: async function () {
    await page.keyboard.press("Meta+ArrowUp");
    await page.waitForTimeout(500);
  },
  selectLine: async function (line: number) {
    await this.goToLine(line);
    await page.keyboard.press("Meta+Shift+ArrowRight");
    await page.waitForTimeout(300);
  },
});
