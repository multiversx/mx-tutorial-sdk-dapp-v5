import { Page } from "@playwright/test";

interface TypeOptions {
  delay?: number; // Base delay between characters (default: 50-150ms)
  variance?: number; // Random variance in typing speed (default: 0.3)
  pauseProbability?: number; // Probability of longer pauses (default: 0.1)
  pauseDuration?: number; // Duration of longer pauses (default: 200-500ms)
  minDelay?: number; // Minimum delay between characters
  maxDelay?: number; // Maximum delay between characters
}

/**
 * Types text like a human with natural delays and variations
 */
export async function humanType(
  page: Page,
  text: string,
  options: TypeOptions = {}
): Promise<void> {
  const {
    delay = 100,
    variance = 0.3,
    pauseProbability = 0.1,
    pauseDuration = 350,
    minDelay = 30,
    maxDelay = 100,
  } = options;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    // Type the character
    await page.keyboard.type(char);

    // Calculate natural delay
    let currentDelay = delay;

    // Add variance to make it more human-like
    const varianceAmount = delay * variance;
    currentDelay += (Math.random() - 0.5) * varianceAmount * 2;

    // Ensure delay is within bounds
    currentDelay = Math.max(minDelay, Math.min(maxDelay, currentDelay));

    // Occasionally add longer pauses (like when thinking)
    if (Math.random() < pauseProbability) {
      currentDelay += pauseDuration + Math.random() * 200;
    }

    // Wait before next character
    await page.waitForTimeout(currentDelay);
  }
}

/**
 * Types text and presses Enter with human-like timing
 */
export async function typeAndEnter(
  page: Page,
  text: string,
  options: TypeOptions = {}
): Promise<void> {
  await humanType(page, text, options);

  // Natural pause before pressing Enter
  await page.waitForTimeout(150 + Math.random() * 200);

  await page.keyboard.press("Enter");
}
