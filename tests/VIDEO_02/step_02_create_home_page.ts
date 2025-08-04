import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { createNewFile } from "../helpers/createNewFile";
import { waitFor } from "../helpers/waitFor";
import { humanType } from "../../utils/type-helper";

export async function step02CreateHomePage(page: Page): Promise<void> {
  await page.waitForTimeout(2000);

  await createTypewriterMessage(page, "Creating pages folder...");

  await page.waitForTimeout(1000);

  const newFolder = "src/pages";
  await createNewFile(page, newFolder, Boolean(newFolder));
  await page.waitForTimeout(1000);

  await createTypewriterMessage(page, "Add a new Home page component...");
  await createNewFile(page, "src/pages/Home.tsx");
  await createTypewriterMessage(
    page,
    "Paste Home page contents from clipboard..."
  );
  await page.evaluate(() => {
    navigator.clipboard.writeText(
      `import { Outlet } from 'react-router-dom';

export const Home = () => {
  return (
    <div className='flex flex-1 rounded-xl bg-white p-6 sm:flex-row items-center justify-center'>
      <div className='flex flex-col-reverse sm:flex-row items-center h-full w-full'>
        <div className='flex items-start sm:items-center h-full sm:w-1/2 sm:bg-center'>
          <div className='flex flex-col gap-2 max-w-[70sch] text-center sm:text-left text-xl font-medium md:text-2xl lg:text-3xl'>
            <div>
              <h1>Ping-Pong dApp</h1>
              <p className='text-gray-400'>
                An{' '}
                <a
                  href='https://www.npmjs.com/package/@multiversx/sdk-dapp'
                  target='_blank'
                  className='text-gray-400 underline decoration-dotted hover:decoration-solid'
                >
                  sdk-dapp v.5
                </a>{' '}
                example project <br className='hidden xl:block' />
                built on the{' '}
                <a
                  href='https://multiversx.com/'
                  target='_blank'
                  className='text-gray-400 underline decoration-dotted hover:decoration-solid'
                >
                  MultiversX
                </a>{' '}
                blockchain.
              </p>
            </div>
          </div>
        </div>
        <div className='h-4/6 bg-mvx-white bg-contain bg-no-repeat w-1/2 bg-center' />
        <Outlet /> {/* This is where the child routes will be rendered */}
      </div>
    </div>
  );
};`
    );
  });
  await page.keyboard.press("Meta+v");
  await page.keyboard.press("Meta+s");
  await waitFor(1000);
  await createTypewriterMessage(page, "Done! 🎉");

  // Create src/pages/index.ts
  await createNewFile(page, "index.ts");
  await createTypewriterMessage(page, "Export the new Home page...");
  await humanType(page, "export * from './Home';");
  await page.keyboard.press("Meta+s");
  await waitFor(1000);
  await createTypewriterMessage(page, "Done! 🎉");

  console.log("Home page creation completed");
}
