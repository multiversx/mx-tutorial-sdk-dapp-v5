import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { createNewFile, navigateToFile, textEdit, waitFor } from "../helpers";
import { humanType } from "../../utils/type-helper";

export async function step01CreateGenericLinkComponent(
  page: Page
): Promise<void> {
  await createTypewriterMessage(page, "🔗 Creating UI Components");
  await page.waitForTimeout(1000);

  await createTypewriterMessage(page, "Creating a generic link component...");

  await createNewFile(page, "../components/MxLink.tsx");
  await page.waitForTimeout(1000);

  await page.evaluate(() => {
    navigator.clipboard.writeText(
      `import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

interface MxLinkPropsType extends PropsWithChildren {
  to: string;
  className?: string;
}

export const MxLink = ({
  to,
  children,
  className = 'inline-block rounded-lg px-3 py-2 text-center hover:no-underline my-0 bg-blue-600 text-white hover:bg-blue-700 ml-2 mr-0'
}: MxLinkPropsType) => {
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};`
    );
  });
  await page.keyboard.press("Meta+v");
  await page.keyboard.press("Meta+s");
  await waitFor(1000);

  // Update components index.ts
  await createTypewriterMessage(
    page,
    "Updating components index.ts to export MxLink..."
  );
  await navigateToFile(page, "src/components/index.ts");
  await textEdit(page).newLineAt(4);
  await humanType(page, "export * from './MxLink';");
  await page.keyboard.press("Meta+s");
  await waitFor(1000);

  await createTypewriterMessage(
    page,
    "✅ MxLink component created successfully!"
  );

  // ends with src/components/index.ts updated, terminal closed

  console.log("Generic link component creation completed");
}
