import Providers from "./Providers";
import type { Metadata } from "next";
import { avenirNext, workSans } from "./fonts";
import "./globals.css";
import ErrorOverlay from "./components/debug/ErrorOverlay";



export const metadata: Metadata = {
  title: "Lendsqr",
  description: "Lendsqr Dashboard Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="en" className={`${avenirNext.variable} ${workSans.variable}`}>
      <body>
         <Providers >{children}</Providers >
      <ErrorOverlay />
        
        </body>
    </html>
  );
}
