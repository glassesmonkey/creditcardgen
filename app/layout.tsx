import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Credit Card Generator",
  description: "Our Credit Card Generator offers quick and accurate simulation of credit card numbers for testing purposes, ensuring privacy and easy batch processing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="fo-verify" content="fa3aa522-d1c9-4803-a016-b5763fe27f6c" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
