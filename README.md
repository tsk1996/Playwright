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

- View HTML report (after running tests):

  ```bash
  npm run report
  ```

## Test coverage

- `tests/pageLoad.spec.ts` verifies that `https://www.google.com` loads, the page title contains `Google`, and the Google logo is visible.
- `src/pages/HomePage.ts` is a simple page object for navigation and load-state validation.
