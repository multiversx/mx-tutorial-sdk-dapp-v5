import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { createNewFile, navigateToFile, textEdit, waitFor } from "../helpers";

export async function step03CreateHeaderComponent(page: Page): Promise<void> {
  await createTypewriterMessage(page, "Creating the Layout components...");

  await page.waitForTimeout(1000);

  await navigateToFile(page, "package.json");
  const newFolder = "src/components/Layout/components";
  await createNewFile(page, newFolder, Boolean(newFolder));
  await page.waitForTimeout(1000);

  // Create Header component
  await createNewFile(page, "src/components/Layout/components/Header.tsx");

  await createTypewriterMessage(page, "Paste the Header component content...");

  await page.evaluate(() => {
    navigator.clipboard.writeText(
      `import { useNavigate } from 'react-router-dom';
import { Button } from 'components';
import { environment } from 'config';
import { RouteNamesEnum } from 'routes';

export const Header = () => {
  const isLoggedIn = false; // TODO: Replace with the actual login state
  const navigate = useNavigate();

  const handleLogout = async () => {
    // TODO: Implement logout
    navigate(RouteNamesEnum.home);
  };

  return (
    <header className='flex flex-row align-center justify-between pl-6 pr-6 pt-6'>
      <nav className='h-full w-full text-sm sm:relative sm:left-auto sm:top-auto sm:flex sm:w-auto sm:flex-row sm:justify-end sm:bg-transparent'>
        <div className='flex justify-end container mx-auto items-center gap-2'>
          <div className='flex gap-1 items-center'>
            <div className='w-2 h-2 rounded-full bg-green-500' />
            <p className='text-gray-600'>{environment}</p>
          </div>

          {isLoggedIn ? (
            <>
              <Button
                onClick={handleLogout}
                className='inline-block rounded-lg px-3 py-2 text-center hover:no-underline my-0 text-gray-600 hover:bg-slate-100 mx-0'
              >
                Close
              </Button>
            </>
          ) : (
             <Button
              onClick={() => {
                navigate(RouteNamesEnum.dashboard); // TODO: replace with navigate(RouteNamesEnum.unlock);
              }}
            >
              Connect
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
};`
    );
  });
  await waitFor(500);

  await page.keyboard.press("Meta+v");
  await textEdit(page).goToTopOfFile();
  await page.keyboard.press("Meta+s");
  await waitFor(1000);

  await createTypewriterMessage(
    page,
    "✅ Header component created successfully!"
  );

  // ends with src/components/Layout/components/Header.tsx updated, terminal closed

  console.log("Header component creation completed");
}
