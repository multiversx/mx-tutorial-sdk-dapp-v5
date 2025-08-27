import { test } from "./fixtures/cdpContext";
import { authenticateWithPassword } from "../utils/password-helper";
import { chromium } from "@playwright/test";
import ffmpeg from "@ffmpeg-installer/ffmpeg";
// import { saveVideo } from "playwright-video";
import { video02steps } from "./VIDEO_02";
import { video01steps } from "./VIDEO_01";
import { video03steps } from "./VIDEO_03";
import { video04steps } from "./VIDEO_04";
import { video05steps } from "./VIDEO_05";
import { video06steps } from "./VIDEO_06";

// Set FFmpeg path for video recording
process.env.FFMPEG_PATH = ffmpeg.path;

test.describe("VIDEO_01 - Complete Project Setup", () => {
  test("should complete the entire project setup tutorial", async () => {
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

    // list all pages urls
    for (const pageEntry of pages) {
      const currentUrl = pageEntry.url();
      if (currentUrl.includes("http://127.0.0.1:8080")) {
        page = pageEntry;
        break;
      }
    }

    if (!page) {
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

    // const capture = await saveVideo(
    //   page,
    //   "test-results/videos/video-recording.mp4"
    // );

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

    const steps = [
      // ...video01steps,
      // ...video02steps,
      // ...video03steps,
      ...video04steps,
      // ...video05steps,
      // ...video06steps,
    ];

    // Loop through all steps dynamically
    for (let i = 0; i < steps.length; i++) {
      const step = steps[i];
      const stepNumber = i + 1; // Convert 0-based index to 1-based step number

      console.log(`Running Step ${stepNumber}: ${step.description}`);

      try {
        // Execute the step
        await step.function(page);

        console.log(`✅ Step ${stepNumber} completed`);
      } catch (error) {
        console.error(`❌ Step ${stepNumber} failed: ${error}`);
        throw error;
      }
    }

    console.log("Screen capture stopped");
    // await capture.stop();
  });
});
