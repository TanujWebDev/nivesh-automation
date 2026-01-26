import { test } from "@playwright/test";
import fs from "fs";

test("Axis PMS product API scrape", async ({ page }) => {
  const apiResponses = [];

  page.on("response", async (response) => {
    const url = response.url();

    // capture only useful APIs
    if (url.includes("api") || url.includes("product")) {
      try {
        const json = await response.json();
        apiResponses.push({
          url,
          status: response.status(),
          data: json,
        });
      } catch {}
    }
  });

  await page.goto(
    "https://simplehai.axisdirect.in/portal/index.php/pms/product-listing?q=Discover_All",
    { waitUntil: "networkidle" }
  );

  // wait for APIs to finish
  await page.waitForTimeout(5000);

  fs.writeFileSync(
    "axis-api-output.json",
    JSON.stringify(apiResponses, null, 2)
  );
});
