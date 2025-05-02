export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center text-center px-4">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover opacity-10 z-0"
        src="/media/hero.mp4"
      />
      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-pulse-slow">
          smile.bot
        </h1>

        <p className="text-xl md:text-2xl max-w-xl mx-auto">
          Immersive digital creations across realms of visual, tech, and emotional art.
        </p>

        <a
          href="/portal"
          className="inline-block mt-8 px-6 py-3 bg-purple-600 rounded-2xl text-lg hover:bg-purple-700 transition"
        >
          Enter the Portal
        </a>

        <a href="/about" className="mt-4 block text-sm underline hover:text-purple-400">
          Who's Smiley?
        </a>

        <a
          href="/connect"
          className="mt-2 block text-sm underline hover:text-purple-400"
        >
          Let’s Connect
        </a>
      </div>
    </div>
  );
}
