import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { MobileMenu } from "@/components/MobileMenu";
import { RiseFallback } from "@/components/RiseFallback";
import { StickyMenu } from "@/components/StickyMenu";
import { site } from "../../content/site";
import { FillPointer } from "@/components/FillPointer";
import { ThemeColorSync } from "@/components/ThemeColorSync";
import "@/styles/globals.css";

/*
 * The fonts are files in the project (src/fonts), not fetched from Google at
 * build time, so the site builds the same everywhere (also on GitHub's
 * servers). Both are variable fonts: one file per family covers all weights.
 */
const manrope = localFont({
  src: "../fonts/manrope-variable-latin.woff2",
  variable: "--font-manrope",
  weight: "200 800",
  display: "swap",
});

const inter = localFont({
  src: "../fonts/inter-variable-latin.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#111214",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.owner, url: site.url }],
  creator: site.owner,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale,
    url: site.url,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <ThemeColorSync />
        <FillPointer />
        <StickyMenu />
        <MobileMenu />
        <RiseFallback />
        {children}
      </body>
    </html>
  );
}
