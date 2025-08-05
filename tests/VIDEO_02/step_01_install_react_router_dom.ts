import { Page } from "@playwright/test";
import { terminal } from "../helpers";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { waitForStepCompletion } from "../../utils/progress-helper";
import { basename } from "path";

export async function step01InstallReactRouterDom(page: Page): Promise<void> {
  await page.waitForTimeout(2000);

  await createTypewriterMessage(
    page,
    "🚀 Preparing Basic App Structure with Routing"
  );
  await page.waitForTimeout(2000);

  await createTypewriterMessage(
    page,
    "Installing react-router-dom for navigation..."
  );

  await page.waitForTimeout(1000);

  await terminal.show(page, "VIDEO_02");

  await page.keyboard.type("./step_01_install_react_router_dom.sh");
  await page.keyboard.press("Enter");

  await waitForStepCompletion(page, basename(__filename, ".ts"));

  console.log("React Router DOM installation completed");
}
