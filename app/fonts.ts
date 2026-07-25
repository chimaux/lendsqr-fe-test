import localFont from "next/font/local";
import { Work_Sans } from "next/font/google";

export const avenirNext = localFont({
  src: [
    { path: "../public/fonts/avenir-next/AvenirNextCyr-Thin.woff2", weight: "100", style: "normal" },
    { path: "../public/fonts/avenir-next/AvenirNextCyr-ThinItalic.woff2", weight: "100", style: "italic" },

    { path: "../public/fonts/avenir-next/AvenirNextCyr-UltraLight.woff2", weight: "200", style: "normal" },
    { path: "../public/fonts/avenir-next/AvenirNextCyr-UltraLightIt.woff2", weight: "200", style: "italic" },

    { path: "../public/fonts/avenir-next/AvenirNextCyr-Light.woff2", weight: "300", style: "normal" },
    { path: "../public/fonts/avenir-next/AvenirNextCyr-LightItalic.woff2", weight: "300", style: "italic" },

    { path: "../public/fonts/avenir-next/AvenirNextCyr-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/avenir-next/AvenirNextCyr-Italic.woff2", weight: "400", style: "italic" },

    { path: "../public/fonts/avenir-next/AvenirNextCyr-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/avenir-next/AvenirNextCyr-MediumItalic.woff2", weight: "500", style: "italic" },

    { path: "../public/fonts/avenir-next/AvenirNextCyr-Demi.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/avenir-next/AvenirNextCyr-DemiItalic.woff2", weight: "600", style: "italic" },

    { path: "../public/fonts/avenir-next/AvenirNextCyr-Bold.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/avenir-next/AvenirNextCyr-BoldItalic.woff2", weight: "700", style: "italic" },

    { path: "../public/fonts/avenir-next/AvenirNextCyr-Heavy.woff2", weight: "800", style: "normal" },
    { path: "../public/fonts/avenir-next/AvenirNextCyr-HeavyItalic.woff2", weight: "800", style: "italic" },
  ],
  variable: "--font-avenir-next",
  display: "swap",
});

export const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-work-sans",
  display: "swap",
});