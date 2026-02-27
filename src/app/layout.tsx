import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CPRN 2026 | International Conference by SEAMEO CECCEP",
  description:
    "Official website of CPRN 2026, an international conference organized by SEAMEO CECCEP. Find call for papers, submission guidelines, and important dates.",
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
