import Link from "next/link";
import Layout from "./_layout";

export default function Work() {
  return (
    <Layout>
      <div className="min-h-screen px-6 py-12 text-white">
        <h1 className="text-5xl font-extrabold text-center mb-12">Creations</h1>

        {/* 🎛️ VJ Clips */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">VJ Clips</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/5 p-4 rounded-xl transition hover:scale-105 hover:bg-white/10">
              <Link href="/work/vj">
                <img src="/media/vj-clip-preview.jpg" className="rounded-md w-full cursor-pointer" alt="VJ Preview" />
                <p className="mt-2 text-center text-white/80 text-sm">Enter VJ Clips</p>
              </Link>
            </div>
          </div>
        </section>

        {/* 😂 Memes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Meme Archive</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="bg-white/5 p-4 rounded-xl transition hover:scale-105 hover:bg-white/10">
              <Link href="/work/memes">
                <img src="/media/meme-preview.jpg" className="rounded-md w-full cursor-pointer" alt="Meme Preview" />
                <p className="mt-2 text-center text-white/80 text-sm">View Memes</p>
              </Link>
            </div>
          </div>
        </section>

        {/* 🧊 3D Models */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">3D Models</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="bg-white/5 p-4 rounded-xl transition hover:scale-105 hover:bg-white/10">
              <Link href="/work/models">
                <img src="/media/3dmodel-preview.jpg" className="rounded-md w-full cursor-pointer" alt="3D Model Preview" />
                <p className="mt-2 text-center text-white/80 text-sm">Explore 3D Models</p>
              </Link>
            </div>
          </div>
        </section>

        {/* 🎨 Graphic Design */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Graphic Design</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="bg-white/5 p-4 rounded-xl transition hover:scale-105 hover:bg-white/10">
              <Link href="/work/design">
                <img src="/media/design-preview.jpg" className="rounded-md w-full cursor-pointer" alt="Design Preview" />
                <p className="mt-2 text-center text-white/80 text-sm">See Graphic Work</p>
              </Link>
            </div>
          </div>
        </section>

        {/* 🖼️ NFT Collections */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">NFT Collections</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="bg-white/5 p-4 rounded-xl transition hover:scale-105 hover:bg-white/10">
              <Link href="/work/nfts">
                <img src="/media/nft-preview.jpg" className="rounded-md w-full cursor-pointer" alt="NFT Preview" />
                <p className="mt-2 text-center text-white/80 text-sm">View NFT Collections</p>
              </Link>
            </div>
          </div>
        </section>

        {/* 📟 Show Flyers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Show Flyers</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="bg-white/5 p-4 rounded-xl transition hover:scale-105 hover:bg-white/10">
              <Link href="/work/flyers">
                <img src="/media/flyer-preview.jpg" className="rounded-md w-full cursor-pointer" alt="Flyer Preview" />
                <p className="mt-2 text-center text-white/80 text-sm">Browse Flyers</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
