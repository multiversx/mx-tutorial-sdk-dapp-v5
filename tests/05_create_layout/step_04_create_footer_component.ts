import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { createNewFile, textEdit, waitFor } from "../helpers";

export async function step04CreateFooterComponent(page: Page): Promise<void> {
  // Create Footer component
  await createTypewriterMessage(page, "Creating Footer component...");
  await createNewFile(page, "Footer.tsx");

  await createTypewriterMessage(page, "Paste the Footer component content...");

  await textEdit(page).pasteText(
    `export const Footer = () => {
  return (
    <footer className='mx-auto w-full max-w-prose pb-6 pl-6 pr-6 text-center text-gray-400'>
      <div className='flex flex-col items-center text sm text-gray-400'>
        <a
          target='_blank'
          className='flex items-center text-sm hover:underline'
          href='https://github.com/multiversx/mx-sdk-dapp'
        >
          GitHub Repository
        </a>
      </div>
    </footer>
  );
};`
  );

  await createTypewriterMessage(
    page,
    "✅ Footer component created successfully!"
  );

  // Create Layout components index.ts
  await createTypewriterMessage(page, "Creating Layout components index.ts...");
  await createNewFile(page, "index.ts");

  await textEdit(page).pasteText(
    `export * from './Header';
export * from './Footer';`
  );

  await page.keyboard.press("Meta+s");

  await createTypewriterMessage(page, "✅ Done!");

  // ends with src/components/Layout/components/index.ts updated, terminal closed

  console.log("Footer component creation completed");
}
