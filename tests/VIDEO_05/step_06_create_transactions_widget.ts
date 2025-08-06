import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { createNewFile, navigateToFile, textEdit, waitFor } from "../helpers";

export async function step06CreateTransactionsWidget(
  page: Page
): Promise<void> {
  await createTypewriterMessage(page, "Creating Transactions widget...");

  await navigateToFile(page, "Account.tsx");

  await createNewFile(page, "Transactions.tsx");

  await createTypewriterMessage(
    page,
    "Paste the Transactions widget content..."
  );

  await page.evaluate(() => {
    navigator.clipboard.writeText(
      `import { OutputContainer } from 'components';

export const Transactions = () => {
  const transactions = []; // TODO: Replace with the actual transactions

  if (transactions.length === 0) {
    return (
      <OutputContainer>
        <p className='text-gray-400'>No transactions found</p>
      </OutputContainer>
    );
  }

  return (
    <div className='flex flex-col'>
      <OutputContainer className='p-0'>
        <div className='w-full h-full overflow-x-auto bg-white shadow rounded-lg'>
          {/* TODO: Add transactions table here */}
        </div>
      </OutputContainer>
    </div>
  );
};`
    );
  });
  await page.keyboard.press("Meta+v");
  await page.keyboard.press("Meta+s");
  await waitFor(1000);

  // Update Dashboard widgets index.ts
  await createTypewriterMessage(
    page,
    "Updating Dashboard widgets index.ts to export Transactions..."
  );
  await navigateToFile(page, "src/pages/Dashboard/widgets/index.ts");

  await textEdit(page).goToEndOfLine(2);
  await page.keyboard.press("Enter");

  await page.evaluate(() => {
    navigator.clipboard.writeText(`export * from './Transactions';`);
  });
  await waitFor(500);

  await page.keyboard.press("Meta+v");

  await textEdit(page).formatFile();

  await page.keyboard.press("Meta+s");
  await waitFor(1000);

  await createTypewriterMessage(
    page,
    "✅ Transactions widget created successfully!"
  );

  // ends with src/pages/Dashboard/widgets/index.ts updated, terminal closed

  console.log("Transactions widget creation completed");
}
