import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react'
import { GoogleTagManager } from '@next/third-parties/google'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Straightforward Insight",
  description:
    "A dynamic student-led organization which is committed to providing invaluable insights to a diverse range of questions. We serve as abridge, connecting eager students with pre-existing organizations to offer them unique opportunities for growth and learning.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      <Analytics/>
      <GoogleTagManager gtmId="@next/third-parties" />
      </body>
    </html>
  );
}
