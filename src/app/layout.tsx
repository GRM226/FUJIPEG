import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FUJIPEG — Fujifilm Film Simulation Recipes",
  description:
    "Community-driven platform for browsing, sharing, and managing Fujifilm film simulation recipes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-neutral-950 text-white antialiased">
        {/* ───────── NAVBAR ───────── */}
        <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-lg font-bold tracking-tight">
              FUJIPEG
            </Link>
            <div className="flex items-center gap-6 text-sm text-neutral-400">
              <Link href="/recipes" className="transition hover:text-white">
                Recipes
              </Link>
              <Link href="/about" className="transition hover:text-white">
                About
              </Link>
            </div>
          </nav>
        </header>

        {children}

        {/* ───────── FOOTER ───────── */}
        <footer className="border-t border-neutral-800 px-6 py-12">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
            <div>
              <p className="font-bold">FUJIPEG</p>
              <p className="mt-1 text-sm text-neutral-500">
                Open-source Fujifilm recipes platform
              </p>
            </div>
            <div className="flex gap-6 text-sm text-neutral-500">
              <Link href="/recipes" className="transition hover:text-white">
                Recipes
              </Link>
              <Link href="/about" className="transition hover:text-white">
                About
              </Link>
              <a
                href="https://github.com/TON-PSEUDO/fujipeg"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                GitHub
              </a>
            </div>
          </div>
          <p className="mt-8 text-center text-xs text-neutral-700">
            © 2026 FUJIPEG — Community-driven film simulation recipes
          </p>
        </footer>
      </body>
    </html>
  );
}