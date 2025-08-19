import { Page } from "@playwright/test";
import { waitFor } from "./waitFor";

export const textEdit = (page: Page) => ({
  goToLine: async (line: number) => {
    page.keyboard.press("Control+g");
    await waitFor(500);
    page.keyboard.type(line.toString());
    await waitFor(500);
    await page.keyboard.press("Enter");
  },
  newLineAt: async function (line: number) {
    await this.goToLine(line);
    await page.keyboard.press("Enter");
    await waitFor(500);
    await page.keyboard.press("ArrowUp");
    await waitFor(500);
  },
  goToEndOfLine: async function (line: number) {
    await this.goToLine(line);
    await waitFor(300);
    await page.keyboard.press("Meta+ArrowRight");
    await waitFor(500);
  },
  formatFile: async function () {
    await page.keyboard.press("Alt+Shift+f");
    await waitFor(500);
  },
  goToTopOfFile: async function () {
    await page.keyboard.press("Meta+ArrowUp");
    await waitFor(500);
  },
  selectLine: async function (line: number) {
    await this.goToLine(line);
    await page.keyboard.press("Meta+Shift+ArrowRight");
    await waitFor(300);
  },
  pasteText: async function (text: string) {
    await page.evaluate((textToPaste) => {
      navigator.clipboard.writeText(textToPaste);
    }, text);
    await waitFor(300);
    await page.keyboard.press("Meta+v");
    await waitFor(300);
    await this.formatFile();
  },
});
