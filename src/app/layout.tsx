import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "reunion 2025",
  description: "a website for reunion 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex items-center justify-center antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
