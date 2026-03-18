import { Poppins, Cabin, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { cn } from "@/lib/utils";

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
  weight: ["400", "500"]
});

export const metadata = {
  title: "DaftarAnimeKu V2",
  description: "Website Daftar Anime Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={cn("font-mono", jetbrainsMono.variable)}>
      <body className={`${poppins.variable} ${cabin.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
