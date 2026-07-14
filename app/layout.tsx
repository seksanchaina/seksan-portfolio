import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seksan Chaina | Manufacturing Digital Transformation",
  description: "Manufacturing digital portfolio focused on production improvement, data visibility, automation, and measurable business impact.",
  keywords: ["manufacturing", "digital transformation", "Power BI", "automation", "continuous improvement"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
