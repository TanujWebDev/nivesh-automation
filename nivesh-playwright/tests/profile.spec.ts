import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://staging.investor.niveshstar.com/login');
  await page.getByRole('textbox', { name: 'Enter mobile number' }).click();
  await page.getByRole('textbox', { name: 'Enter mobile number' }).fill('9013001288');
  await page.getByRole('textbox', { name: 'Enter password' }).click();
  await page.getByRole('textbox', { name: 'Enter password' }).fill('Password@123');
  await page.getByText('').click();
  await page.locator('div').filter({ hasText: /^Submit$/ }).first()
  await page.locator('div').filter({ hasText: /^Profile$/ }).first()
  await page.getByRole('textbox', { name: 'First Name' })
  await page.getByRole('textbox', { name: 'Middle Name' })
  await page.getByRole('textbox', { name: 'Last Name' })
  await page.getByRole('textbox', { name: 'PAN' })
  await page.getByRole('textbox', { name: 'Place of Birth' })
  await page.locator('div').filter({ hasText: /^Save$/ }).first()
  await page.locator('div').filter({ hasText: /^Personal Info$/ }).first()
  await page.locator('div').filter({ hasText: /^Address$/ }).first()
  await page.getByRole('textbox', { name: 'Address Line 1' })
  await page.getByRole('textbox', { name: 'Address Line 1' })
  await page.getByRole('textbox', { name: 'Address Line 3' })
  await page.getByRole('textbox', { name: 'Enter PIN Code' })
  await page.getByRole('textbox', { name: 'Enter City' })
  await page.getByText('Save')
  await page.locator('div').filter({ hasText: /^Save$/ }).first()
  await page.locator('div').filter({ hasText: /^Nominee$/ }).first()
  await page.getByText('NomineesAdd New Nominee')
  await page.locator('div').filter({ hasText: /^Bank Account$/ }).first()
  await page.getByText('Bank AccountAdd New Bank')
  await page.locator('div').filter({ hasText: /^BSE Details$/ }).first()
  await page.locator('div').filter({ hasText: /^Check UCC Status$/ }).first()
  await page.locator('div').filter({ hasText: /^Check UCC Status$/ }).nth(1)
  await page.locator('div').filter({ hasText: /^$/ }).first()
  await page.locator('div').filter({ hasText: /^Password$/ }).first()
  await page.locator('div').filter({ hasText: /^Submit$/ }).nth(1)
});