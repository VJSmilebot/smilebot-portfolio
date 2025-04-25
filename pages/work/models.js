import Layout from "../_layout";

export default function Models() {
  return (
    <Layout>
      <div className="min-h-screen px-6 py-12 text-white max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-8">3D Models & Virtual Spaces</h1>

        {/* ========== SKETCHFAB MODELS ========== */}

        {/* Model 1 */}
        <div className="mb-12">
          <div className="aspect-w-16 aspect-h-9 w-full rounded-xl overflow-hidden shadow-xl border border-purple-500">
            <iframe
              title="Rapstars In Space Gallery"
              frameBorder="0"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              allowFullScreen
              src="https://sketchfab.com/models/87f91d5fcb2847039b33a35fc90f4dc9/embed"
              className="w-full h-full"
            ></iframe>
          </div>
          <p className="mt-4 text-center text-sm text-white/60">
            <a href="https://sketchfab.com/3d-models/rapstars-in-space-gallery-87f91d5fcb2847039b33a35fc90f4dc9" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline">
              Rapstars In Space Gallery
            </a>{" "}
            by <a href="https://sketchfab.com/smilebot" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline">smilebot</a>
          </p>
        </div>

        {/* Model 2 */}
        <div className="mb-12">
          <div className="aspect-w-16 aspect-h-9 w-full rounded-xl overflow-hidden shadow-xl border border-purple-500">
            <iframe
              title="ConnectXCard v3"
              frameBorder="0"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              allowFullScreen
              src="https://sketchfab.com/models/74aa78c1aa27495ab9ef46e6742038b7/embed"
              className="w-full h-full"
            ></iframe>
          </div>
          <p className="mt-4 text-center text-sm text-white/60">
            <a href="https://sketchfab.com/3d-models/connectxcard-v3-74aa78c1aa27495ab9ef46e6742038b7" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline">
              ConnectXCard v3
            </a>{" "}
            by <a href="https://sketchfab.com/smilebot" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline">smilebot</a>
          </p>
        </div>

        {/* Model 3 */}
        <div className="mb-12">
          <div className="aspect-w-16 aspect-h-9 w-full rounded-xl overflow-hidden shadow-xl border border-purple-500">
            <iframe
              title="Mayday Axel 3D"
              frameBorder="0"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              allowFullScreen
              src="https://sketchfab.com/models/f2985a3eeb504b9da586214d11730a70/embed"
              className="w-full h-full"
            ></iframe>
          </div>
          <p className="mt-4 text-center text-sm text-white/60">
            <a href="https://sketchfab.com/3d-models/mayday-axel-3d-f2985a3eeb504b9da586214d11730a70" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline">
              Mayday Axel 3D
            </a>{" "}
            by <a href="https://sketchfab.com/smilebot" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline">smilebot</a>
          </p>
        </div>

        {/* ========== SPATIAL SPACES ========== */}

        {/* CYPH3R */}
        <div className="mb-12">
          <a href="https://www.spatial.io/s/CYPH3R-62f40ae5abce1e0001565277?share=3926563092442516490" target="_blank" rel="noopener noreferrer">
            <img src="/media/cypher-thumb.png" alt="CYPH3R" className="w-full rounded-xl border border-purple-500 shadow-lg object-cover aspect-video" />
          </a>
          <p className="mt-4 text-center text-sm text-white/60">
            <a href="https://www.spatial.io/s/CYPH3R-62f40ae5abce1e0001565277?share=3926563092442516490" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline">
              CYPH3R – Battle Rap Arena
            </a>
          </p>
        </div>

        {/* Vizz U All */}
        <div className="mb-12">
          <a href="https://www.spatial.io/s/Vizz-U-aLL-62f37c477e22f400016f85a6?share=1321395555237747868" target="_blank" rel="noopener noreferrer">
            <img src="/media/vizz-thumb.png" alt="Vizz U All" className="w-full rounded-xl border border-purple-500 shadow-lg object-cover aspect-video" />
          </a>
          <p className="mt-4 text-center text-sm text-white/60">
            <a href="https://www.spatial.io/s/Vizz-U-aLL-62f37c477e22f400016f85a6?share=1321395555237747868" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline">
              Vizz U All – Cyber Event Space
            </a>
          </p>
        </div>

        {/* 3ROTIX */}
        <div className="mb-12">
          <a href="https://www.spatial.io/s/3ROTIX-63b6b1a61e4f630001d2346f?share=7935433300631030050" target="_blank" rel="noopener noreferrer">
            <img src="/media/3rotix-thumb.png" alt="3ROTIX" className="w-full rounded-xl border border-purple-500 shadow-lg object-cover aspect-video" />
          </a>
          <p className="mt-4 text-center text-sm text-white/60">
            <a href="https://www.spatial.io/s/3ROTIX-63b6b1a61e4f630001d2346f?share=7935433300631030050" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline">
              3ROTIX – Adult NFT Gallery
            </a>
          </p>
        </div>

        {/* BLINU BLAMBO */}
        <div className="mb-12">
          <a href="https://www.spatial.io/s/BLINU-BLAMBO-Showroom-by-Smilebot-61fd3e630b8a710001258d90?share=6138656749677971283" target="_blank" rel="noopener noreferrer">
            <img src="/media/blambo-thumb.png" alt="BLINU BLAMBO" className="w-full rounded-xl border border-purple-500 shadow-lg object-cover aspect-video" />
          </a>
          <p className="mt-4 text-center text-sm text-white/60">
            <a href="https://www.spatial.io/s/BLINU-BLAMBO-Showroom-by-Smilebot-61fd3e630b8a710001258d90?share=6138656749677971283" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline">
              BLINU BLAMBO – Meme Coin Showroom
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
