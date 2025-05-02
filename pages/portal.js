import Link from "next/link";
import Layout from "./_layout";


export default function Portal() {
  return (
    <Layout>
      <div className="min-h-screen px-6 py-16 flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in">
          Welcome to Smilebot Productions
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl text-white/80 mb-10">
          I'm Smiley — a visual artist, live event wizard, and digital mischief-maker.
          <br className="hidden md:block" />
          This portal contains my creations across visual art, motion graphics,
          stagecraft, memes, 3D, NFTs, and more.
        </p>
        <Link href="/work">
          <a className="px-8 py-4 bg-purple-600 rounded-2xl text-lg hover:bg-purple-700 transition">
            View the Work
          </a>
        </Link>
      </div>
    </Layout>
  );
}
