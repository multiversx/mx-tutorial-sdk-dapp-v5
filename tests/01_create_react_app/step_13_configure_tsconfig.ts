import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { navigateToFile, terminal, waitFor } from "../helpers";
import { typeAndEnter } from "../../utils/type-helper";

export async function step15ConfigureTsconfig(page: Page): Promise<void> {
  await createTypewriterMessage(page, "Removing unused tsconfig files...");

  await terminal.show(page, "01_create_react_app");

  await typeAndEnter(page, "../../");
  await typeAndEnter(page, "rm -f tsconfig.app.json tsconfig.node.json");

  await terminal.hide(page);

  await createTypewriterMessage(
    page,
    "Editing TypeScript configuration file..."
  );

  await navigateToFile(page, "tsconfig.json");
  await waitFor(500);

  await page.keyboard.press("Meta+a");
  await waitFor(1500);
  await page.keyboard.press("Backspace");
  await waitFor(1500);

  await createTypewriterMessage(
    page,
    "Paste TypeScript configuration from clipboard..."
  );

  await waitFor(1000);

  await page.evaluate(() => {
    navigator.clipboard.writeText(
      `{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "types": ["vite/client"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "baseUrl": "src"
  },
  "include": ["src"]
}`
    );
  });
  await page.keyboard.press("Meta+v");
  await page.keyboard.press("Meta+s");
  await waitFor(500);

  await page.keyboard.press("Control+g");
  await typeAndEnter(page, "15");
  await page.keyboard.press("Meta+Shift+ArrowRight");

  await waitFor(1000);
  await createTypewriterMessage(
    page,
    "Now tsconfig.json is has absolute imports and module resolution set to bundler"
  );
  await waitFor(1000);

  console.log("TypeScript configuration file created successfully");
}
