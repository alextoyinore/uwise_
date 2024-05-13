import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uwise",
  description: "Ed-commerce for skill and knowledge sharing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="w-[80%] m-[auto] min-h-[50vh]">{children}</div>
        <section className={"bg-blue-1 rounded-lg my-10 p-5 text-white w-[80%] m-[auto]"}>
          <Footer />
        </section>
      </body>
    </html>
  );
}
