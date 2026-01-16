import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://staging.investor.niveshstar.com/login');
  await page.getByRole('textbox', { name: 'Enter mobile number' }).click({
    modifiers: ['ControlOrMeta']
  });
  await page.getByRole('textbox', { name: 'Enter mobile number' }).fill('9013001288');
  await page.getByRole('textbox', { name: 'Enter password' }).click();
  await page.getByRole('textbox', { name: 'Enter password' }).fill('Password@123');
  await page.locator('div').filter({ hasText: /^Submit$/ }).first()
  await page.locator('div').filter({ hasText: /^Mandates$/ }).first()
  await page.locator('div').filter({ hasText: /^Add Mandate$/ }).first()
  await page.getByRole('textbox', { name: 'Select Bank Account' })
  await page.locator('div').filter({ hasText: /^Add new bank account$/ }).first()
  await page.locator('div').filter({ hasText: /^Add Bank$/ }).first()
  await page.locator('div').filter({ hasText: /^Close$/ }).nth(3)
  await page.locator('div').filter({ hasText: /^Set Custom Limit$/ }).first()
  await page.getByText('')
  await page.locator('div').filter({ hasText: /^Add Mandate$/ }).first()
  await page.locator('div').filter({ hasText: /^Close$/ }).first()
  await page.locator('div').filter({ hasText: /^Add Mandate$/ }).first()
  await page.locator('div').filter({ hasText: /^$/ }).first()
});