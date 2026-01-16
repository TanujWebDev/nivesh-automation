import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://staging.partner.niveshstar.com/login');
  await page.getByRole('textbox', { name: 'Enter mobile number' }).click();
  await page.getByRole('textbox', { name: 'Enter mobile number' }).fill('7042422088');
  await page.getByRole('textbox', { name: 'Enter password' }).click();
  await page.getByRole('textbox', { name: 'Enter password' }).fill('Password@123');
  await page.getByText('').click();
  await page.locator('div').filter({ hasText: /^Submit$/ }).first()
  await page.locator('.css-175oi2r.r-vuvdlw')
  await page.locator('div').filter({ hasText: /^Columns$/ }).nth(1)
  await page.locator('div').filter({ hasText: /^Close$/ }).first()
  await page.locator('div').filter({ hasText: /^View All$/ }).first()
  await page.locator('div').filter({ hasText: /^Overview$/ }).first()
  await page.locator('div').filter({ hasText: /^Profile$/ }).nth(3)
  await page.getByText('Personal DetailsEdit')
  await page.locator('div').filter({ hasText: /^Mandates$/ }).first()
  await page.locator('div').filter({ hasText: /^Check Details$/ }).first()
  await page.locator('div').filter({ hasText: /^Close$/ }).nth(1)
  await page.locator('div').filter({ hasText: /^Add Mandate$/ }).first()
  await page.locator('div').filter({ hasText: /^Close$/ }).first()
  await page.locator('div').filter({ hasText: /^Cart$/ }).first()
  await page.locator('div').filter({ hasText: /^Add Funds$/ }).first()
  await page.locator('div').filter({ hasText: /^SIP$/ }).first()
  await page.locator('div').filter({ hasText: /^Close$/ }).first()
  await page.getByText('Generate Approval LinkAdd')
  await page.locator('div').filter({ hasText: /^Clear all$/ }).first()
  await page.locator('div').filter({ hasText: /^All Orders$/ }).first()
  await page.locator('div').filter({ hasText: /^Success$/ }).nth(2)
  await page.locator('div').filter({ hasText: /^Check Details$/ }).nth(1)
  await page.locator('div').filter({ hasText: /^Close$/ }).nth(1)
  await page.locator('div').filter({ hasText: /^SIPs$/ }).first()
  await page.getByText('PARENT SCHEME ON DEMO ENV ON 10 AUGUST SHIVA21Freq: MONTHLYDuration1.5 YearsSIP')
  await page.getByText('PARENT SCHEME ON DEMO ENV ON 10 AUGUST SHIVA21Freq: MONTHLYDuration1.5 YearsSIP')
  await page.locator('div').filter({ hasText: /^Mutual Funds$/ }).first()
  await page.locator('div').filter({ hasText: /^View More$/ }).first()
  await page.locator('div').filter({ hasText: /^Invest Now$/ }).first()
  await page.locator('div').filter({ hasText: /^Close$/ }).first()
  await page.locator('div').filter({ hasText: /^Mutual Funds$/ }).first()
  await page.locator('div').filter({ hasText: /^Invest$/ }).first()
  await page.locator('div').filter({ hasText: /^Close$/ }).first()
  await page.locator('div').filter({ hasText: /^Filter$/ }).nth(2)
  await page.locator('div').filter({ hasText: /^Close$/ }).nth(1)
  await page.locator('div').filter({ hasText: /^Overview$/ }).first()
});