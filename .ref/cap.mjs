export default async function run(page, ui) {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("https://tusharwadvan.vercel.app/", {
    waitUntil: "networkidle",
  });
  await page.waitForTimeout(2000);

  const h = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < h; y += 400) {
    await page.evaluate((v) => window.scrollTo(0, v), y);
    await page.waitForTimeout(150);
  }
  await page.waitForTimeout(1500);

  const stops = [0, 850, 1700, 2550, 3400, 4250, 5100, 5950, 6800, 7650];
  for (let i = 0; i < stops.length; i++) {
    if (stops[i] > h) break;
    await page.evaluate((v) => window.scrollTo(0, v), stops[i]);
    await page.waitForTimeout(800);
    await page.screenshot({ path: `.ref/s${String(i).padStart(2, "0")}.png` });
  }
  return { height: h };
}
