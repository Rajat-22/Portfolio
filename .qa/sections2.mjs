export default async function run(page, ui) {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.evaluate(() => {
    document
      .querySelectorAll(".reveal")
      .forEach((n) => n.classList.add("is-visible"));
  });

  const targets = ["skills", "assistant", "education", "contact"];
  for (const id of targets) {
    await page.locator(`#${id}`).scrollIntoViewIfNeeded();
    await page.waitForTimeout(1100);
    await page.screenshot({ path: `.qa/section-${id}.png` });
  }

  // Mobile menu check
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.evaluate(() => {
    document
      .querySelectorAll(".reveal")
      .forEach((n) => n.classList.add("is-visible"));
  });
  await ui.click(
    (await ui.snapshot()).match(/@(e\d+) button "Open menu"/)?.[1],
  );
  await page.waitForTimeout(500);
  await page.screenshot({ path: ".qa/mobile-menu.png" });

  return "ok";
}
