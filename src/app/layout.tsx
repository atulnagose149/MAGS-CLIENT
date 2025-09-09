import type { Metadata } from "next";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import ClientWrapper from "@/components/ClientWrapper";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Mags Website",
  description: "Landing page built with Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientWrapper>
          <Navbar />
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
