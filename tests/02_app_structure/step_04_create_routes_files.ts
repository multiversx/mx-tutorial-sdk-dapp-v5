import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { createNewFile, waitFor } from "../helpers";
import { humanType } from "../../utils/type-helper";

export async function step04CreateRoutesFiles(page: Page): Promise<void> {
  await waitFor(2000);

  await createTypewriterMessage(page, "Creating routes configuration files...");

  await createNewFile(page, "src/routes/routes.ts");
  await createTypewriterMessage(
    page,
    "Paste routes configuration from clipboard..."
  );
  await page.evaluate(() => {
    navigator.clipboard.writeText(
      `import { Home } from 'pages';

export enum RouteNamesEnum {
  home = '/',
}

interface BasicRouteType {
  path: string;
  title: string;
  component: () => React.ReactNode;
  authenticatedRoute?: boolean;
}

interface RouteType extends BasicRouteType {
  children?: BasicRouteType[];
}

export const routes: RouteType[] = [
  {
    path: RouteNamesEnum.home,
    title: 'Home',
    component: Home,
    children: [
        // Unlock page
    ]
  }
];`
    );
  });
  await page.keyboard.press("Meta+v");
  await page.keyboard.press("Meta+s");
  await waitFor(1000);
  await createTypewriterMessage(page, "Done! 🎉");
  await waitFor(6000);

  // Create src/routes/index.ts
  await createNewFile(page, "index.ts");
  await createTypewriterMessage(page, "Export the routes configuration...");
  await humanType(page, "export * from './routes';");
  await page.keyboard.press("Meta+s");
  await waitFor(1000);
  await createTypewriterMessage(page, "Done! 🎉");

  console.log("Routes files creation completed");
}
