import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/HomePage.js';
import { config } from '../src/config.js';

test.describe('Page load', () => {
  test('should load Google homepage and verify Google logo', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goto(config.baseUrl);
    await homePage.waitForLoad();

    await expect(page).toHaveTitle(/Google/);
    await expect(homePage.googleLogo).toBeVisible();
  });
});
