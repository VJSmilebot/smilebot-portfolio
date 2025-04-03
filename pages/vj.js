import Layout from "./_layout";

export default function VJ() {
  return (
    <Layout>
      <div className="min-h-screen px-6 py-12 text-white">
        {/* 🎛️ Hero Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4">Live Visuals / VJ</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Immersive real-time visuals crafted for sound, space, and energy.
            Available for festivals, raves, club shows, and installations.
          </p>
        </div>

        {/* 🎬 Video Reel */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/ccSBOYoGGh8"
              title="VJ Reel Placeholder"
              className="w-full h-full rounded-xl"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
          <p className="mt-4 text-center text-sm text-white/60">
            *Temporary placeholder reel until Smiley's 2025 Visual Mix drops 🔥
          </p>
        </div>

        {/* 🖼️ Gallery Previews */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <img src="/media/vj1.jpg" className="rounded-xl object-cover w-full h-64" alt="VJ Visual 1" />
          <img src="/media/vj2.jpg" className="rounded-xl object-cover w-full h-64" alt="VJ Visual 2" />
          <img src="/media/vj3.jpg" className="rounded-xl object-cover w-full h-64" alt="VJ Visual 3" />
        </div>

        {/* 📩 Booking CTA */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold mb-2">Now booking for 2025</h2>
          <p className="text-white/70 mb-4">Festivals, raves, visual installations & tour visuals</p>
          <a
            href="/connect"
            className="inline-block bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-xl text-lg"
          >
            Book Smiley
          </a>
        </div>
      </div>
    </Layout>
  );
}
