import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://staging.investor.niveshstar.com/login');
  await page.getByRole('textbox', { name: 'Enter mobile number' }).click({
    modifiers: ['ControlOrMeta']
  });
  await page.getByRole('textbox', { name: 'Enter mobile number' }).fill('9013001288');
  await page.getByRole('textbox', { name: 'Enter password' }).click();
  await page.getByRole('textbox', { name: 'Enter password' }).fill('Password@123');
  await page.getByText('').click();
  await page.locator('div').filter({ hasText: /^Submit$/ }).first()
  await page.locator('div').filter({ hasText: /^Home$/ })
  await page.getByText('PortfolioCurrent₹0.00Total')
  await page.getByText('PortfolioCurrent₹0.00Total')
  await page.locator('div').filter({ hasText: /^View All$/ }).first()
  await page.locator('div').filter({ hasText: /^Home$/ }).first()
  await page.locator('div').filter({ hasText: /^New Transaction$/ }).first()
  await page.locator('div').filter({ hasText: /^Home$/ }).first()
});