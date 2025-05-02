import Layout from "../_layout";
import Link from "next/link";

export default function Portal() {
  return (
    <Layout>
      <div className="min-h-screen px-6 py-16 text-white flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Welcome to the Portal</h1>
        <p className="max-w-2xl text-lg md:text-xl text-white/80 mb-10">
          I'm <strong>Smiley</strong> — a VJ, designer, creative technologist, and visual engineer. This is a portal into my world of immersive art, live visuals, tech experiments, and playful chaos across multiple mediums.
        </p>
        <p className="max-w-2xl text-base md:text-lg text-white/70 mb-12">
          Explore what I make, how I work, and why I do it. Whether you're looking to collaborate, hire me, or just vibe — everything you need starts here.
        </p>

        <div className="grid gap-4 md:grid-cols-3 w-full max-w-xl">
          <Link href="/work">
            <a className="block py-3 px-6 bg-purple-700 hover:bg-purple-600 rounded-xl transition text-lg font-medium">
              🎨 Explore My Work
            </a>
          </Link>
          <Link href="/resume">
            <a className="block py-3 px-6 bg-purple-700 hover:bg-purple-600 rounded-xl transition text-lg font-medium">
              🧾 View My Resumes
            </a>
          </Link>
          <Link href="/connect">
            <a className="block py-3 px-6 bg-purple-700 hover:bg-purple-600 rounded-xl transition text-lg font-medium">
              💬 Let’s Connect
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
