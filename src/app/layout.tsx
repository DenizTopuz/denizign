import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { StickyMenu } from "@/components/StickyMenu";
import { site } from "../../content/site";
import { FillPointer } from "@/components/FillPointer";
import { ThemeColorSync } from "@/components/ThemeColorSync";
import "@/styles/globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

/* The page opens on the near-black hero; ThemeColorSync follows the scroll. */
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
        <ThemeColorSync />
        <FillPointer />
        <StickyMenu />
        {children}
      </body>
    </html>
  );
}
