export default async function run(page, ui) {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });

  const links = await page.evaluate(() =>
    [...document.querySelectorAll("a[href]")].map((a) => ({
      text: (a.textContent || "").trim().slice(0, 40),
      href: a.getAttribute("href"),
      target: a.getAttribute("target"),
      rel: a.getAttribute("rel"),
    })),
  );

  // Verify every in-page anchor resolves to a real element
  const anchors = await page.evaluate(() =>
    [...document.querySelectorAll('a[href^="#"]')].map((a) => {
      const id = a.getAttribute("href").slice(1);
      return { id, exists: Boolean(document.getElementById(id)) };
    }),
  );

  // Verify the contact form validates
  await page.locator("#contact").scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.getByRole("button", { name: /send message/i }).click();
  await page.waitForTimeout(400);
  const validation = await page.evaluate(() => ({
    nameError: Boolean(document.getElementById("contact-name-error")),
    emailError: Boolean(document.getElementById("contact-email-error")),
    messageError: Boolean(document.getElementById("contact-message-error")),
  }));

  // Verify mobile menu opens and closes
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.getByRole("button", { name: /open menu/i }).click();
  await page.waitForTimeout(400);
  const menuOpen = await page.evaluate(() => {
    const m = document.getElementById("mobile-menu");
    return m && !m.hasAttribute("hidden");
  });
  await page.getByRole("button", { name: /close menu/i }).click();
  await page.waitForTimeout(400);
  const menuClosed = await page.evaluate(() => {
    const m = document.getElementById("mobile-menu");
    return m && m.hasAttribute("hidden");
  });

  return {
    totalLinks: links.length,
    external: links.filter((l) => l.href?.startsWith("http")),
    brokenAnchors: anchors.filter((a) => !a.exists),
    validation,
    menuOpen,
    menuClosed,
  };
}
