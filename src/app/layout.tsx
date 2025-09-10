import type { Metadata } from "next";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientWrapper from "@/components/ClientWrapper";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "MAGS - Premium Window Systems",
  description: "Energy-efficient, sustainably produced windows and doors that positively impact homes, buildings, and the people who use them.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientWrapper>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}
