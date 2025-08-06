import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { navigateToFile, textEdit, waitFor } from "../helpers";
import { humanType, typeAndEnter } from "../../utils/type-helper";

export async function step07UpdateDashboardPage(page: Page): Promise<void> {
  await createTypewriterMessage(
    page,
    "Updating the Dashboard page to use the Transactions widget..."
  );

  await page.waitForTimeout(1000);

  await navigateToFile(page, "Dashboard.tsx");

  await textEdit(page).goToLine(2);

  for (let index = 0; index < 5; index++) {
    await page.keyboard.press("Alt+ArrowRight");
    await waitFor(300);
  }

  await humanType(page, ` Transactions,`);

  await textEdit(page).goToEndOfLine(18);

  await typeAndEnter(page, `,`);

  await page.evaluate(() => {
    navigator.clipboard.writeText(
      `{
    title: 'Transactions',
    widget: Transactions,
    description: 'Transactions history',
    reference: 'https://docs.multiversx.com/sdk-and-tools/sdk-dapp/#transactions'
  }`
    );
  });
  await waitFor(500);
  await page.keyboard.press("Meta+v");
  await page.keyboard.press("Meta+s");

  await textEdit(page).formatFile();

  await waitFor(1000);

  await createTypewriterMessage(
    page,
    "✅ Dashboard page updated successfully!"
  );

  console.log("Dashboard page update completed");
}
