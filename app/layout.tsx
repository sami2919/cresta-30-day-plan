import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "How I'd Build Cresta's AI-Native Revenue Engine in 30 Days",
  description:
    "A practical plan for turning GTM strategy into systems, signals, workflows, and compounding infrastructure.",
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
