import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { createNewFile, navigateToFile, textEdit, waitFor } from "../helpers";
import { humanType, typeAndEnter } from "../../utils/type-helper";

export async function step02CreateUnlockPage(page: Page): Promise<void> {
  await createTypewriterMessage(page, "Creating Unlock page component...");
  await createNewFile(page, "../pages/Unlock.tsx");

  await createTypewriterMessage(page, "Paste the Unlock page content...");

  await page.evaluate(() => {
    navigator.clipboard.writeText(
      `import { useEffect } from 'react';
  import { useNavigate } from 'react-router-dom';
  import { RouteNamesEnum } from 'routes';

  export const Unlock = () => {
    const navigate = useNavigate();
    const isLoggedIn = false; // TODO: Replace with the actual login state

    useEffect(() => {
      if (isLoggedIn) {
        navigate(RouteNamesEnum.dashboard);
        return;
      }
      // open unlock panel here
    }, [isLoggedIn]);

    return null;
  };`
    );
  });
  await page.keyboard.press("Meta+v");
  await page.keyboard.press("Meta+s");
  await waitFor(2000);

  // Update pages index.ts
  await createTypewriterMessage(
    page,
    "Updating pages index.ts to export Unlock..."
  );
  await navigateToFile(page, "src/pages/index.ts");
  await textEdit(page).goToEndOfLine(2);
  await page.keyboard.press("Enter");
  await humanType(page, "export * from './Unlock';");
  await page.keyboard.press("Meta+s");
  await waitFor(1000);

  // Update routes.ts
  await createTypewriterMessage(page, "Updating routes.ts with Unlock page...");
  await navigateToFile(page, "routes.ts");

  await textEdit(page).goToLine(1);
  await waitFor(500);

  for (let i = 0; i < 5; i++) {
    await page.keyboard.press("Alt+ArrowRight");
    await waitFor(500);
  }

  await typeAndEnter(page, `, Unlock`);

  await textEdit(page).goToEndOfLine(5);

  await typeAndEnter(page, `,`);

  await humanType(page, `unlock = '/unlock',`);

  await textEdit(page).goToLine(26);

  await page.keyboard.press("Meta+Shift+ArrowRight");

  await page.evaluate(() => {
    navigator.clipboard.writeText(
      `// since unlock is made trough a sidebar, we want to keep displaying the home page in the background
      {
        path: RouteNamesEnum.unlock,
        title: 'Unlock',
        component: Unlock
      }`
    );
  });
  await waitFor(500);

  await page.keyboard.press("Meta+v");

  // format the file
  await textEdit(page).formatFile();
  await waitFor(500);

  await page.keyboard.press("Meta+ArrowUp");
  await waitFor(1000);

  await page.keyboard.press("Meta+s");
  await waitFor(1000);

  await createTypewriterMessage(page, "✅ Unlock route created successfully!");

  // ends with routes.ts updated, terminal closed

  console.log("Unlock page creation completed");
}
