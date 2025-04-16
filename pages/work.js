import Link from "next/link";
import Layout from "./_layout";

export default function Work() {
  return (
    <Layout>
      <div className="min-h-screen px-6 py-12 text-white">
        <h1 className="text-5xl font-extrabold text-center mb-12">Creations</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white/5 p-6 rounded-xl border border-purple-500 transition hover:scale-105 hover:bg-white/10 hover:shadow-[0_0_15px_2px_rgba(168,85,247,0.6)]">
            <Link href="/work/vj">
              <img src="/media/vj-clip-preview.jpg" className="rounded-md w-full cursor-pointer" alt="VJ Preview" />
              <p className="mt-4 text-center text-white/80 text-lg font-semibold">Enter VJ Clips</p>
            </Link>
          </div>

                    <div className="bg-white/5 p-6 rounded-xl border border-purple-500 transition hover:scale-105 hover:bg-white/10">
            <Link href="/work/memes">
              <img src="/media/meme-preview.jpg" className="rounded-md w-full cursor-pointer" alt="Meme Preview" />
              <p className="mt-4 text-center text-white/80 text-lg font-semibold">View Memes</p>
            </Link>
          </div>

                    <div className="bg-white/5 p-6 rounded-xl border border-purple-500 transition hover:scale-105 hover:bg-white/10">
            <Link href="/work/models">
              <img src="/media/3dmodel-preview.jpg" className="rounded-md w-full cursor-pointer" alt="3D Model Preview" />
              <p className="mt-4 text-center text-white/80 text-lg font-semibold">Explore 3D Models</p>
            </Link>
          </div>

                    <div className="bg-white/5 p-6 rounded-xl border border-purple-500 transition hover:scale-105 hover:bg-white/10">
            <Link href="/work/design">
              <img src="/media/design-preview.jpg" className="rounded-md w-full cursor-pointer" alt="Design Preview" />
              <p className="mt-4 text-center text-white/80 text-lg font-semibold">See Graphic Work</p>
            </Link>
          </div>

                    <div className="bg-white/5 p-6 rounded-xl border border-purple-500 transition hover:scale-105 hover:bg-white/10">
            <Link href="/work/nfts">
              <img src="/media/nft-preview.jpg" className="rounded-md w-full cursor-pointer" alt="NFT Preview" />
              <p className="mt-4 text-center text-white/80 text-lg font-semibold">View NFT Collections</p>
            </Link>
          </div>

                    <div className="bg-white/5 p-6 rounded-xl border border-purple-500 transition hover:scale-105 hover:bg-white/10">
            <Link href="/work/flyers">
              <img src="/media/flyer-preview.jpg" className="rounded-md w-full cursor-pointer" alt="Flyer Preview" />
              <p className="mt-4 text-center text-white/80 text-lg font-semibold">Browse Flyers</p>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
