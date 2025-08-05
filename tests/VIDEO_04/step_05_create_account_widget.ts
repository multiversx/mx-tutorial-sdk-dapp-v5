import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { createNewFile, navigateToFile, waitFor } from "../helpers";

export async function step05CreateAccountWidget(page: Page): Promise<void> {
  await createTypewriterMessage(
    page,
    "Creating the Dashboard widgets folder..."
  );

  await page.waitForTimeout(1000);

  await navigateToFile(page, "package.json");

  const widgetsFolder = "src/pages/Dashboard/widgets";
  await createNewFile(page, widgetsFolder, Boolean(widgetsFolder));
  await page.waitForTimeout(1000);

  // Create Account.tsx widget
  await createTypewriterMessage(page, "Creating Account widget...");
  await createNewFile(page, "src/pages/Dashboard/widgets/Account.tsx");

  await createTypewriterMessage(page, "Paste Account widget content...");

  await page.evaluate(() => {
    navigator.clipboard.writeText(
      `import { Label, OutputContainer } from 'components';

export const Account = () => {
  return (
    <OutputContainer>
      <div className='flex flex-col text-black' data-testid='topInfo'>
        <p className='truncate'>
          <Label>Address:</Label>
          <span data-testid='accountAddress'> ACCOUNT.ADDRESS</span>
        </p>

        <p>
          <Label>Shard: </Label> ACCOUNT.SHARD
        </p>

        <p>
          <Label>Balance: </Label>
          ACCOUNT.BALANCE
        </p>
      </div>
    </OutputContainer>
  );
};`
    );
  });
  await page.keyboard.press("Meta+v");
  await page.keyboard.press("Meta+s");
  await waitFor(1000);

  await createTypewriterMessage(page, "Done! 🎉");

  // ends with src/pages/Dashboard/widgets/Account.tsx, terminal closed

  console.log("Account widget creation completed");
}
