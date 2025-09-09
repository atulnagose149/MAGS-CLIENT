"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-xl font-bold">
          MAGS
        </Link>
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/">Home</Link>
          <div className="relative">
            <button onClick={() => setOpen(!open)}>Products ▼</button>
            {open && (
              <div className="absolute top-full left-0 bg-white shadow-lg py-2">
                <Link
                  href="/products/sliding"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Sliding Systems
                </Link>
                <Link
                  href="/products/casement"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Casement Systems
                </Link>
                <Link
                  href="/products/curtain-wall"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Curtain Walls
                </Link>
              </div>
            )}
          </div>
          <Link href="/projects">Projects</Link>
          <Link href="/downloads">Downloads</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
