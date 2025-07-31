import { test } from "../fixtures/cdpContext";
import { step01CreateProject } from "./step_01_create_project";
import { step02InstallDependencies } from "./step_02_install_dependencies";
import { step03InitializeGit } from "./step_03_initialize_git";
import { step04InstallTailwind } from "./step_04_install_tailwind";
import { step05AddTailwindConfig } from "./step_05_add_tailwind_config";
import { step06AddPostcssConfig } from "./step_06_add_postcss_config";
import { step07ReplaceIndexCss } from "./step_07_replace_index_css";
import { step08CopySvgFile } from "./step_08_copy_svg_file";
import { step09CommitProject } from "./step_09_commit_project";
import { step10ConfigureEslintPrettier } from "./step_10_configure_eslint_prettier";
import { step11ConfigurePrettierrc } from "./step_11_configure_prettierrc";
import { step12ConfigureEslintConfig } from "./step_12_configure_eslint_config";
import { step13ConfigureVite } from "./step_13_configure_vite";
import { step14ConfigureViteConfig } from "./step_14_configure_vite_config";
import { step15ConfigureTsconfig } from "./step_15_configure_tsconfig";
import { step16AddFormattingScripts } from "./step_16_add_formatting_scripts";
import { step17RunLint } from "./step_17_run_lint";
import { step18StartDevServer } from "./step_18_start_dev_server";
import { authenticateWithPassword } from "../../utils/password-helper";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { chromium } from "@playwright/test";
import ffmpeg from "@ffmpeg-installer/ffmpeg";
import { saveVideo } from "playwright-video";

// Set FFmpeg path for video recording
process.env.FFMPEG_PATH = ffmpeg.path;

// Define steps with descriptions and functions in a single array
const steps = [
  {
    description: "Create new Vite React project",
    function: step01CreateProject,
  },
  {
    description: "Install dependencies",
    function: step02InstallDependencies,
  },
  {
    description: "Initialize git repository & create first commit",
    function: step03InitializeGit,
  },
  {
    description: "Install Tailwind CSS",
    function: step04InstallTailwind,
  },
  {
    description: "Add tailwind.config.js",
    function: step05AddTailwindConfig,
  },
  {
    description: "Add postcss.config.js",
    function: step06AddPostcssConfig,
  },
  {
    description: "Replace contents of src/index.css",
    function: step07ReplaceIndexCss,
  },
  {
    description: "Copy the multiversx-white.svg file to the public folder",
    function: step08CopySvgFile,
  },
  {
    description: "Commit the project",
    function: step09CommitProject,
  },
  {
    description: "Configure eslint and prettier",
    function: step10ConfigureEslintPrettier,
  },
  {
    description: "Configure .prettierrc",
    function: step11ConfigurePrettierrc,
  },
  {
    description: "Configure eslint.config.js",
    function: step12ConfigureEslintConfig,
  },
  {
    description: "Configure vite",
    function: step13ConfigureVite,
  },
  {
    description: "Configure vite.config.ts",
    function: step14ConfigureViteConfig,
  },
  {
    description: "Configure tsconfig.json",
    function: step15ConfigureTsconfig,
  },
  {
    description: "Add formatting scripts",
    function: step16AddFormattingScripts,
  },
  {
    description: "Run lint",
    function: step17RunLint,
  },
  {
    description: "Check if the project is running",
    function: step18StartDevServer,
  },
];

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

    // Display starting message
    await createTypewriterMessage(
      page,
      "🚀 React + Tailwind + MultiversX dApp Setup Tutorial"
    );
    await page.waitForTimeout(4000);

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
    await capture.stop();

    console.log("🎉 All 18 steps completed successfully!");
    console.log(
      "Your React + Tailwind + MultiversX dApp is now set up and running!"
    );
  });
});
