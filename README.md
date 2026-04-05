# SmaPlaywright Framework

[![Playwright Tests](https://github.com/tsk1996/Playwright/workflows/Playwright%20Tests/badge.svg)](https://github.com/tsk1996/Playwright/actions)

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

- Run all tests (default QA env):

  ```bash
  npm test
  ```

- Run tests in specific environment:

  ```bash
  npm run test:qa
  npm run test:dev
  npm run test:prod
  ```

- Run tests in headed mode:

  ```bash
  npm run test:headed
  ```

- View HTML report (after running tests):

  ```bash
  npm run report
  ```

## Configuration

The framework supports multiple environments (QA, Dev, Prod). URLs are configured in `src/config.ts`. Set the `ENV` environment variable to switch environments (defaults to QA).

To customize URLs for each environment, edit the `urls` object in `src/config.ts`.

## Test coverage

- `tests/pageLoad.spec.ts` verifies that the configured URL loads, the page title contains `Google`, and the Google logo is visible (environment-dependent).
- `src/pages/HomePage.ts` is a simple page object for navigation and load-state validation.
- `src/config.ts` manages environment-specific configurations.
