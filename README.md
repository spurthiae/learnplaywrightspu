# Playwright SPU Automation Framework

This project is a browser automation framework built with **Playwright Test** and
JavaScript. It contains end-to-end tests for the OrangeHRM demo application,
including login validation, employee creation, and job-title creation.

## Framework Overview

- **Playwright Test** provides the test runner, browser automation API, fixtures,
	assertions, retries, and parallel execution.
- **Chromium** is the currently enabled browser project.
- **Role-based locators** such as `getByRole()` make tests easier to read and
	maintain.
- **HTML reporting** creates a browsable report after each test run.
- **Trace collection** is enabled on failures to help diagnose failed steps.
- **Faker** generates unique employee names, IDs, and job titles for test data.
- **JSON test data** stores reusable login values in `testdata/login.json`.

The shared configuration is defined in `playwright.config.js`. Tests are
discovered from the `tests/` directory and run in headed mode by default.

## Project Structure

```text
.
├── playwright.config.js       # Playwright Test configuration
├── testdata/                  # Reusable test data
│   └── login.json
├── tests/                     # End-to-end test specifications
│   ├── Admin/
│   │   ├── login.spec.js
│   │   └── addemployee.spec.js
│   ├── job title/
│   │   └── addjobtitle.spec.js
│   └── sample.js
├── playwright-report/         # Generated HTML report
└── test-results/              # Generated test artifacts and traces
```

## Prerequisites

- Node.js (LTS recommended)
- npm
- Network access to the OrangeHRM demo application

## Installation

Install the project dependencies from the repository root:

```bash
npm install
npx playwright install chromium
```

## Usage

Run all tests:

```bash
npx playwright test
```

Run tests in headless mode:

```bash
npx playwright test --headed=false
```

Run one test file or a group of tests:

```bash
npx playwright test tests/Admin/login.spec.js
npx playwright test tests/Admin
```

Run tests matching a title:

```bash
npx playwright test -g "valid Credntials"
```

Open Playwright UI mode for interactive execution:

```bash
npx playwright test --ui
```

View the HTML report after a run:

```bash
npx playwright show-report
```

## Adding a Test

1. Create a `.spec.js` file inside `tests/`.
2. Import `test` and `expect` from `@playwright/test`.
3. Use the built-in `page` fixture to navigate and interact with the application.
4. Prefer accessible locators such as `getByRole`, `getByLabel`, and `getByText`.
5. Add assertions with `expect` to verify the expected result.
6. Use Faker when a test needs unique data and keep reusable values in `testdata/`.

Example:

```js
import { test, expect } from '@playwright/test';

test('dashboard is displayed after login', async ({ page }) => {
	await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
	await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
	await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
	await page.getByRole('button', { name: 'Login' }).click();

	await expect(page).toHaveURL(/dashboard\/index/);
});
```

## Debugging

When a test fails, inspect the generated HTML report first. Because
`trace: "retain-on-failure"` is configured, failed tests also retain a trace
that can be opened from the report for step-by-step debugging.

The demo application's credentials and availability can change. Keep test
credentials in test data or environment variables when adapting this framework
for a real application.
