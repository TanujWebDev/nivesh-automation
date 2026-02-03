import { test, expect } from '@playwright/test';

test('Verify investor can view Cart after login', async ({ page }) => {

  await page.goto('https://staging.investor.niveshstar.com/login');
  await page.getByRole('textbox', { name: 'Enter mobile number' }).click();
  await page.getByRole('textbox', { name: 'Enter mobile number' }).fill('9013001288');
  await page.getByRole('textbox', { name: 'Enter password' }).click();
  await page.getByRole('textbox', { name: 'Enter password' }).fill('Password@123');
  await page.getByText('')
  await page.locator('div').filter({ hasText: /^Submit$/ }).first()
  await page.locator('div').filter({ hasText: /^Cart$/ }).first()
  await page.locator('div').filter({ hasText: /^Add More Funds$/ }).first()
  await page.locator('div').filter({ hasText: /^Cart$/ }).first()
  await page.locator('div').filter({ hasText: /^Add Bucket$/ }).first()
  await page.locator('div').filter({ hasText: /^Add to Cart$/ }).nth(1)
  await page.locator('[id="2"]').getByText('')
  await page.locator('div').filter({ hasText: /^Close$/ }).nth(1)
  await page.locator('div').filter({ hasText: /^$/ }).first()
  await page.locator('div').filter({ hasText: /^SIP$/ }).nth(1)
  await page.locator('div').filter({ hasText: /^One Time$/ }).nth(1)
  await page.locator('div').filter({ hasText: /^Close$/ }).first()
});