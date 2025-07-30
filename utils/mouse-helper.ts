import { Page, Locator } from "@playwright/test";

interface Point {
  x: number;
  y: number;
}

async function waitForVisualMouse(page: Page): Promise<void> {
  try {
    await page.waitForFunction(
      () =>
        (window as unknown as { showVisualMouse?: unknown }).showVisualMouse !==
        undefined,
      {
        timeout: 5000,
      }
    );
  } catch {
    console.log("Warning: Visual mouse not available");
  }
}

async function injectVisualMouse(page: Page): Promise<void> {
  try {
    await page.evaluate(() => {
      // Remove existing style if it exists
      const existingStyle = document.getElementById("visual-mouse-style");
      if (existingStyle) {
        existingStyle.remove();
      }

      const svgContent = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 28 28" enable-background="new 0 0 28 28" xml:space="preserve">
<polygon fill="#FFFFFF" points="8.2,20.9 8.2,4.9 19.8,16.5 13,16.5 12.6,16.6 "/>
<polygon fill="#FFFFFF" points="17.3,21.6 13.7,23.1 9,12 12.7,10.5 "/>
<rect x="12.5" y="13.6" transform="matrix(0.9221 -0.3871 0.3871 0.9221 -5.7605 6.5909)" width="2" height="8"/>
<polygon points="9.2,7.3 9.2,18.5 12.2,15.6 12.6,15.5 17.4,15.5 "/>
</svg>`;

      const style = document.createElement("style");
      style.id = "visual-mouse-style";
      style.textContent = `
          .visual-mouse {
            position: fixed;
            width: 16px;
            height: 26px;
            pointer-events: none;
            z-index: 999999;
            transition: all 0.1s ease;
            opacity: 0.9;
          }
        `;
      document.head.appendChild(style);
      const cursor = document.createElement("div");
      cursor.className = "visual-mouse";
      cursor.id = "visual-mouse-cursor";
      cursor.style.backgroundImage = `url('data:image/svg+xml;utf8,${encodeURIComponent(
        svgContent
      )}')`;
      cursor.style.backgroundSize = "cover";
      cursor.style.backgroundRepeat = "no-repeat";
      cursor.style.backgroundPosition = "center";
      document.body.appendChild(cursor);
      (
        window as unknown as {
          showVisualMouse?: (x: number, y: number) => void;
        }
      ).showVisualMouse = function (x: number, y: number) {
        const visualCursor = document.getElementById("visual-mouse-cursor");
        if (visualCursor) {
          visualCursor.style.left = x - 12 + "px";
          visualCursor.style.top = y - 3.5 + "px";
          visualCursor.style.display = "block";
        }
      };
      (window as unknown as { hideVisualMouse?: () => void }).hideVisualMouse =
        function () {
          const visualCursor = document.getElementById("visual-mouse-cursor");
          if (visualCursor) {
            visualCursor.style.display = "none";
          }
        };
      (
        window as unknown as {
          showVisualMouse?: (x: number, y: number) => void;
        }
      ).showVisualMouse!(100, 100);
    });
    await waitForVisualMouse(page);
  } catch (e) {
    console.log(
      "Warning: Could not inject visual mouse:",
      e instanceof Error ? e.message : String(e)
    );
  }
}

async function hideVisualMouse(page: Page): Promise<void> {
  try {
    await page.evaluate(() => {
      if (
        (window as unknown as { hideVisualMouse?: () => void }).hideVisualMouse
      ) {
        (window as unknown as { hideVisualMouse?: () => void })
          .hideVisualMouse!();
      }
    });
  } catch (e) {
    console.log(
      "Warning: Could not hide visual mouse:",
      e instanceof Error ? e.message : String(e)
    );
  }
}

async function smoothMove(
  page: Page,
  start: Point,
  end: Point,
  steps: number = 25
): Promise<void> {
  for (let i = 0; i <= steps; i++) {
    const x = start.x + (end.x - start.x) * (i / steps);
    const y = start.y + (end.y - start.y) * (i / steps);
    await page.mouse.move(x, y);
    try {
      await page.evaluate(
        (args: number[]) => {
          const [mx, my] = args;
          if (
            (
              window as unknown as {
                showVisualMouse?: (x: number, y: number) => void;
              }
            ).showVisualMouse
          ) {
            (
              window as unknown as {
                showVisualMouse?: (x: number, y: number) => void;
              }
            ).showVisualMouse!(mx, my);
          }
        },
        [x, y]
      );
    } catch {
      // Ignore visual mouse errors during movement
    }
    await page.waitForTimeout(20);
  }
}

async function smoothClick(
  page: Page,
  element: Locator,
  options?: { autoRemoveDelay?: number }
): Promise<void> {
  // Inject visual mouse automatically
  await injectVisualMouse(page);

  const box = await element.boundingBox();
  if (!box) return;

  const currentMouse = await page.evaluate(() => ({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  }));
  const targetPoint: Point = {
    x: box.x + box.width / 2,
    y: box.y + box.height / 2,
  };

  await smoothMove(page, currentMouse, targetPoint);
  await page.waitForTimeout(100);
  await page.mouse.click(targetPoint.x, targetPoint.y);
  await page.waitForTimeout(100);

  // Auto-remove visual mouse after specified delay (default 1 second)
  const autoRemoveDelay = options?.autoRemoveDelay || 1000;
  setTimeout(async () => {
    await hideVisualMouse(page);
  }, autoRemoveDelay);
}

export { injectVisualMouse, hideVisualMouse, smoothMove, smoothClick };
