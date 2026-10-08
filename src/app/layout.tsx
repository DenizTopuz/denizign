import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Denizign — Deniz Topuz | UX Lead · Product Experience · Systems Thinking",
  description:
    "I connect users, product, technology and teams to turn complexity into intuitive digital experiences.",
  openGraph: {
    title: "Denizign — Deniz Topuz",
    description: "From complexity to clarity.",
    type: "website",
    siteName: "Denizign",
  },
  twitter: {
    card: "summary_large_image",
    title: "Denizign — Deniz Topuz",
    description: "From complexity to clarity.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
