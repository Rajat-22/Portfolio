export default async function run(page, ui) {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.evaluate(() => {
    document
      .querySelectorAll(".reveal")
      .forEach((n) => n.classList.add("is-visible"));
    window.scrollTo(0, document.body.scrollHeight);
  });
  await page.waitForTimeout(2500);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(800);

  return page.evaluate(() => {
    return [...document.querySelectorAll("img")].map((i) => {
      const cs = getComputedStyle(i);
      const r = i.getBoundingClientRect();
      return {
        file: decodeURIComponent(i.currentSrc || i.src)
          .split("/")
          .pop()
          .split("?")[0],
        params: (i.currentSrc || "").split("?")[1] || "none",
        natural: `${i.naturalWidth}x${i.naturalHeight}`,
        box: `${Math.round(r.width)}x${Math.round(r.height)}`,
        objectFit: cs.objectFit,
        loaded: i.complete && i.naturalWidth > 0,
      };
    });
  });
}
