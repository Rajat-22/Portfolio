import Footer from "./footer";
import Navbar from "./navbar";
import ScrollToTop from "./helper/scroll-to-top";

/**
 * Site chrome: navbar above the page content, footer below.
 */
export default function SiteChrome({ children }) {
  return (
    <>
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
