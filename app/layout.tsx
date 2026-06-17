import type { Metadata } from "next";
import { Footer } from "@/modules/home/components/footer";
import { Navbar } from "@/modules/home/components/navbar";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ecesocbitm.in'),
  title: {
    default: "ECE Society | BIT Mesra",
    template: "%s | ECE Society",
  },
  description: "ECE Society (ECESOC) at BIT Mesra empowers the next generation of engineers. We bridge the gap between theoretical schematics and real-world silicon applications through technical excellence and hardware innovation.",
  keywords: ["ECE Society", "ECESOC", "BIT Mesra", "Electronics and Communication", "Engineering", "Hardware", "Tech Club"],
  openGraph: {
    title: "ECE Society | BIT Mesra",
    description: "Empowering the next generation of engineers through neural-interfaced design, technical excellence, and hardware innovation.",
    url: "https://ecesocbitm.in",
    siteName: "ECE Society BIT Mesra",
    locale: "en_US",
    type: "website",
  },
  verification: {
    google: "IVfHKtWyMT7jLsGD3cI2SG-dL1uwo18vK3L_q5vvHp4",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
