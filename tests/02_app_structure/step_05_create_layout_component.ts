import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { createNewFile, waitFor } from "../helpers";
import { humanType } from "../../utils/type-helper";
import { navigateToFile } from "../helpers";

export async function step05CreateLayoutComponent(page: Page): Promise<void> {
  await waitFor(2000);

  await createTypewriterMessage(page, "Creating components folder...");

  await waitFor(1000);

  // Create components folder
  await navigateToFile(page, "package.json");
  const componentsFolder = "src/components";
  await createNewFile(page, componentsFolder, Boolean(componentsFolder));
  await waitFor(1000);

  await createTypewriterMessage(page, "Adding a new Layout folder...");

  // Create Layout folder
  const layoutFolder = "Layout";
  await createNewFile(page, layoutFolder, Boolean(layoutFolder));
  await waitFor(1000);

  await createTypewriterMessage(page, "Add a new Layout component...");
  await createNewFile(page, "src/components/Layout/Layout.tsx");
  await createTypewriterMessage(
    page,
    "Paste Layout component from clipboard..."
  );
  await page.evaluate(() => {
    navigator.clipboard.writeText(
      `import { PropsWithChildren } from 'react';

  export const Layout = ({ children }: PropsWithChildren) => {
    return (
      <div className='flex min-h-screen flex-col bg-slate-200'>
        <main className='flex flex-grow items-stretch justify-center p-6'>
          {children}
        </main>
      </div>
    );
  };`
    );
  });
  await page.keyboard.press("Meta+v");
  await page.keyboard.press("Meta+s");
  await waitFor(1000);
  await createTypewriterMessage(page, "Done! 🎉");
  await waitFor(1000);

  // Create Layout index.ts
  await createNewFile(page, "index.ts");
  await createTypewriterMessage(page, "Export the Layout component...");
  await humanType(page, "export * from './Layout';");
  await page.keyboard.press("Meta+s");
  await waitFor(1000);
  await createTypewriterMessage(page, "Done! 🎉");

  await createTypewriterMessage(
    page,
    "Add a new components folder index.ts file..."
  );
  // Create components index.ts
  await createNewFile(page, "../index.ts");
  await createTypewriterMessage(page, "Export from components...");
  await humanType(page, "export * from './Layout';");
  await page.keyboard.press("Meta+s");
  await waitFor(1000);
  await createTypewriterMessage(page, "Done! 🎉");

  console.log("Layout component creation completed");
}
