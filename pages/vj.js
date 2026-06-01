import Layout from "../components/Layout";

export default function VJ() {
  return (
    <Layout>
      <div className="min-h-screen px-4 sm:px-6 py-10 sm:py-12 text-white max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Live Visuals / VJ</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Immersive real-time visuals crafted for sound, space, and energy. Available for festivals, raves, club shows, and installations.
          </p>
        </div>

        <img src="/media/vj-reel.JPG" className="w-full max-w-4xl mx-auto rounded-xl aspect-video object-cover border border-purple-500" alt="Smilebot live visual reel preview" />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <a href="/work/vj" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-purple-600 px-6 py-3 text-lg font-semibold transition hover:bg-purple-700">
            Explore VJ Clips
          </a>
          <a href="/connect" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-purple-500 px-6 py-3 text-lg font-semibold transition hover:bg-purple-900/60">
            Book Smiley
          </a>
        </div>
      </div>
    </Layout>
  );
}
