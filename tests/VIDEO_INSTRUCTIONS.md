# Step video instructions:

## Action types

### 1. Creating a new file

- suppose file is named FILE_NAME.ts (but could be src/FILE_NAME.ts or ../FILE_NAME.ts)
- use `await createNewFile(page, "FILE_NAME.ts")`;
- then call `await createTypewriterMessage(page, "Paste FILE_NAME.ts from clipboard...")` 
- then call `await page.evaluate(() => {
    navigator.clipboard.writeText(
      `
      // FILE_NAME.ts content from corresponding .sh file
      `
    );
  });
- then call `await page.keyboard.press("Meta+v")`
- then call `await page.keyboard.press("Meta+s")`
- then call `await waitFor(1000)`
- then call `await createTypewriterMessage(page, "Done! 🎉")`


