import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { navigateToFile, terminal, waitFor } from "../helpers";

export async function step06UpdateApp(page: Page): Promise<void> {
  await page.waitForTimeout(2000);

  await createTypewriterMessage(
    page,
    "Updating App.tsx with routing configuration..."
  );

  await page.waitForTimeout(1000);

  await navigateToFile(page, "App.tsx");

  // minimize the terminal
  await terminal.hide(page);

  await waitFor(1000);
  await page.keyboard.press("Meta+a");
  await waitFor(1500);
  await page.keyboard.press("Backspace");
  await waitFor(1500);

  await createTypewriterMessage(
    page,
    "Paste App.tsx contents from clipboard..."
  );
  await page.evaluate(() => {
    navigator.clipboard.writeText(
      `import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { routes } from 'routes';
import { Layout } from './components';

export default function App() {
  return (
    <Router>
        <Layout>
        <Routes>
            {routes.map((route) => (
            <Route
                key={\`route-key-\${route.path}\`}
                path={route.path}
                element={<route.component />}
            >
                {route.children?.map((child) => (
                <Route
                    key={\`route-key-\${route.path}-\${child.path}\`}
                    path={child.path}
                    element={<child.component />}
                />
                ))}
            </Route>
            ))}
        </Routes>
        </Layout>
    </Router>
  );
};`
    );
  });
  await page.keyboard.press("Meta+v");
  await page.keyboard.press("Meta+s");
  await page.keyboard.press("Meta+ArrowUp");

  await waitFor(1000);
  await createTypewriterMessage(page, "Done! 🎉");

  console.log("App.tsx update completed");
}
