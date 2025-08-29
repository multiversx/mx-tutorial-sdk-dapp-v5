import { Page } from "@playwright/test";
import { terminal, waitFor } from "../helpers";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { waitForStepCompletion } from "../../utils/progress-helper";
import { basename } from "path";

export async function step03InstallFontawesome(page: Page): Promise<void> {
  await waitFor(2000);

  await createTypewriterMessage(
    page,
    "Installing FontAwesome and classnames..."
  );

  await waitFor(1000);

  await terminal.show(page, "04_create_dashboard");

  await page.keyboard.type("./step_03_install_fontawesome.sh");
  await page.keyboard.press("Enter");

  await waitForStepCompletion(page, basename(__filename, ".ts"));

  console.log("FontAwesome and classnames installation completed");
}
