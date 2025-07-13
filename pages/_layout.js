import Link from "next/link";
import { Audiowide, Syne } from "next/font/google";

const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
});

const syne = Syne({
  weight: "400",
  subsets: ["latin"],
});

export default function Layout({ children }) {
  return (
    <div className={`bg-black text-white min-h-screen relative overflow-hidden ${syne.className}`}>
      {/* Logo Background */}
      <img
        src="/media/SMILEBOTUPDATE25.png"
        alt=""
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[700px] w-full h-auto opacity-10 pointer-events-none select-none z-0"
        style={{ filter: "brightness(0.7)" }}
        aria-hidden="true"
      />

      {/* 🔗 Nav */}
      <nav className="w-full px-4 py-3 flex justify-between items-center border-b border-purple-600 relative z-10">
        <Link href="/portal" className={`text-xl font-bold hover:text-purple-400 transition ${audiowide.className}`}>
          smile.bot
        </Link>
        <div className="space-x-4 text-sm">
          <Link href="/work" className="hover:text-purple-400">Work</Link>
          <Link href="/about" className="hover:text-purple-400">About</Link>
          <Link href="/connect" className="hover:text-purple-400">Connect</Link>
          <Link href="/nsfw" className="text-pink-500 hover:text-pink-300">NSFW</Link>
          <Link href="/resume" className="hover:text-purple-400">Resume</Link>
        </div>
      </nav>

      {/* 🧱 Page Content */}
      <main className="p-4 relative z-10">{children}</main>
    </div>
  );
}