import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";

export async function step09CommitProject(page: Page): Promise<void> {
  // Display starting message with typewriter effect
  await createTypewriterMessage(
    page,
    "Committing the project setup changes..."
  );

  await page.keyboard.type("./step_09_commit_project.sh");
  await page.keyboard.press("Enter");
  await page.waitForTimeout(2000);

  console.log("Project changes committed successfully");
}
