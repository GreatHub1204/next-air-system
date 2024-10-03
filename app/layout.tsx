import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import ClientOnly from "./components/ClientOnly";
import Navbar from "./components/navbar/Navbar";
import Modal from "./components/modals/Modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <Modal actionLabel="Submit" title="Login Modal" isOpen/>
          <Navbar />
        </ClientOnly>

        {children}
      </body>
    </html>
  );
}
