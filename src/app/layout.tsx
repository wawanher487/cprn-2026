import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CPRN 2026 | International Conference by SEAMEO CECCEP",
  description:
    "Official website of CPRN 2026, an international conference organized by SEAMEO CECCEP. Find call for papers, submission guidelines, and important dates.",
  keywords: [
    "CPRN 2026",
    "CPRN Summit 2026",
    "SEAMEO CECCEP conference",
    "international research conference",
    "education research conference Southeast Asia",
  ],
  metadataBase: new URL("https://cprn2026.ceccep.org"),
  openGraph: {
    title: "CPRN 2026 International Conference",
    description:
      "Official website of CPRN 2026 organized by SEAMEO CECCEP.",
    url: "https://cprn2026.ceccep.org",
    siteName: "CPRN 2026",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
