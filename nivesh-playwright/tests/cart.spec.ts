import { test, expect } from '@playwright/test';

test('Verify investor can view Cart after login', async ({ page }) => {

  // 🔐 Login
  await page.goto('https://staging.investor.niveshstar.com/login');

  await page.getByRole('textbox', { name: 'Enter mobile number' })
    .fill('9013001288');

  await page.getByRole('textbox', { name: 'Enter password' })
    .fill('Password@123');

  await page.locator('div', { hasText: /^Submit$/ }).first().click();

  // ✅ Login completed
  await page.waitForLoadState('networkidle');

  // 🛒 Open Cart (stable text based)
  const cartTab = page.getByText('Cart', { exact: false }).first();
  await expect(cartTab).toBeVisible();
  await cartTab.click();

  // ✅ Cart page assertion
  await expect(
    page.getByText('Total', { exact: false })
  ).toBeVisible();

  await expect(
    page.getByText('Lumpsum', { exact: false })
  ).toBeVisible();
});
