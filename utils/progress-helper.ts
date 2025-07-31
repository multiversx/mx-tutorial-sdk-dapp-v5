import { Page } from "@playwright/test";
import { readFileSync, existsSync } from "fs";
import { join } from "path";

/**
 * Waits for a specific step to be completed by checking progress.txt file
 * @param page - Playwright page object
 * @param stepName - The step name to check for (e.g., "step_01_create_project")
 * @param maxAttempts - Maximum number of attempts to check (default: 30)
 * @param checkInterval - Time to wait between attempts in milliseconds (default: 2000)
 * @returns Promise<boolean> - True if step is completed, false if timeout
 */
export async function waitForStepCompletion(
  page: Page,
  stepName: string,
  maxAttempts: number = 30,
  checkInterval: number = 2000
): Promise<boolean> {
  console.log(`Waiting for step completion: ${stepName}`);

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    await page.waitForTimeout(checkInterval);

    try {
      // Check if progress.txt exists and contains the step completion message
      const progressPath = join(
        "/Users/tudor/Work/test/ping-pong-tutorial",
        "progress.txt"
      );

      if (existsSync(progressPath)) {
        const progressContent = readFileSync(progressPath, "utf-8");
        const expectedMessage = `Done: ${stepName}`;

        if (progressContent.includes(expectedMessage)) {
          console.log(`✅ Step ${stepName} completed successfully`);
          return true;
        }
      }

      console.log(
        `Attempt ${attempt + 1}: Waiting for ${stepName} completion...`
      );
    } catch (error) {
      console.log(`Error checking progress: ${error}`);
    }
  }

  console.log(`❌ Timeout waiting for step ${stepName} completion`);
  return false;
}
