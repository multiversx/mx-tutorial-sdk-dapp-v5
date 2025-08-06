import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { navigateToFile, textEdit, waitFor } from "../helpers";
import { humanType, typeAndEnter } from "../../utils/type-helper";

export async function step10UpdateRoutes(page: Page): Promise<void> {
  await createTypewriterMessage(page, "Updating the routes configuration...");

  await navigateToFile(page, "routes.ts");
  await waitFor(1000);

  await createTypewriterMessage(page, "Import Dashboard component...");

  await textEdit(page).goToLine(1);
  await waitFor(500);

  for (let index = 0; index < 4; index++) {
    await page.keyboard.press("Alt+ArrowRight");
    await waitFor(300);
  }

  await typeAndEnter(page, `, Dashboard`);

  await createTypewriterMessage(page, "Add dashboard route...");

  await textEdit(page).goToEndOfLine(4);

  await typeAndEnter(page, `,`);

  await humanType(page, `dashboard = '/dashboard',`);

  await textEdit(page).goToLine(27);

  await page.keyboard.press("Meta+ArrowRight");

  await typeAndEnter(page, `,`);

  await page.evaluate(() => {
    navigator.clipboard.writeText(
      `{
    path: RouteNamesEnum.dashboard,
    title: 'Dashboard',
    component: Dashboard,
    authenticatedRoute: true
    }`
    );
  });
  await page.keyboard.press("Meta+v");
  await page.keyboard.press("Meta+s");
  await waitFor(1000);

  // format file
  await page.keyboard.press("Alt+Shift+f");
  await page.waitForTimeout(500);

  await createTypewriterMessage(page, "Done! 🎉");

  // ends with src/routes/routes.ts updated, terminal closed

  console.log("Routes configuration update completed");
}
