import type { Metadata } from "next";
import "./globals.css";

import Navibar from "./components/header";
import FooterDescription from "./components/description";

import { SITENAME, SITEDESCRIPTION } from "./const";

export const metadata: Metadata = {
  title: SITENAME,
  description: SITEDESCRIPTION,
  verification: {
    // <meta name="google-site-verification" content="eONIAiWLaZ_HYxHcKTUBuw8KDWH0SDyckup2RPcP4D0" />
    google: "eONIAiWLaZ_HYxHcKTUBuw8KDWH0SDyckup2RPcP4D0",
  },
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
