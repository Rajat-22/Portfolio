export default async function run(page, ui) {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.evaluate(() => {
    document
      .querySelectorAll(".reveal")
      .forEach((n) => n.classList.add("is-visible"));
  });
  await page.locator("#projects").scrollIntoViewIfNeeded();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: ".qa/section-projects.png" });

  await page.locator("#experience").scrollIntoViewIfNeeded();
  await page.waitForTimeout(700);
  await page.screenshot({ path: ".qa/section-experience.png" });

  return "ok";
}
