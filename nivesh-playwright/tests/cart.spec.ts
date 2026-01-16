import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://staging.investor.niveshstar.com/login');
  await page.getByRole('textbox', { name: 'Enter mobile number' }).click();
  await page.getByRole('textbox', { name: 'Enter mobile number' }).fill('9013001288');
  await page.getByRole('textbox', { name: 'Enter password' }).click();
  await page.getByRole('textbox', { name: 'Enter password' }).fill('Password@123');
  await page.getByText('').click();
  await page.locator('div').filter({ hasText: /^Submit$/ }).first()
  await page.locator('div').filter({ hasText: /^Cart$/ }).first()
  await page.getByText('Total')
  await page.getByText('Total')
  await page.getByText('Lumpsum Amt₹0.00SIP Amt₹0.')
  await page.locator('div').filter({ hasText: /^Explore Mutual Funds$/ }).nth(1)
  await page.locator('div').filter({ hasText: /^Cart$/ }).first()
});