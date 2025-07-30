import { test } from "../fixtures/cdpContext";
import { step01CreateProject } from "./step_01_create_project";
import { step02InstallDependencies } from "./step_02_install_dependencies";
import { authenticateWithPassword } from "../../utils/password-helper";
import { chromium } from "@playwright/test";
import ffmpeg from "@ffmpeg-installer/ffmpeg";
import { saveVideo } from "playwright-video";

// Set FFmpeg path for video recording
process.env.FFMPEG_PATH = ffmpeg.path;

test.describe("VIDEO_01 - Step 1: Create Project", () => {
  test("should create a new Vite React project with TypeScript template", async () => {
    test.setTimeout(0); // Remove test timeout limit

    // Connect directly to existing Chrome browser via CDP
    console.log("Connecting to existing Chrome browser...");
    const browser = await chromium.connectOverCDP("http://127.0.0.1:9222");
    console.log("Connected to Chrome browser via CDP");

    // Get existing contexts
    const contexts = browser.contexts();
    let context;

    if (contexts.length > 0) {
      // Use the first existing context
      context = contexts[0];
      console.log("Using existing browser context");
    } else {
      // Create new context only if none exist
      console.log("Creating new browser context...");
      context = await browser.newContext();
      console.log("Created new browser context");
    }

    // Get existing pages in the context
    const pages = context.pages();
    let page;

    if (pages.length > 0) {
      // Use the first existing page
      page = pages[0];
      console.log("Using existing page");
    } else {
      // Create new page only if none exist
      console.log("Creating new page...");
      page = await context.newPage();
      console.log("Page created successfully");
    }

    // Wait a bit for the page to be ready
    await page.waitForTimeout(400);

    // Check if the page is already on the code server instance
    const currentUrl = page.url();
    const expectedUrl =
      "http://127.0.0.1:8080/?folder=/Users/tudor/Work/test/ping-pong-tutorial";

    const capture = await saveVideo(
      page,
      "test-results/videos/video01-recording.mp4"
    );

    if (currentUrl !== expectedUrl) {
      console.log("Navigating to code server instance...");
      await page.goto(expectedUrl);
      await page.waitForLoadState("domcontentloaded");
      await page.waitForLoadState("networkidle");
      await authenticateWithPassword(page);

      console.log("Navigation completed");
    } else {
      console.log("Already on the correct code server instance");
    }

    await page.waitForTimeout(2000);

    await step01CreateProject(page);

    await page.waitForTimeout(2000);

    await step02InstallDependencies(page);
    // await step03InstallTailwind(page);

    await capture.stop();

    console.log("Step 1 test completed successfully");
  });
});
