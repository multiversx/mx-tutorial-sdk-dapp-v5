import { Page } from "@playwright/test";
import { injectVisualMouse, smoothClick } from "./mouse-helper";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

/**
 * Fills in a password field with visual mouse feedback
 * @param page - Playwright page object
 * @param password - The password to enter
 * @param selector - CSS selector for the password input (defaults to common password selectors)
 */
export async function fillPassword(
  page: Page,
  password: string,
  selector: string = 'input[type="password"], input[name="password"]'
): Promise<void> {
  const passwordInput = page.locator(selector);
  await passwordInput.waitFor({ state: "visible" });
  await injectVisualMouse(page);
  await smoothClick(page, passwordInput);
  await passwordInput.fill(password);
  console.log("Entered password");
}

/**
 * Clicks a submit button with visual mouse feedback
 * @param page - Playwright page object
 * @param selector - CSS selector for the submit button (defaults to common submit selectors)
 */
export async function clickSubmitButton(
  page: Page,
  selector: string = 'button:has-text("Submit"), input[type="submit"]'
): Promise<void> {
  const submitButton = page.locator(selector);
  await submitButton.waitFor({ state: "visible" });
  await smoothClick(page, submitButton);
  console.log("Clicked Submit button!");
}

/**
 * Complete password authentication flow - fills password and clicks submit
 * @param page - Playwright page object
 * @param password - The password to enter
 * @param passwordSelector - CSS selector for the password input
 * @param submitSelector - CSS selector for the submit button
 */
export async function authenticateWithPassword(
  page: Page,
  password = process.env.TEST_PASSWORD || "",
  passwordSelector?: string,
  submitSelector?: string
): Promise<void> {
  // proceed if within 1 second no input field is found
  await page.waitForTimeout(1000);
  const passwordInput = page.locator(
    passwordSelector || "input[type='password']"
  );
  if ((await passwordInput.count()) === 0) {
    console.log("No password input field found, skipping authentication");
    return;
  }
  await fillPassword(page, password, passwordSelector);
  await clickSubmitButton(page, submitSelector);
}
