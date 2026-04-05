import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/HomePage.js';

const BASE_URL = 'https://example.com';

test.describe('Page load', () => {
  test('should load the homepage and verify page title', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goto(BASE_URL);
    await homePage.waitForLoad();

    await expect(page).toHaveTitle(/Example Domain/);
    await expect(homePage.logo).toBeVisible();
  });
});
