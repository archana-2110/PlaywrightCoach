# PlaywrightCoach

A Playwright Test automation project for validating login and UI workflows on demo applications such as OrangeHRM and SwagLabs. The suite runs across multiple browsers and generates HTML results, screenshots, and traces for each test run.

## Project structure

```text
PlaywrightCoach/
├── .github/
│   └── workflows/
│       └── playwright.yml       # CI workflow for Playwright
├── tests/
│   ├── OrangeHRM/
│   │   ├── Admin/
│   │   │   └── addjobtitle.spec.js
│   │   ├── Login/
│   │   │   └── Adminlogin.spec.js
│   │   └── PIM/
│   │       └── addemp.spec.js
│   ├── SwagLabs/
│   │   └── Login.spec.js
│   └── example.spec.js          # sample Playwright test
├── testdata/
│   └── login.json                # shared test credentials
├── playwright.config.js          # Playwright browser and reporter configuration
├── package.json                  # project metadata and dependencies
├── package-lock.json             # lock file for npm dependencies
├── playwright-report/            # generated HTML report
├── README.md                     # project documentation
├── test-results/                 # screenshots, traces, and artifacts
├── node_modules/                 # installed dependencies (generated)
└── .gitignore                   # ignored local files and generated assets
```

## Test data

The project stores reusable input values in `testdata/login.json` for OrangeHRM login scenarios.

```json
{
  "valid_username": "Admin",
  "valid_password": "admin123",
  "invalid_username": "wdhhfbsd",
  "invalid_password": "xyzabc123"
}
```

This file is imported by tests to cover both valid and invalid login flows without hardcoding credentials in each spec.

## Tech stack

- Playwright Test
- JavaScript
- Node.js
- Faker.js for generating test data

## Getting started

1. Install Node.js (v18 or newer)
2. Install project dependencies:

```bash
npm install
```

3. Install browser binaries required by Playwright:

```bash
npx playwright install
```

## Running tests

Run the full suite:

```bash
npx playwright test
```

Run a specific file:

```bash
npx playwright test tests/OrangeHRM/Login/Adminlogin.spec.js
```

Run a specific browser project:

```bash
npx playwright test --project=chromium
```

Open the HTML report after execution:

```bash
npx playwright show-report
```

## CI

The GitHub Actions workflow in `.github/workflows/playwright.yml` installs dependencies, installs Playwright browsers, and runs the suite on push and pull request events.
