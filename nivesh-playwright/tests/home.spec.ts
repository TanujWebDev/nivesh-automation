import { test, expect } from '@playwright/test';

test('Verify investor Home dashboard after login', async ({ page }) => {

  // 🔐 Login
  await page.goto('https://staging.investor.niveshstar.com/login');

  await page.getByRole('textbox', { name: 'Enter mobile number' })
    .fill('9013001288');

  await page.getByRole('textbox', { name: 'Enter password' })
    .fill('Password@123');

  await page.locator('div', { hasText: /^Submit$/ }).first().click();

  // ✅ Login completed
  await page.waitForLoadState('networkidle');

  // 🏠 Home dashboard visible
  await expect(
    page.getByText('Portfolio', { exact: false })
  ).toBeVisible();

  await expect(
    page.getByText('Total', { exact: false })
  ).toBeVisible();

  // 🔎 View All portfolio
  const viewAll = page.getByText('View All', { exact: false }).first();
  await expect(viewAll).toBeVisible();
  await viewAll.click();

  // 🔁 Back to Home
  await page.goBack();

  // ➕ New Transaction
  const newTxn = page.getByText('New Transaction', { exact: false }).first();
  await expect(newTxn).toBeVisible();
});
