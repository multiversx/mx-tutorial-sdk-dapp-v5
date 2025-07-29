import { Page, Locator } from "@playwright/test";

interface Point {
  x: number;
  y: number;
}

interface BoundingBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

async function waitForVisualMouse(page: Page): Promise<void> {
  try {
    await page.waitForFunction(
      () => (window as any).showVisualMouse !== undefined,
      {
        timeout: 5000,
      }
    );
  } catch (e) {
    console.log("Warning: Visual mouse not available");
  }
}

async function injectVisualMouse(page: Page): Promise<void> {
  try {
    await page.evaluate(() => {
      if (!document.getElementById("visual-mouse-cursor")) {
        const style = document.createElement("style");
        style.textContent = `
          .visual-mouse {
            position: fixed;
            width: 24px;
            height: 24px;
            background: radial-gradient(circle, #ff0000 30%, #ff6666 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 999999;
            border: 3px solid #ffffff;
            box-shadow: 0 0 15px rgba(255, 0, 0, 0.8);
            transition: all 0.1s ease;
            opacity: 0.8;
          }
        `;
        document.head.appendChild(style);
        const cursor = document.createElement("div");
        cursor.className = "visual-mouse";
        cursor.id = "visual-mouse-cursor";
        document.body.appendChild(cursor);
      }
      (window as any).showVisualMouse = function (x: number, y: number) {
        const visualCursor = document.getElementById("visual-mouse-cursor");
        if (visualCursor) {
          visualCursor.style.left = x - 12 + "px";
          visualCursor.style.top = y - 12 + "px";
          visualCursor.style.display = "block";
        }
      };
      (window as any).showVisualMouse(100, 100);
    });
    await waitForVisualMouse(page);
  } catch (e) {
    console.log(
      "Warning: Could not inject visual mouse:",
      (e as Error).message
    );
  }
}

async function smoothMove(
  page: Page,
  start: Point,
  end: Point,
  steps: number = 50
): Promise<void> {
  for (let i = 0; i <= steps; i++) {
    const x = start.x + (end.x - start.x) * (i / steps);
    const y = start.y + (end.y - start.y) * (i / steps);
    await page.mouse.move(x, y);
    try {
      await page.evaluate(
        (args: number[]) => {
          const [mx, my] = args;
          if ((window as any).showVisualMouse) {
            (window as any).showVisualMouse(mx, my);
          }
        },
        [x, y]
      );
    } catch (e) {
      // Ignore visual mouse errors during movement
    }
    await page.waitForTimeout(20);
  }
}

async function smoothClick(page: Page, element: Locator): Promise<void> {
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
}

export { injectVisualMouse, smoothMove, smoothClick };
