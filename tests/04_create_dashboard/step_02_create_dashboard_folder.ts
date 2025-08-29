import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { createNewFile, waitFor } from "../helpers";
import { humanType } from "../../utils/type-helper";

export async function step02CreateDashboardFolder(page: Page): Promise<void> {
  await createTypewriterMessage(
    page,
    "Creating the dashboard folder structure..."
  );

  await waitFor(1000);

  // Create dashboard directory structure
  const dashboardFolder = "src/pages/Dashboard";
  await createNewFile(page, dashboardFolder, Boolean(dashboardFolder));
  await waitFor(1000);

  const componentsFolder = "components";
  await createNewFile(page, componentsFolder, Boolean(componentsFolder));
  await waitFor(1000);

  // Create Widget.tsx component
  await createTypewriterMessage(page, "Creating Widget component...");
  await createNewFile(page, "src/pages/Dashboard/components/Widget.tsx");
  await page.evaluate(() => {
    navigator.clipboard.writeText(
      `import { ReactElement } from 'react';
  import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

  export type WidgetType = {
    description?: string;
    reference: string;
    title: string;
    widget: () => ReactElement;
  };

  export const Widget = ({
    title,
    description,
    reference,
    widget: MxWidget
  }: WidgetType) => {
    return (
      <div className='flex flex-col flex-1 rounded-xl bg-white p-6 justify-center'>
        <h2 className='flex text-xl font-medium group'>
          {title}
          <a
            href={reference}
            target='_blank'
            className='hidden group-hover:block ml-2 text-blue-600'
          >
            <FontAwesomeIcon icon={faInfoCircle} size='sm' />
          </a>
        </h2>
        {description && <p className='text-gray-400 mb-6'>{description}</p>}
        <MxWidget />
      </div>
    );
  };`
    );
  });
  await page.keyboard.press("Meta+v");
  await page.keyboard.press("Meta+s");
  await waitFor(1000);

  // Create components index.ts file
  await createTypewriterMessage(page, "Creating components index file...");
  await createNewFile(page, "index.ts");
  await humanType(page, "export * from './Widget';");
  await page.keyboard.press("Meta+s");
  await waitFor(1000);

  await createTypewriterMessage(page, "Done! 🎉");

  // ends with src/pages/Dashboard/components/index.ts line 1, terminal closed

  console.log("Dashboard folder structure creation completed");
}
