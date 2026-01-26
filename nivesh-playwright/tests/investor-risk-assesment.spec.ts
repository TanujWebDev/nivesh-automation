import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://staging.investor.niveshstar.com/login');
  await page.getByRole('textbox', { name: 'Enter mobile number' }).click();
  await page.getByRole('textbox', { name: 'Enter mobile number' }).fill('9013001288');
  await page.getByRole('textbox', { name: 'Enter password' }).click();
  await page.getByRole('textbox', { name: 'Enter password' }).fill('Password@23');
  await page.getByText('')
  await page.getByRole('textbox', { name: 'Enter password' })
  await page.getByRole('textbox', { name: 'Enter password' }).fill('Password@123');
  await page.locator('div').filter({ hasText: /^Submit$/ }).first()
  await page.locator('div').filter({ hasText: /^Risk Assessments$/ }).first()
  await page.locator('div').filter({ hasText: /^Default Risk Profile v1$/ }).nth(2)
  await page.locator('div').filter({ hasText: /^Refresh$/ }).first()
  await page.locator('div').filter({ hasText: /^Start Assessment$/ }).nth(1)
  await page.locator('div').filter({ hasText: /^A\. Exit immediately to avoid further losses$/ }).nth(1)
  await page.locator('div').filter({ hasText: /^A\. Less than 1 year$/ }).nth(1)
  await page.locator('div').filter({ hasText: /^A\. Capital preservation with minimal downside$/ }).nth(1)
  await page.locator('div').filter({ hasText: /^A\. I am completely new to them$/ }).nth(1)
  await page.locator('div').filter({ hasText: /^A\. None, I would need liquidity immediately$/ }).nth(1)
  await page.locator('div').filter({ hasText: /^View Assessment$/ }).first()
  await page.locator('div').filter({ hasText: /^Restart$/ }).first()
  await page.getByText('RefreshAll Loaded')
});