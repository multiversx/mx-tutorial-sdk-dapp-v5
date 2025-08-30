import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { navigateToFile, textEdit, waitFor } from "../helpers";
import { humanType } from "../../utils/type-helper";

export async function step02UnlockPanelAndHeader(page: Page): Promise<void> {
  await createTypewriterMessage(
    page,
    "Adding the UnlockPanel to Unlock component..."
  );

  await navigateToFile(page, "Unlock.tsx");
  await waitFor(1000);

  await createTypewriterMessage(page, "Importing the UnlockPanelManager...");

  await textEdit(page).newLineAt(2);

  // use textedit pasteText
  await textEdit(page).pasteText(
    `import { UnlockPanelManager } from '@multiversx/sdk-dapp/out/managers/UnlockPanelManager';
  `
  );
  await waitFor(300);

  await createTypewriterMessage(
    page,
    "Also importing the useGetIsLoggedIn hook..."
  );

  await textEdit(page).pasteText(
    `import { useGetIsLoggedIn } from '@multiversx/sdk-dapp/out/react/account/useGetIsLoggedIn';`
  );
  await waitFor(300);

  await textEdit(page).selectLine(9);

  await createTypewriterMessage(page, "Using the useGetIsLoggedIn hook...");

  await textEdit(page).pasteText(`const isLoggedIn = useGetIsLoggedIn();`);
  await waitFor(300);

  await textEdit(page).newLineAt(10);

  await page.keyboard.press("Enter");

  await createTypewriterMessage(page, "Initializing the UnlockPanelManager...");

  await textEdit(page).pasteText(
    `const unlockPanelManager = UnlockPanelManager.init({
     
     });`
  );

  await createTypewriterMessage(page, "Adding the event handlers...");

  for (let i = 0; i < 3; i++) {
    await page.keyboard.press("ArrowLeft");
    await waitFor(300);
  }

  await page.keyboard.press("Enter");

  await textEdit(page).pasteText(
    `loginHandler: () => {
      navigate(RouteNamesEnum.dashboard);
    },`
  );

  await humanType(page, ",");

  await waitFor(1000);

  await page.keyboard.press("Enter");

  await textEdit(page).pasteText(
    `onClose: () => {
      navigate(RouteNamesEnum.home);
    }`
  );
  await waitFor(300);

  await createTypewriterMessage(
    page,
    "Opening the unlock panel upon accessing /unlock page..."
  );

  await textEdit(page).selectLine(25);

  await humanType(page, "unlockPanelManager.openUnlockPanel();");

  await waitFor(300);

  await textEdit(page).formatFile();

  await createTypewriterMessage(
    page,
    "✅ Opening unlock panel on accessing /unlock route"
  );

  await waitFor(3000);

  // Update Header component navigation
  await createTypewriterMessage(
    page,
    "Updating Header component with login and logout..."
  );

  await navigateToFile(page, "Header.tsx");
  await waitFor(1000);

  await createTypewriterMessage(page, "Updating login state...");

  await textEdit(page).newLineAt(1);

  await textEdit(page).pasteText(
    `import { useGetIsLoggedIn } from '@multiversx/sdk-dapp/out/react/account/useGetIsLoggedIn';`
  );

  await textEdit(page).selectLine(8);

  await textEdit(page).pasteText(`const isLoggedIn = useGetIsLoggedIn();`);

  await page.keyboard.press("Meta+s");

  await createTypewriterMessage(page, "Getting the account provider");

  await textEdit(page).newLineAt(1);

  await textEdit(page).pasteText(
    `import { getAccountProvider } from '@multiversx/sdk-dapp/out/providers/helpers/accountProvider';`
  );

  await textEdit(page).newLineAt(11);

  await textEdit(page).pasteText(`const provider = getAccountProvider();`);

  await textEdit(page).selectLine(14);

  await textEdit(page).pasteText(`await provider.logout();`);

  await page.keyboard.press("Meta+s");

  await createTypewriterMessage(
    page,
    "Replacing navigation to unlock route..."
  );

  // Find and replace the TODO line
  await textEdit(page).selectLine(39);
  await waitFor(1000);

  await textEdit(page).pasteText(`navigate(RouteNamesEnum.unlock);`);

  await page.keyboard.press("Meta+s");

  await createTypewriterMessage(
    page,
    "✅ Header component updated successfully!"
  );

  // ends Header components updated, terminal closed

  console.log("Unlock panel and Header navigation update completed");
}
