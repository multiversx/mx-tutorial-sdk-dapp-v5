import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { createNewFile, waitFor } from "../helpers";

export async function step06CreatePingpongWidget(page: Page): Promise<void> {
  await createTypewriterMessage(page, "Creating PingPongAbi widget...");
  await createNewFile(page, "PingPongAbi.tsx");
  await waitFor(1000);

  await createTypewriterMessage(page, "Paste PingPongAbi content...");

  await page.evaluate(() => {
    navigator.clipboard.writeText(
      `import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, OutputContainer } from 'components';

export const PingPongAbi = () => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-2'>
        <div className='flex justify-start gap-2'>
          <Button className='inline-block rounded-lg px-3 py-2 text-center hover:no-underline my-0 bg-blue-600 text-white hover:bg-blue-700 mr-0 disabled:bg-gray-200 disabled:text-black disabled:cursor-not-allowed'>
            <FontAwesomeIcon icon={faArrowUp} className='mr-1' />
            Ping
          </Button>

          <Button className='inline-block rounded-lg px-3 py-2 text-center hover:no-underline my-0 bg-blue-600 text-white hover:bg-blue-700 mr-0 disabled:bg-gray-200 disabled:text-black disabled:cursor-not-allowed'>
            <FontAwesomeIcon icon={faArrowDown} className='mr-1' />
            Pong
          </Button>
        </div>
      </div>

      <OutputContainer>PING-PONG ABI OUTPUT</OutputContainer>
    </div>
  );
};`
    );
  });
  await page.keyboard.press("Meta+v");
  await page.keyboard.press("Meta+s");
  await waitFor(1000);

  await createTypewriterMessage(page, "Done! 🎉");

  // ends with src/pages/Dashboard/widgets/PingPongAbi.tsx, terminal closed

  console.log("PingPongAbi widget creation completed");
}
