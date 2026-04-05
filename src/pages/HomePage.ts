import { Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly googleLogo: Locator;

  constructor(page: Page) {
    this.page = page;
    this.googleLogo = page.locator('.lnXdpd');
  }
  async goto(url: string) {
    await this.page.goto(url);
  }

  async waitForLoad() {
    await this.page.waitForLoadState('load');
  }

  async isGoogleLogoVisible() {
    return this.googleLogo.isVisible();
  }
}
