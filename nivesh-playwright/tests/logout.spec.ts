import { test, expect } from '@playwright/test';

test('Verify investor can logout and login again successfully', async ({ page }) => {

  // 🔐 LOGIN
  await page.goto('https://staging.investor.niveshstar.com/login');

  await page.getByRole('textbox', { name: 'Enter mobile number' })
    .fill('9013001288');

  await page.getByRole('textbox', { name: 'Enter password' })
    .fill('Password@123');

  await page.getByText('Submit', { exact: false }).click();
  await page.waitForLoadState('networkidle');

  // ✅ Verify login success
  await expect(page).toHaveURL(/investor/i);

  // 🚪 LOGOUT
  await page.getByText('Logout', { exact: false }).click();

  // ✅ Verify logout success (login page visible again)
  await expect(
    page.getByRole('textbox', { name: 'Enter mobile number' })
  ).toBeVisible({ timeout: 10000 });

  // 🔁 LOGIN AGAIN
  await page.getByRole('textbox', { name: 'Enter mobile number' })
    .fill('9013001288');

  await page.getByRole('textbox', { name: 'Enter password' })
    .fill('Password@123');

  await page.getByText('Submit', { exact: false }).click();
  await page.waitForLoadState('networkidle');

  // ✅ Verify re-login success
  await expect(page).toHaveURL(/investor/i);
});
