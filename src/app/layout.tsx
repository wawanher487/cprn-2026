import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CPRN Summit 2026",
  description:
    "Bridging Research, Policy, and Practice: Pathways toward an Inclusive, Equitable, and Sustainable Futures",
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
