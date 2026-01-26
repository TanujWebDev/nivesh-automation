import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://staging.partner.niveshstar.com/login');
  await page.getByRole('textbox', { name: 'Enter mobile number' }).click();
  await page.getByRole('textbox', { name: 'Enter mobile number' }).click();
  await page.getByRole('textbox', { name: 'Enter mobile number' }).fill('7042422088');
  await page.getByRole('textbox', { name: 'Enter password' }).click();
  await page.getByRole('textbox', { name: 'Enter password' }).fill('Password@123');
  await page.getByText('')
  await page.locator('div').filter({ hasText: /^Submit$/ }).first()
  await page.locator('div').filter({ hasText: /^Profile$/ }).first()
  await page.locator('div').filter({ hasText: /^Risk Buckets$/ }).first()
  await page.getByText('Active').nth(4)
  await page.getByText('Active').nth(4)
  await page.getByText('The Risk RenegadeActiveCode:')
  await page.getByText('The Risk RenegadeActiveCode:')
});