import { test, expect } from '@playwright/test';

test('Verify partner user can login using valid mobile number and password', async ({ page }) => {
  // Navigate to partner login page
  await page.goto('https://staging.partner.niveshstar.com/login');

  // Enter mobile number
  await page.getByRole('textbox', { name: 'Enter mobile number' }).fill('7042422088');

  // Enter password
  await page.getByRole('textbox', { name: 'Enter password' }).fill('Password@123');

  // Click submit button
  await page.locator('div', { hasText: /^Submit$/ }).first().click();

  // (Optional – future) Expect dashboard or any success element
  // await expect(page).toHaveURL(/dashboard/);
});
