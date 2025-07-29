import { test as base, chromium, BrowserContext } from "@playwright/test";

export const test = base.extend<{
  context: BrowserContext;
}>({
  context: async ({}, use) => {
    // Connect to existing Chrome browser via CDP
    const browser = await chromium.connectOverCDP("http://127.0.0.1:9222");
    console.log("Connected to Chrome browser via CDP");

    // Always create a new context for video recording
    console.log("Creating new context for video recording...");
    const context = await browser.newContext({
      // Enable video recording for the context
      recordVideo: {
        dir: "test-results/videos/",
      },
    });
    console.log("Created new browser context with video recording");

    // Ensure the context is ready
    await context.waitForEvent("page", { timeout: 5000 }).catch(() => {
      console.log("No existing pages found, context is ready for new pages");
    });

    await use(context);

    // Don't close the browser since it's an external instance
    // await browser.close();
  },
});

// Helper function to check if Chrome is running with remote debugging
export async function isChromeRunningWithCDP(): Promise<boolean> {
  try {
    const browser = await chromium.connectOverCDP("http://127.0.0.1:9222");
    await browser.close();
    return true;
  } catch (error) {
    return false;
  }
}
