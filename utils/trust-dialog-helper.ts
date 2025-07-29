import { Page } from "@playwright/test";
import { injectVisualMouse, smoothClick } from "./mouse-helper";

/**
 * Handles VS Code trust dialog by clicking "Yes, I trust the authors" button
 * @param page - Playwright page object
 * @param maxAttempts - Maximum number of attempts to check for trust dialog (default: 10)
 * @param checkInterval - Time to wait between attempts in milliseconds (default: 2000)
 * @returns Promise<boolean> - True if trust dialog was handled, false if not found
 */
export async function handleTrustDialog(
  page: Page,
  maxAttempts: number = 10,
  checkInterval: number = 2000
): Promise<boolean> {
  console.log("Waiting for VS Code interface to load...");
  let trustDialogHandled = false;

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    await page.waitForTimeout(checkInterval);
    console.log(`Attempt ${attempt + 1}: Checking for trust dialog...`);

    try {
      const trustButton = page.locator(
        'a.monaco-button.monaco-text-button:has-text("Yes, I trust the authors")'
      );

      if (await trustButton.isVisible()) {
        await injectVisualMouse(page);
        await smoothClick(page, trustButton);
        console.log('Clicked "Yes, I trust the authors" button!');
        trustDialogHandled = true;
        await page.waitForTimeout(2000);
        break;
      }
    } catch (e) {
      console.log(`Trust button selector failed: ${(e as Error).message}`);
    }

    // Check if VS Code workbench is ready (alternative exit condition)
    const workbench = await page
      .locator(".monaco-workbench, .workbench")
      .isVisible();

    if (workbench) {
      console.log("VS Code workbench is ready");
      break;
    }
  }

  if (!trustDialogHandled) {
    console.log("No trust dialog found or already handled");
  }

  return trustDialogHandled;
}

/**
 * Waits for VS Code to be fully loaded and handles any trust dialogs
 * @param page - Playwright page object
 * @param options - Configuration options for trust dialog handling
 * @returns Promise<boolean> - True if trust dialog was handled, false if not found
 */
export async function waitForVSCodeAndHandleTrustDialog(
  page: Page,
  options: {
    maxAttempts?: number;
    checkInterval?: number;
    waitForLoad?: boolean;
  } = {}
): Promise<boolean> {
  const {
    maxAttempts = 10,
    checkInterval = 2000,
    waitForLoad = true,
  } = options;

  if (waitForLoad) {
    // Wait for VS Code to load and reinject visual mouse
    await page.waitForLoadState("domcontentloaded");
    await page.waitForLoadState("networkidle");
    await injectVisualMouse(page);
    await page.waitForTimeout(1500);
  }

  return await handleTrustDialog(page, maxAttempts, checkInterval);
}

/**
 * Checks if VS Code workbench is visible and ready
 * @param page - Playwright page object
 * @returns Promise<boolean> - True if workbench is visible
 */
export async function isVSCodeWorkbenchReady(page: Page): Promise<boolean> {
  try {
    return await page.locator(".monaco-workbench, .workbench").isVisible();
  } catch (e) {
    console.log(`Workbench check failed: ${(e as Error).message}`);
    return false;
  }
}
