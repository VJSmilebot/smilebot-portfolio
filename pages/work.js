import Link from "next/link";
import Layout from "./_layout";

export default function Work() {
  return (
    <Layout>
      <div className="min-h-screen px-6 py-12 text-white">
        <h1 className="text-5xl font-extrabold text-center mb-12">Creations</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* VJ Clips */}
          <div className="bg-white/5 p-6 rounded-xl border border-purple-500 transition hover:scale-105 hover:bg-white/10 hover:shadow-[0_0_15px_2px_rgba(168,85,247,0.6)]">
            <Link href="/work/vj">
              <img src="/media/vj-clip-preview.png" className="rounded-md w-full cursor-pointer" alt="Live VJ Visuals" />
              <p className="mt-4 text-center text-white/80 text-lg font-semibold">Enter VJ Clips</p>
            </Link>
          </div>

          {/* Memes */}
          <div className="bg-white/5 p-6 rounded-xl border border-purple-500 transition hover:scale-105 hover:bg-white/10 hover:shadow-[0_0_15px_2px_rgba(168,85,247,0.6)]">
            <Link href="/work/memes">
              <img src="/media/lilnasx.png" className="rounded-md w-full cursor-pointer" alt="Original Meme Archive" />
              <p className="mt-4 text-center text-white/80 text-lg font-semibold">View Memes</p>
            </Link>
          </div>

          {/* 3D Models */}
          <div className="bg-white/5 p-6 rounded-xl border border-purple-500 transition hover:scale-105 hover:bg-white/10 hover:shadow-[0_0_15px_2px_rgba(168,85,247,0.6)]">
            <Link href="/work/models">
              <img src="/media/SMILEBOTUPDATE202141723244203142527png_video.png" className="rounded-md w-full cursor-pointer" alt="3D Digital Sculptures" />
              <p className="mt-4 text-center text-white/80 text-lg font-semibold">Explore 3D Models</p>
            </Link>
          </div>

          {/* Graphic Design */}
          <div className="bg-white/5 p-6 rounded-xl border border-purple-500 transition hover:scale-105 hover:bg-white/10 hover:shadow-[0_0_15px_2px_rgba(168,85,247,0.6)]">
            <Link href="/work/design">
              <img src="/media/photo_2023-11-12_13-47-09.jpg" className="rounded-md w-full cursor-pointer" alt="Branding & Poster Designs" />
              <p className="mt-4 text-center text-white/80 text-lg font-semibold">See Graphic Work</p>
            </Link>
          </div>

          {/* NFT Collections */}
          <div className="bg-white/5 p-6 rounded-xl border border-purple-500 transition hover:scale-105 hover:bg-white/10 hover:shadow-[0_0_15px_2px_rgba(168,85,247,0.6)]">
            <Link href="/work/nfts">
              <img src="/media/banner.png" className="rounded-md w-full cursor-pointer" alt="NFT Collections by Smilebot" />
              <p className="mt-4 text-center text-white/80 text-lg font-semibold">View NFT Collections</p>
            </Link>
          </div>

          {/* Show Flyers */}
          <div className="bg-white/5 p-6 rounded-xl border border-purple-500 transition hover:scale-105 hover:bg-white/10 hover:shadow-[0_0_15px_2px_rgba(168,85,247,0.6)]">
            <Link href="/work/flyers">
              <img src="/media/diploFB.png" className="rounded-md w-full cursor-pointer" alt="Event Flyers & Show Posters" />
              <p className="mt-4 text-center text-white/80 text-lg font-semibold">Browse Flyers</p>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
