import Layout from "./_layout";

export default function Home() {
  return (
    <Layout>
      <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-10 z-0"
          src="/media/hero.mp4"
        />
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6">smile.bot</h1>
          <p className="text-xl md:text-2xl max-w-xl mx-auto mb-8">
            Immersive digital creations across realms of visual, tech, and emotional art.
          </p>
          <a href="/portal" className="button">Enter the Portal</a>
          <a href="/about" className="mt-4 block text-sm underline hover:text-purple-400">
            Who&apos;s Smiley?
          </a>
          <a
            href="/connect"
            className="mt-2 block text-sm underline hover:text-purple-400"
          >
            Let&apos;s Connect
          </a>
        </div>
      </div>
    </Layout>
  );
}