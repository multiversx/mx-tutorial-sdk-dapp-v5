import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { terminal, textEdit, waitFor } from "../helpers";
import { humanType, typeAndEnter } from "../../utils/type-helper";

export async function step16StartDevServer(page: Page): Promise<void> {
  // Display starting message with typewriter effect
  await createTypewriterMessage(page, "Starting the development server...");

  await terminal.show(page, "01_create_react_app");

  await page.keyboard.type("./step_16_start_dev_server.sh");
  await page.keyboard.press("Enter");
  // await waitForStepCompletion(page, basename(__filename, ".ts"));
  await waitFor(4000);

  await terminal.hide(page);

  await page.keyboard.press("Meta+Shift+P");
  await waitFor(300);

  await typeAndEnter(page, "Simple browser");
  await waitFor(300);

  //https://192.168.30.83:3000/

  await textEdit(page).pasteText("https://192.168.30.83:3000/");

  await waitFor(300);

  await page.keyboard.press("Enter");

  console.log("Development server started successfully");
}
