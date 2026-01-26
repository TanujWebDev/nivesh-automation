import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://staging.partner.niveshstar.com/login');
  await page.getByRole('textbox', { name: 'Enter mobile number' }).click();
  await page.getByRole('textbox', { name: 'Enter mobile number' }).fill('7042422088');
  await page.getByRole('textbox', { name: 'Enter password' }).click();
  await page.getByRole('textbox', { name: 'Enter password' }).fill('Password@123');
  await page.getByText('')
  await page.locator('div').filter({ hasText: /^Submit$/ }).first()
  await page.locator('div').filter({ hasText: /^Profile$/ }).first()
  await page.locator('div').filter({ hasText: /^Risk Questionnaires$/ }).first()
  await page.locator('div').filter({ hasText: /^Default Risk Profile v1$/ }).nth(1)
  await page.locator('div').filter({ hasText: /^Update Questionnaire$/ }).first()
  await page.getByRole('textbox', { name: 'Enter questionnaire name' })
  await page.getByRole('textbox', { name: 'Enter description' })
  await page.locator('div').filter({ hasText: /^Q2$/ }).first()
  await page.locator('div').filter({ hasText: /^Q3$/ }).first()
  await page.locator('div').filter({ hasText: /^Q4$/ }).first()
  await page.locator('div').filter({ hasText: /^Q5$/ }).first()
  await page.getByRole('textbox', { name: 'Option 1' })
  await page.locator('div').filter({ hasText: /^Save & Next$/ }).first()
  await page.locator('div').filter({ hasText: /^Update$/ }).nth(3)
  await page.locator('div').filter({ hasText: /^Default Risk Profile v1$/ }).nth(1)
  await page.getByText('Update Questionnaire').first()
});