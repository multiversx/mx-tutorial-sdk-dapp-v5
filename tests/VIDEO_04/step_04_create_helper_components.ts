import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import {
  createNewFile,
  navigateToFile,
  terminal,
  textEdit,
  waitFor,
} from "../helpers";
import { humanType } from "../../utils/type-helper";

export async function step04CreateHelperComponents(page: Page): Promise<void> {
  await createTypewriterMessage(
    page,
    "Creating helper components (Button, Label, OutputContainer)..."
  );

  await page.waitForTimeout(1000);

  await navigateToFile(page, "package.json");

  await terminal.hide(page);

  // Create Label.tsx component
  await createTypewriterMessage(page, "Creating Label component...");
  await createNewFile(page, "src/components/Label.tsx");

  await createTypewriterMessage(page, "Paste Label component content...");

  await page.evaluate(() => {
    navigator.clipboard.writeText(
      `import { PropsWithChildren } from 'react';

export const Label = ({ children }: PropsWithChildren) => {
  return <label className='text-gray-500'>{children}</label>;
};`
    );
  });
  await page.keyboard.press("Meta+v");
  await page.keyboard.press("Meta+s");
  await waitFor(1000);

  // Create OutputContainer.tsx component
  await createTypewriterMessage(page, "Creating OutputContainer component...");
  await createNewFile(page, "OutputContainer.tsx");

  await waitFor(1000);

  await page.evaluate(() => {
    navigator.clipboard.writeText(
      `import { PropsWithChildren } from 'react';

export const OutputContainer = ({
  children,
}: PropsWithChildren) => (
  <div
    className="text-sm border border-gray-200 rounded overflow-auto"
  >
    {children}
  </div>
);`
    );
  });
  await page.keyboard.press("Meta+v");
  await page.keyboard.press("Meta+s");
  await waitFor(1000);

  // Create Button.tsx component
  await createTypewriterMessage(page, "Creating Button component...");

  await waitFor(1000);
  await createNewFile(page, "Button.tsx");
  await page.evaluate(() => {
    navigator.clipboard.writeText(
      `import { MouseEvent, PropsWithChildren } from 'react';

interface ButtonType extends PropsWithChildren {
  onClick?: (e: MouseEvent) => void;
  className?: string;
  disabled?: boolean;
  id?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({
  children,
  onClick,
  disabled = false,
  type = 'button',
  id,
  className = 'inline-block rounded-lg px-3 py-2 text-center hover:no-underline my-0 bg-blue-600 text-white hover:bg-blue-700 mr-0 disabled:bg-gray-200 disabled:text-black disabled:cursor-not-allowed',
  ...otherProps
}: ButtonType) => {
  return (
    <button
      id={id}
      {...otherProps}
      disabled={disabled}
      onClick={onClick}
      className={className}
      type={type}
    >
      {children}
    </button>
  );
};`
    );
  });
  await page.keyboard.press("Meta+v");
  await page.keyboard.press("Meta+s");
  await waitFor(1000);

  // Update components index.ts file
  await createTypewriterMessage(page, "Updating components index file...");

  await navigateToFile(page, "src/components/index.ts");

  await textEdit(page).newLineAt(1);

  await humanType(page, "export * from './Label';");
  await page.keyboard.press("Enter");
  await humanType(page, "export * from './OutputContainer';");
  await page.keyboard.press("Enter");
  await humanType(page, "export * from './Button';");
  await page.keyboard.press("Meta+s");
  await waitFor(1000);

  await createTypewriterMessage(page, "Done! 🎉");

  // ends with src/components/index.ts line 3, terminal closed

  console.log("Helper components creation completed");
}
