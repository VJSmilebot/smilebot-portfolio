import Link from "next/link";
import { Audiowide, Syne } from "next/font/google";
import { useState } from "react";
import { siteContent } from "../data/siteContent";

const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
});

const syne = Syne({
  weight: "400",
  subsets: ["latin"],
});

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { href: "/work", label: "My Works" },
    { href: "/vj", label: "Booking" },
    { href: "/about", label: "About" },
    { href: "/connect", label: "Connect" },
    { href: "/resume", label: "Resume" },
  ];

  return (
    <div className={`bg-black text-white min-h-screen relative overflow-x-hidden ${syne.className}`}>
      <img
        src="/media/SMILEBOTUPDATE25.png"
        alt=""
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[700px] w-full h-auto opacity-10 pointer-events-none select-none z-0"
        style={{ filter: "brightness(0.7)" }}
        aria-hidden="true"
      />

      <nav className="w-full px-4 py-3 border-b border-purple-600 relative z-20 bg-black/80 backdrop-blur-sm">
        <div className="flex justify-between items-center">
          <Link href="/portal" className={`text-xl font-bold hover:text-purple-400 transition ${audiowide.className}`}>
            smile.bot
          </Link>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden min-h-11 min-w-11 px-3 rounded-lg border border-purple-500 text-sm hover:bg-purple-900/60"
          >
            Menu
          </button>
          <div className="hidden md:flex items-center gap-5 text-sm">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-purple-400">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        {menuOpen && (
          <div id="mobile-navigation" className="md:hidden grid gap-1 pt-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center min-h-11 px-3 rounded-lg hover:bg-purple-900/60"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <main className="relative z-10 pb-20 sm:pb-14">{children}</main>

      <footer className="fixed inset-x-0 bottom-0 z-30 border-t border-purple-600/70 bg-black/90 px-3 py-2 text-xs text-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>{siteContent.footerName}</span>
            <a href={`tel:${siteContent.phoneHref}`} className="hover:text-purple-300">{siteContent.phoneDisplay}</a>
            <a href={`mailto:${siteContent.email}`} className="hover:text-purple-300">{siteContent.email}</a>
          </div>
          <img src="/media/SMILEBOTUPDATE25.png" alt="Smilebot logo" className="h-7 w-7 shrink-0 object-contain" />
        </div>
      </footer>
    </div>
  );
}
