import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* 🔗 Nav */}
      <nav className="w-full px-4 py-3 flex justify-between items-center border-b border-purple-600">
        <Link href="/" className="text-xl font-bold hover:text-purple-400 transition">
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
      <main className="p-4">{children}</main>
    </div>
  );
}
