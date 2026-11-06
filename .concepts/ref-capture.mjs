export default async function run(page, ui) {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("https://tusharwadvan.vercel.app/", {
    waitUntil: "networkidle",
  });
  await page.waitForTimeout(1500);

  // Scroll through the whole page slowly so every reveal fires
  const height = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < height; y += 500) {
    await page.evaluate((v) => window.scrollTo(0, v), y);
    await page.waitForTimeout(180);
  }
  await page.waitForTimeout(1200);

  const sections = await page.evaluate(() =>
    [...document.querySelectorAll("section, [id]")]
      .map((el) => ({
        id: el.id,
        top: el.getBoundingClientRect().top + window.scrollY,
      }))
      .filter((s) => s.id),
  );

  const shots = [
    { name: "ref-01-hero", y: 0 },
    { name: "ref-02-stats", y: 700 },
    { name: "ref-03-about", y: 1500 },
    { name: "ref-04-exp", y: 2400 },
    { name: "ref-05-work", y: 3400 },
    { name: "ref-06-skills", y: 5200 },
    { name: "ref-07-highlights", y: 6400 },
    { name: "ref-08-contact", y: 7400 },
  ];

  for (const s of shots) {
    await page.evaluate((v) => window.scrollTo(0, v), s.y);
    await page.waitForTimeout(900);
    await page.screenshot({ path: `.concepts/${s.name}.png` });
  }

  return { height, sections };
}
