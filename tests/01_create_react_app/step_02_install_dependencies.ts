import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { terminal, clickLocator, waitFor } from "../helpers";
import { waitForStepCompletion } from "../../utils/progress-helper";
import { basename } from "path";

export async function step02InstallDependencies(page: Page): Promise<void> {
  // Display starting message with typewriter effect
  await createTypewriterMessage(page, "Inspecting package.json file");
  await waitFor(4000);

  // minimize terminal
  await terminal.hide(page);
  await waitFor(2000);

  // smoothly move to package.json (visual mouse is auto-injected and removed)
  await clickLocator(page, "package.json");
  await waitFor(4000);
  await createTypewriterMessage(page, "The package.json file looks good 👍");
  await waitFor(1000);

  await createTypewriterMessage(page, "Continuing to install dependencies...");
  await waitFor(2000);

  // open install dependencies script
  await terminal.show(page, "01_create_react_app");
  await page.keyboard.type("./step_02_install_dependencies.sh");
  await page.keyboard.press("Enter");
  await waitForStepCompletion(page, basename(__filename, ".ts"));

  console.log("Executing step_02_install_dependencies.sh...");
}
