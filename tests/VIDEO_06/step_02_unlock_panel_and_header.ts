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

  await createTypewriterMessage(page, "Pasting sdk-dapp imports...");

  await textEdit(page).newLineAt(2);

  await page.evaluate(() => {
    navigator.clipboard.writeText(
      `import { UnlockPanelManager } from '@multiversx/sdk-dapp/out/managers/UnlockPanelManager';
import { useGetIsLoggedIn } from '@multiversx/sdk-dapp/out/react/account/useGetIsLoggedIn';`
    );
  });
  await waitFor(300);

  await page.keyboard.press("Meta+v");

  await textEdit(page).selectLine(9);

  await page.evaluate(() => {
    navigator.clipboard.writeText(`const isLoggedIn = useGetIsLoggedIn();`);
  });

  await waitFor(300);

  await page.keyboard.press("Meta+v");

  await waitFor(300);

  await textEdit(page).newLineAt(10);

  await page.keyboard.press("Enter");

  await page.evaluate(() => {
    navigator.clipboard.writeText(
      `  const unlockPanelManager = UnlockPanelManager.init({
    loginHandler: () => {
      navigate(RouteNamesEnum.dashboard);
    },
    onClose: () => {
      navigate(RouteNamesEnum.home);
    }
  });

  const handleOpenUnlockPanel = () => {
    unlockPanelManager.openUnlockPanel();
  };`
    );
  });
  await waitFor(300);

  await page.keyboard.press("Meta+v");

  await waitFor(300);

  await textEdit(page).formatFile();

  await waitFor(300);

  await textEdit(page).selectLine(29);

  await humanType(page, "handleOpenUnlockPanel();");

  await waitFor(300);

  await textEdit(page).formatFile();

  await createTypewriterMessage(
    page,
    "✅ Opening unlock panel on accessing /unlock route"
  );

  // Update Header component navigation
  await createTypewriterMessage(
    page,
    "Updating Header component navigation..."
  );

  await navigateToFile(page, "Header.tsx");
  await waitFor(1000);

  await createTypewriterMessage(
    page,
    "Replacing navigation to unlock route..."
  );

  await page.evaluate(() => {
    navigator.clipboard.writeText(`navigate(RouteNamesEnum.unlock);`);
  });
  await waitFor(300);

  // Find and replace the TODO line
  await textEdit(page).selectLine(36);
  await waitFor(1000);

  await page.keyboard.press("Meta+v");

  await waitFor(300);

  await textEdit(page).formatFile();

  await waitFor(300);

  await textEdit(page).formatFile();

  await waitFor(300);

  await page.keyboard.press("Meta+s");

  await createTypewriterMessage(
    page,
    "✅ Header component updated successfully!"
  );

  // ends with both Unlock and Header components updated, terminal closed

  console.log("Unlock panel and Header navigation update completed");
}
