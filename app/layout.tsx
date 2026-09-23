import type { Metadata } from "next";
import { Oswald } from "next/font/google";

import "./globals.css";
import NavBar from "./component/NavBar";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FITLOG",
  description: "Fitness Workout App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.className} min-h-full flex flex-col`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}