import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://staging.investor.niveshstar.com/login');
  await page.getByRole('textbox', { name: 'Enter mobile number' }).click();
  await page.getByRole('textbox', { name: 'Enter mobile number' }).fill('https://staging.investor.niveshstar.com/login');
  await page.getByRole('textbox', { name: 'Enter mobile number' }).click();
  await page.getByRole('textbox', { name: 'Enter mobile number' }).fill('9013001288');
  await page.getByRole('textbox', { name: 'Enter password' }).click();
  await page.getByRole('textbox', { name: 'Enter password' }).fill('Password@123');
  await page.locator('div').filter({ hasText: /^Submit$/ }).first()
  await page.locator('div').filter({ hasText: /^Mutual Funds$/ }).first()
  await page.getByText('PARENT SCHEME ON DEMO ENV ON 10 AUGUST SHIVA21View MoreInvestLumpsum₹1.00SIP')
  await page.getByText('PARENT SCHEME ON DEMO ENV ON 10 AUGUST SHIVA21View MoreInvestLumpsum₹1.00SIP')
  await page.locator('.css-175oi2r.r-16y2uox > div > div:nth-child(3) > div > div > div').first()
  await page.locator('div').filter({ hasText: /^Mutual Funds$/ }).first()
  await page.locator('div').filter({ hasText: /^View More$/ }).first()
  await page.locator('div').filter({ hasText: /^Mutual Funds$/ }).first()
  await page.locator('div').filter({ hasText: /^Invest$/ }).first()
  await page.locator('div').filter({ hasText: /^SIP$/ }).nth(1)
  await page.locator('div').filter({ hasText: /^One Time$/ }).nth(1)
  await page.locator('div').filter({ hasText: /^Close$/ }).first()
  await page.locator('div').filter({ hasText: /^Filter$/ }).nth(2)
  await page.locator('div').filter({ hasText: /^Close$/ }).nth(1)
  await page.locator('div').filter({ hasText: /^Mutual Funds$/ }).first()
});