"use client";

import { usePathname } from "next/navigation";
import Footer from "./footer";
import Navbar from "./navbar";
import ScrollToTop from "./helper/scroll-to-top";

/**
 * The main site's chrome. Navbar sits above the page content, footer below —
 * so this renders the navbar, then the children, then the footer.
 */
export default function SiteChrome({ children }) {
  const pathname = usePathname();
  const isConcept = pathname?.startsWith("/concepts");

  if (isConcept) {
    return <main id="main">{children}</main>;
  }

  return (
    <>
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
