import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fujipeg",
  description: "Collaborative film recipe platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} h-full bg-white antialiased`}
    >
      <body
        className="min-h-full flex flex-col bg-white"
        style={{ fontFamily: "var(--font-bricolage)" }}
      >
        {/* ───────── NAVBAR ───────── */}
        <header className="fixed top-3 left-1/2 z-50 -translate-x-1/2">
          <nav className="flex items-center gap-1 rounded-full bg-white/30 px-2 py-1 text-sm font-semibold text-neutral-800 shadow-lg backdrop-blur-md">
            <Link
              href="/"
              className="rounded-full px-4 py-2 transition hover:bg-neutral-200"
            >
              Fujipeg
            </Link>
            <Link
              href="/explore"
              className="rounded-full px-4 py-2 transition hover:bg-neutral-200"
            >
              Explore
            </Link>
            <Link
              href="/submit"
              className="rounded-full px-4 py-2 transition hover:bg-neutral-200"
            >
              Submit
            </Link>
            <Link
              href="/login"
              className="rounded-full px-4 py-2 transition hover:bg-neutral-200"
            >
              Login
            </Link>
          </nav>
        </header>

        {children}

        {/* ───────── FOOTER ───────── */}
        <footer className="border-t border-neutral-200 px-6 py-12">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
            <div>
              <p className="font-bold text-neutral-900">FUJIPEG</p>
              <p className="mt-1 text-sm text-neutral-400">
                Open-source Fujifilm recipes platform
              </p>
            </div>
            <div className="flex gap-6 text-sm text-neutral-400">
              <Link href="/recipes" className="transition hover:text-neutral-900">
                Recipes
              </Link>
              <Link href="/about" className="transition hover:text-neutral-900">
                About
              </Link>
              <a
                href="https://github.com/TON-PSEUDO/fujipeg"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-neutral-900"
              >
                GitHub
              </a>
            </div>
          </div>
          <p className="mt-8 text-center text-xs text-neutral-400">
            © 2026 FUJIPEG — Community-driven film simulation recipes
          </p>
        </footer>
      </body>
    </html>
  );
}
