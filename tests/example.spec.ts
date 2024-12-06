import { test, expect } from '@playwright/test';

const urls = [
  "https://admin-dev.burgershop.io/authentication/login?returnUrl=%2Fadmin%2Fhome",

];
urls.forEach(url => {
  test("catalogue: " + url, async ({ playwright }) => {
    const browser = await playwright.chromium.launch({
      args: ['--remote-debugging-port=9222'],
    })
    const context = await browser.newContext();
    const page = await context.newPage()
    await page.setViewportSize({ width: 1480, height: 3300 });
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.evaluate(() => window.scrollTo(0, 500))
    await page.waitForTimeout(5000)
    await page.fill('#email','namvh@leadsgen.asia');
    await page.click('//button[@class="btn btn-warning w-100 text-white fw-medium fs-14 ng-star-inserted"]');
    await page.fill('#password','24081201Nam@')
    await page.click('//button[@class="btn btn-warning w-100 text-white fw-medium fs-14"]');
    await page.click('//a[@href="/admin/pod"]')
    await page.waitForTimeout(5000)
  await page.evaluate(() => {
    const content = document.querySelector('.content');
    if (content) {
      content.scrollTo(0, 1100); // Cuộn xuống vị trí 3300px
    }
  });
  await page.waitForTimeout(3000); // Chờ 1 giây, có thể tùy chỉnh

  await page.evaluate(() => {
    const content = document.querySelector('.content');
    if (content) {
      content.scrollTo(0, 1100); // Cuộn xuống vị trí 3300px
    }
  });
  await page.waitForTimeout(3000); // Chờ 1 giây, có thể tùy chỉnh

  await page.evaluate(() => {
    const content = document.querySelector('.content');
    if (content) {
      content.scrollTo(0, 1100); // Cuộn xuống vị trí 3300px
    }
  });
  await page.waitForTimeout(3000);

  // Chờ một chút để trang ổn định sau khi cuộn (nếu cần)
  await page.waitForTimeout(3000); // Chờ 1 giây, có thể tùy chỉnh

  // Chụp ảnh toàn bộ trang
  await expect(page).toHaveScreenshot(
    {
      fullPage: true, timeout: 50000,maxDiffPixelRatio: 0.2,
    }

  );
    await page.close();
    await context.close();
    await browser.close();
  });

});
urls.forEach(url => {
  test("home page: " + url, async ({ playwright }) => {
    const browser = await playwright.chromium.launch({
      args: ['--remote-debugging-port=9222'],
    })
    const context = await browser.newContext();
    const page = await context.newPage()
    await page.setViewportSize({ width: 1480, height: 3300 });
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.evaluate(() => window.scrollTo(0, 500))
    await page.waitForTimeout(5000)
    await page.fill('#email','namvh@leadsgen.asia');
    await page.click('//button[@class="btn btn-warning w-100 text-white fw-medium fs-14 ng-star-inserted"]');
    await page.fill('#password','24081201Nam@')
    await page.click('//button[@class="btn btn-warning w-100 text-white fw-medium fs-14"]');
    await page.waitForTimeout(5000)
  await page.evaluate(() => {
    const content = document.querySelector('.content');
    if (content) {
      content.scrollTo(0, 1100); // Cuộn xuống vị trí 3300px
    }
  });
  await page.waitForTimeout(3000); // Chờ 1 giây, có thể tùy chỉnh

  // Chờ một chút để trang ổn định sau khi cuộn (nếu cần)
  await page.waitForTimeout(2000); // Chờ 1 giây, có thể tùy chỉnh

  // Chụp ảnh toàn bộ trang
  await expect(page).toHaveScreenshot(
    {
      fullPage: true, timeout: 50000,maxDiffPixelRatio: 0.2,
    }

  );
    await page.close();
    await context.close();
    await browser.close();
  });

});