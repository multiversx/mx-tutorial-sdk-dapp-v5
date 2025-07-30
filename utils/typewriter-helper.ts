import { Page } from "@playwright/test";

interface TypewriterOptions {
  strings?: string[];
  autoStart?: boolean;
  loop?: boolean;
  delay?: number | "natural";
  deleteSpeed?: number | "natural";
  pauseFor?: number;
  cursor?: string;
  devMode?: boolean;
  skipAddStyles?: boolean;
  wrapperClassName?: string;
  cursorClassName?: string;
  autoRemoveDelay?: number; // Delay in milliseconds before auto-removing the message
}

async function injectTypewriter(page: Page): Promise<void> {
  await page.evaluate(() => {
    console.log("Typewriter functionality ready");
  });
}

async function createTypewriterMessage(
  page: Page,
  elementSelector: string,
  message: string,
  options: TypewriterOptions = {}
): Promise<void> {
  // Inject typewriter functionality first
  await injectTypewriter(page);

  await page.evaluate(
    ({ elementSelector, message, options }) => {
      // Create container for the message if it doesn't exist
      let container = document.querySelector(elementSelector) as HTMLElement;
      if (!container) {
        container = document.createElement("div");
        container.id = elementSelector.replace("#", "");
        container.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
        font-size: 16px;
        z-index: 10000;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(10px);
      `;
        document.body.appendChild(container);
      }

      // Clear previous content
      container.innerHTML = "";

      // Simple typewriter effect
      const delay = (options.delay as number) || 100;
      const cursor = options.cursor || "█";
      let currentText = "";
      let currentIndex = 0;

      const typeNextChar = () => {
        if (currentIndex < message.length) {
          currentText += message[currentIndex];
          container.textContent = currentText + cursor;
          currentIndex++;
          setTimeout(typeNextChar, delay);
        } else {
          // Remove cursor when done
          container.textContent = currentText;

          // Auto-remove message after specified delay (default 3 seconds)
          const autoRemoveDelay = options.autoRemoveDelay || 3000;
          setTimeout(() => {
            if (container && container.parentNode) {
              container.remove();
            }
          }, autoRemoveDelay);
        }
      };

      // Start the typewriter effect
      typeNextChar();
    },
    { elementSelector, message, options }
  );
}

async function removeTypewriterMessage(
  page: Page,
  elementSelector: string
): Promise<void> {
  await page.evaluate((elementSelector) => {
    const container = document.querySelector(elementSelector);
    if (container) {
      container.remove();
    }
  }, elementSelector);
}

export { injectTypewriter, createTypewriterMessage, removeTypewriterMessage };
