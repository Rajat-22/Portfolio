export default async function run(page, ui) {
  await page.setViewportSize({ width: 430, height: 932 });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.evaluate(() => {
    document
      .querySelectorAll(".reveal")
      .forEach((n) => n.classList.add("is-visible"));
  });
  await page.locator("#projects").scrollIntoViewIfNeeded();
  await page.waitForTimeout(2500);

  return page.evaluate(() => {
    return [...document.querySelectorAll("#projects img")].map((i) => {
      const r = i.getBoundingClientRect();
      return {
        file: decodeURIComponent(i.currentSrc).split("/").pop().split("?")[0],
        loading: i.getAttribute("loading"),
        complete: i.complete,
        natural: `${i.naturalWidth}x${i.naturalHeight}`,
        box: `${Math.round(r.width)}x${Math.round(r.height)}`,
        top: Math.round(r.top),
        op: getComputedStyle(i).opacity,
      };
    });
  });
}
