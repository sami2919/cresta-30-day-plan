import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "How I'd Approach Cresta's Revenue Engine",
  description:
    "A 30 day plan for turning GTM strategy into systems, signals, workflows, and compounding infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
