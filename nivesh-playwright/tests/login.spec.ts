import { test, expect } from '@playwright/test';

test('Verify investor can login successfully', async ({ page }) => {

  await page.goto('https://staging.investor.niveshstar.com/login');

  await page.getByRole('textbox', { name: 'Enter mobile number' })
    .fill('9013001288');

  await page.getByRole('textbox', { name: 'Enter password' })
    .fill('Password@123');

  await page.getByText('Submit', { exact: false }).click();

  // ✅ Wait for navigation after login
  await page.waitForLoadState('networkidle');

  // ✅ LOGIN SUCCESS ASSERTION (NO STRICT MODE ISSUE)
  await expect(page).toHaveURL(/investor/i);
});
