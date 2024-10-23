import type { Metadata } from "next";
import "./globals.css";

import Navibar from "./components/header";
import FooterDescription from "./components/description";

import { SITENAME, SITEDESCRIPTION } from "./const";

export const metadata: Metadata = {
  title: SITENAME,
  description: SITEDESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navibar />
        {children}
        <FooterDescription />
      </body>
    </html>
  );
}
