import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://staging.partner.niveshstar.com/login');
  await page.getByRole('textbox', { name: 'Enter mobile number' }).click({
    modifiers: ['ControlOrMeta']
  });
  await page.getByRole('textbox', { name: 'Enter mobile number' }).click({
    modifiers: ['ControlOrMeta']
  });
  await page.getByRole('textbox', { name: 'Enter mobile number' }).fill('7042422088');
  await page.getByRole('textbox', { name: 'Enter password' }).click();
  await page.getByRole('textbox', { name: 'Enter password' }).fill('Password@123');
  await page.getByText('').click();
  await page.locator('div').filter({ hasText: /^Submit$/ }).first
});