import Appbar from "@/components/Appbar";
import Providers from "@/components/Providers";
import type { Metadata } from "next";
import "./globals.css";

import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "POC | Abhijeet Kumar",
  description:
    "Abhijeet Kumar is Senior Full Stack Developer, specialized in React,Next, Node and other Frontend Technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          <Appbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
