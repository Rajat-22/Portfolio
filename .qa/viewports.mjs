export default async function run(page, ui) {
  const sizes = [
    { name: "mobile-375", width: 375, height: 812 },
    { name: "mobile-430", width: 430, height: 932 },
    { name: "tablet-768", width: 768, height: 1024 },
    { name: "laptop-1024", width: 1024, height: 768 },
    { name: "desktop-1440", width: 1440, height: 900 },
    { name: "wide-1920", width: 1920, height: 1080 },
  ];

  const out = [];

  for (const size of sizes) {
    await page.setViewportSize({ width: size.width, height: size.height });
    await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
    await page.evaluate(() => {
      document
        .querySelectorAll(".reveal")
        .forEach((n) => n.classList.add("is-visible"));
    });
    await page.waitForTimeout(400);

    const metrics = await page.evaluate(() => {
      const doc = document.documentElement;
      const overflowing = [...document.querySelectorAll("body *")]
        .filter((el) => {
          const r = el.getBoundingClientRect();
          return (
            r.width > 0 && (r.right > window.innerWidth + 1 || r.left < -1)
          );
        })
        .slice(0, 4)
        .map(
          (el) =>
            `${el.tagName}.${(el.className || "").toString().slice(0, 40)}`,
        );

      return {
        scrollWidth: doc.scrollWidth,
        clientWidth: doc.clientWidth,
        horizontalScroll: doc.scrollWidth > doc.clientWidth + 1,
        overflowing,
        imagesBroken: [...document.querySelectorAll("img")].filter(
          (i) => i.naturalWidth === 0,
        ).length,
        h1Size: getComputedStyle(document.querySelector("h1")).fontSize,
      };
    });

    await page.screenshot({
      path: `.qa/${size.name}.png`,
      fullPage: true,
    });

    out.push({ ...size, ...metrics });
  }

  return out;
}
