export default async function run(page, ui) {
  await page.setViewportSize({ width: 430, height: 932 });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.evaluate(() => {
    document
      .querySelectorAll(".reveal")
      .forEach((n) => n.classList.add("is-visible"));
  });
  await page.evaluate(() => {
    const el = document.querySelector("#projects").getBoundingClientRect();
    window.scrollTo(0, window.scrollY + el.top + 700);
  });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: ".qa/mobile-projects-viewport.png" });
  return "ok";
}
