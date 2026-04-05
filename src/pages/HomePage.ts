import { Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly logo: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logo = page.locator('img');
  }

  async goto(url: string) {
    await this.page.goto(url);
  }

  async waitForLoad() {
    await this.page.waitForLoadState('load');
  }

  async isLogoVisible() {
    return this.logo.isVisible();
  }
}
