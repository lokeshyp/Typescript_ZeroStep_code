# Playwright TypeScript Project

This is a minimal Playwright + TypeScript scaffold.

Quick start (Windows PowerShell):

```powershell
cd D:\playwright
npm install
npx playwright install
npx playwright test
# open HTML report
npx playwright show-report
```

What was added:
- `package.json` with test scripts
- `tsconfig.json` TypeScript config
- `playwright.config.ts` Playwright config
- `tests/example.spec.ts` sample test
- `.gitignore`

Notes:
- Playwright will download browser binaries when you run `npx playwright install`.
- If you prefer to install only specific browsers, use `npx playwright install chromium` etc.

Troubleshooting
 - If tests fail with navigation errors such as "ERR_NAME_NOT_RESOLVED" or "Could not resolve hostname", your environment may not have outbound DNS/HTTP access. Try the following:
	 - Verify you can reach the site from the same machine: `Invoke-WebRequest https://example.com` in PowerShell.
	 - If you're behind a corporate proxy, set the `HTTP_PROXY` / `HTTPS_PROXY` environment variables in PowerShell before running Playwright.
	 - Run tests in headed mode to see the browser: `npx playwright test --headed` or `npm run test:headed`.
 - To run only the Chromium project: `npx playwright test --project=chromium`.

If you want help debugging a failing test, paste the failing test output or the screenshot from the `test-results/` folder and I can help analyze it.
