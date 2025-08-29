import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { createNewFile, navigateToFile, textEdit, waitFor } from "../helpers";
import { humanType } from "../../utils/type-helper";

export async function step06AuthWrapper(page: Page): Promise<void> {
  await createTypewriterMessage(page, "Now to handle the authentication...");
  await page.waitForTimeout(1000);

  // Navigate to components folder
  await navigateToFile(page, "Footer.tsx");
  await waitFor(1000);

  // Create components folder structure
  await createTypewriterMessage(page, "Creating AuthRedirectWrapper...");
  await createNewFile(page, "AuthRedirectWrapper.tsx");
  await waitFor(1000);

  await textEdit(page)
    .pasteText(`import { PropsWithChildren, useEffect } from 'react';
  import { useGetIsLoggedIn } from '@multiversx/sdk-dapp/out/react/account/useGetIsLoggedIn';
  import { matchPath, useLocation, useNavigate } from 'react-router-dom';
  import { RouteNamesEnum, routes } from 'routes';

  export const AuthRedirectWrapper = ({ children }: PropsWithChildren) => {
    const isLoggedIn = useGetIsLoggedIn();
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const currentRoute = routes.find((route) => matchPath(route.path, pathname));

    const requireAuth = Boolean(currentRoute?.authenticatedRoute);

    useEffect(() => {
      if (isLoggedIn && !requireAuth) {
        navigate(RouteNamesEnum.dashboard);

        return;
      }

      if (!isLoggedIn && requireAuth) {
        navigate(RouteNamesEnum.home);
      }
    }, [isLoggedIn, currentRoute]);

    return <>{children}</>;
  };`);

  await page.keyboard.press("Meta+s");
  await textEdit(page).goToTopOfFile();

  await waitFor(1000);

  await createTypewriterMessage(page, "Now to export the component...");

  await navigateToFile(page, "Layout/components/index.ts");

  await textEdit(page).newLineAt(1);
  await textEdit(page).pasteText(`export * from './AuthRedirectWrapper';`);

  await page.keyboard.press("Meta+s");

  await createTypewriterMessage(page, "Now to update the Layout component...");

  await navigateToFile(page, "Layout.tsx");

  await textEdit(page).goToLine(2);
  await waitFor(300);

  for (let index = 0; index < 5; index++) {
    await page.keyboard.press("Alt+ArrowRight");
    await waitFor(300);
  }

  await humanType(page, ", AuthRedirectWrapper");

  await textEdit(page).selectLine(9);

  await textEdit(page).pasteText(
    `<AuthRedirectWrapper>{children}</AuthRedirectWrapper>`
  );
  await waitFor(300);

  await page.keyboard.press("Meta+s");

  await createTypewriterMessage(page, "✅ Done!");

  // ends with src/components/Layout/components/AuthenticatedRoutesWrapper.tsx
  console.log("AuthenticatedRoutesWrapper component creation completed");
}
