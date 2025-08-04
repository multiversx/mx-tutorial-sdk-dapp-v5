import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { waitFor } from "../helpers/waitFor";
import { navigateToFile } from "../helpers/navigateToFile";

export async function step14ConfigureViteConfig(page: Page): Promise<void> {
  // Display starting message with typewriter effect
  await createTypewriterMessage(page, "Editing Vite configuration file...");

  await page.keyboard.press("Control+Meta+h");

  await navigateToFile(page, "vite.config.ts");

  await createTypewriterMessage(
    page,
    "Paste Vite configuration from clipboard..."
  );

  await page.keyboard.press("Meta+a");
  await waitFor(1500);
  await page.keyboard.press("Backspace");
  await waitFor(1500);

  await page.evaluate(() => {
    navigator.clipboard.writeText(
      `import tailwindcss from '@tailwindcss/vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import svgrPlugin from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  server: {
    port: Number(process.env.PORT) || 3000,
    strictPort: true,
    host: true,
    watch: {
      usePolling: false,
      useFsEvents: false
    },
    hmr: {
      overlay: false
    }
  },
  plugins: [
    react(),
    basicSsl(),
    tsconfigPaths(),
    svgrPlugin(),
    nodePolyfills({
      globals: { Buffer: true, global: true, process: true }
    }),
    tailwindcss(),
  ],
  css: {
    postcss: './postcss.config.js'
  },
  build: {
    outDir: 'build'
  },
  preview: {
    port: 3002,
    host: 'localhost',
    strictPort: true
  }
});`
    );
  });
  await page.keyboard.press("Meta+v");
  await page.keyboard.press("Meta+s");
  await page.keyboard.press("Meta+ArrowUp");

  await waitFor(1000);
  await createTypewriterMessage(
    page,
    "Vite configuration now configured with polyfills"
  );

  console.log("Vite configuration file created successfully");
}
