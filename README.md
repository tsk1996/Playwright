# SmaPlaywright Framework

A minimal Playwright test framework setup with a page load test.

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Install Playwright browsers:

   ```bash
   npm run install:browser
   ```

## Run tests

- Run all tests:

  ```bash
  npm test
  ```

- Run tests in headed mode:

  ```bash
  npm run test:headed
  ```

## Test coverage

- `tests/pageLoad.spec.ts` verifies that `https://example.com` loads and the page title contains `Example Domain`.
- `src/pages/HomePage.ts` is a simple page object for navigation and load-state validation.
