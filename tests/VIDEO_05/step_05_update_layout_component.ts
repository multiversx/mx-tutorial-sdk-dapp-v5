import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { navigateToFile, textEdit, waitFor } from "../helpers";

export async function step05UpdateLayoutComponent(page: Page): Promise<void> {
  await createTypewriterMessage(
    page,
    "Updating the Layout component to use Header and Footer..."
  );

  await navigateToFile(page, "Layout.tsx");

  await textEdit(page).newLineAt(2);

  await textEdit(page).pasteText(
    `import { Footer, Header } from './components';`
  );

  await page.keyboard.press("Meta+v");
  await waitFor(1000);

  await textEdit(page).newLineAt(7);

  await textEdit(page).pasteText(`<Header />`);

  await textEdit(page).newLineAt(11);

  await textEdit(page).pasteText(`<Footer />`);

  await textEdit(page).formatFile();

  await page.keyboard.press("Meta+s");
  await waitFor(1000);

  await createTypewriterMessage(
    page,
    "✅ Layout component updated successfully!"
  );

  // ends with Layout.tsx updated, terminal closed

  console.log("Layout component update completed");
}
