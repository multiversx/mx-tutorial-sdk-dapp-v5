import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { createNewFile, waitFor } from "../helpers";

export async function step08CreateDashboardPage(page: Page): Promise<void> {
  await createTypewriterMessage(page, "Creating Dashboard.tsx page...");
  await createNewFile(page, "../Dashboard.tsx");
  await waitFor(1000);

  await createTypewriterMessage(page, "Paste Dashboard page content...");

  await page.evaluate(() => {
    navigator.clipboard.writeText(
      `import { Widget, WidgetType } from './components';
import { Account, PingPongAbi } from './widgets';

const WIDGETS: WidgetType[] = [
  {
    title: 'Account',
    widget: Account,
    description: 'Connected account details',
    reference: 'https://docs.multiversx.com/sdk-and-tools/sdk-dapp/#account'
  },
  {
    title: 'Ping & Pong (ABI)',
    widget: PingPongAbi,
    description:
      'Smart Contract interactions using the ABI generated transactions',
    reference:
      'https://docs.multiversx.com/sdk-and-tools/sdk-js/sdk-js-cookbook/#using-interaction-when-the-abi-is-available'
  }
];

export const Dashboard = () => {
  return (
    <div className='flex flex-col gap-6 max-w-3xl w-full'>
      {WIDGETS.map((element) => (
        <Widget key={element.title} {...element} />
      ))}
    </div>
  );
};`
    );
  });
  await page.keyboard.press("Meta+v");
  await page.keyboard.press("Meta+s");
  await waitFor(1000);

  await createTypewriterMessage(page, "Done! 🎉");

  // ends with src/pages/Dashboard/Dashboard.tsx, terminal closed

  console.log("Dashboard page creation completed");
}
