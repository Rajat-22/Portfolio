import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { siteMeta } from "@/utils/data/personal-data";
import SiteChrome from "./components/site-chrome";
import RevealObserver from "./components/helper/reveal-observer";
import "./css/globals.scss";

export const metadata = {
  metadataBase: new URL(siteMeta.url),
  title: {
    default: siteMeta.title,
    template: siteMeta.titleTemplate,
  },
  description: siteMeta.description,
  keywords: siteMeta.keywords,
  authors: [{ name: "Rajat Sharma", url: siteMeta.url }],
  creator: "Rajat Sharma",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteMeta.locale,
    url: siteMeta.url,
    siteName: "Rajat Sharma",
    title: siteMeta.title,
    description: siteMeta.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rajat Sharma — Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.title,
    description: siteMeta.description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    shortcut: "/favicon.ico",
  },
};

export const viewport = {
  themeColor: "#f5f3ee",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rajat Sharma",
  jobTitle: "Senior Software Engineer",
  worksFor: { "@type": "Organization", name: "Sopra Steria" },
  url: siteMeta.url,
  email: "mailto:rajatsharma221098@gmail.com",
  sameAs: [
    "https://github.com/Rajat-22",
    "https://www.linkedin.com/in/rajatsharma22",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-blue focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        <ToastContainer
          position="bottom-right"
          theme="light"
          autoClose={4500}
          hideProgressBar
        />
        <SiteChrome>{children}</SiteChrome>
        <RevealObserver />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
