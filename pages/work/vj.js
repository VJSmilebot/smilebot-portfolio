import Layout from "../_layout";

export default function VJ() {
  return (
    <Layout>
      <div className="min-h-screen px-6 py-12 text-white">
        <h1 className="text-5xl font-extrabold text-center mb-4">Live Visual Sets</h1>
        <p className="text-center text-white/60 max-w-2xl mx-auto mb-12">
          A collection of improvised, real-time VJ sessions streamed and performed live using custom visuals, synced audio-reactive layers, and analog glitchcraft.
        </p>

        {/* Clip 1 */}
        <div className="mb-12">
          <div className="aspect-w-16 aspect-h-9 w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg border border-purple-500">
            <iframe
              src="https://www.youtube.com/embed/rgkzg5zyya4"
              title="Smilebot Visuals - VJ Clip 1"
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
          <p className="mt-4 text-center text-white/70 text-sm">
            🔊 Smilebot Visuals – glitchwave tunnel session
          </p>
        </div>

        {/* Clip 2 */}
        <div className="mb-12">
          <div className="aspect-w-16 aspect-h-9 w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg border border-purple-500">
            <iframe
              src="https://www.youtube.com/embed/KUyLLTmJwq0"
              title="Smilebot Visuals - VJ Clip 2"
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
          <p className="mt-4 text-center text-white/70 text-sm">
            🎶 Live Visuals Set — high-energy psychedelic warp at 13:28
          </p>
        </div>

        {/* Clip 3 */}
        <div className="mb-12">
          <div className="aspect-w-16 aspect-h-9 w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg border border-purple-500">
            <iframe
              src="https://www.youtube.com/embed/ceGE7bbWyiQ"
              title="Smilebot Visuals - VJ Clip 3"
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
          <p className="mt-4 text-center text-white/70 text-sm">
            🌀 VJ Visual Performance — bass drop synchronization + kaleidoscopic overlays
          </p>
        </div>

        {/* Clip 4 */}
        <div className="mb-12">
          <div className="aspect-w-16 aspect-h-9 w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg border border-purple-500">
            <iframe
              src="https://www.youtube.com/embed/nuV56NYOHQQ"
              title="Smilebot Visuals - VJ Clip 4"
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
          <p className="mt-4 text-center text-white/70 text-sm">
            🌌 Extended ambient visuals — tap in at 27:09 for full immersion
          </p>
        </div>
      </div>
    </Layout>
  );
}
