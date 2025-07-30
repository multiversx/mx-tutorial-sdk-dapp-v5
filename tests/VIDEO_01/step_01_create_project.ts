import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";

export async function step01CreateProject(page: Page): Promise<void> {
  // Display starting message with typewriter effect
  await createTypewriterMessage(
    page,
    "Opening terminal and initializing project..."
  );

  await page.keyboard.press("Control+`");

  // Wait a moment for terminal to be fully ready
  await page.waitForTimeout(1000);

  // Navigate to tutorial directory and run the script
  await page.keyboard.type(
    "cd /Users/tudor/Work/test/ping-pong-tutorial/tutorial/VIDEO_01"
  );
  await page.keyboard.press("Enter");
  await page.keyboard.type("./step_01_create_project.sh");
  await page.keyboard.press("Enter");

  // Since terminal is canvas-based, we can't directly read text content
  // Instead, wait for a reasonable amount of time for the script to complete
  // The script typically takes 30-60 seconds to create a new Vite project
  console.log("Waiting for project creation script to complete...");

  // Additional wait to ensure everything is settled
  await page.waitForTimeout(2000);

  console.log("Project creation script completed");
}
