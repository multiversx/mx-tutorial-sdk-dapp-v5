import { Page, Locator } from "@playwright/test";
import { readFileSync } from "fs";
import { join } from "path";

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
    const cursorSvgPath = join(__dirname, "cursor.svg");
    const cursorSvg = readFileSync(cursorSvgPath, "utf-8");

    // Modify the SVG to have correct viewBox proportions
    const modifiedSvg = cursorSvg.replace(
      'viewBox="0 0 28 28"',
      'viewBox="0 0 16 26"'
    );

    await page.evaluate((svgContent: string) => {
      if (!document.getElementById("visual-mouse-cursor")) {
        const style = document.createElement("style");
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
      }
      (window as any).showVisualMouse = function (x: number, y: number) {
        const visualCursor = document.getElementById("visual-mouse-cursor");
        if (visualCursor) {
          visualCursor.style.left = x - 8 + "px";
          visualCursor.style.top = y - 13 + "px";
          visualCursor.style.display = "block";
        }
      };
      (window as any).hideVisualMouse = function () {
        const visualCursor = document.getElementById("visual-mouse-cursor");
        if (visualCursor) {
          visualCursor.style.display = "none";
        }
      };
      (window as any).showVisualMouse(100, 100);
    }, modifiedSvg);
    await waitForVisualMouse(page);
  } catch (e) {
    console.log(
      "Warning: Could not inject visual mouse:",
      (e as Error).message
    );
  }
}

async function hideVisualMouse(page: Page): Promise<void> {
  try {
    await page.evaluate(() => {
      if ((window as any).hideVisualMouse) {
        (window as any).hideVisualMouse();
      }
    });
  } catch (e) {
    console.log("Warning: Could not hide visual mouse:", (e as Error).message);
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

export { injectVisualMouse, hideVisualMouse, smoothMove, smoothClick };
