import type { Metadata } from "next";
import "./globals.css";
import { siteName, siteUrl } from "@/lib/config";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteName, template: "%s | " + siteName },
  description: "Evidence-aware ideas for wellbeing, fitness, sleep and recovery.",
  applicationName: siteName,
  robots: { index: true, follow: true },
  openGraph: { type: "website", siteName, title: siteName, description: "Wellbeing, fitness, sleep and recovery." }
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
