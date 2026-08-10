import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "FRC 2186 Dogs of Steel | Westfield High School",
    template: "%s | Dogs of Steel 2186",
  },
  description:
    "Official website of FRC Team 2186 Dogs of Steel — Westfield High School, Chantilly VA. Competitive robotics, STEM outreach, and sponsorship.",
  keywords: [
    "FRC",
    "2186",
    "Dogs of Steel",
    "Westfield High School",
    "FIRST Robotics",
    "Chantilly",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} h-full antialiased dark`}
    >
      <body className="bg-steel-mesh flex min-h-full flex-col font-sans text-foreground">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
