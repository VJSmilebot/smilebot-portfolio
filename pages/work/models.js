import Layout from "../../_layout";

export default function Models() {
  return (
    <Layout>
      <div className="min-h-screen px-6 py-12 text-white max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-8">3D Models</h1>

        <div className="mb-12">
          <div className="aspect-w-16 aspect-h-9 w-full rounded-xl overflow-hidden shadow-xl border border-purple-500">
            <iframe
              title="Rapstars In Space Gallery"
              frameBorder="0"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              allowFullScreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              src="https://sketchfab.com/models/87f91d5fcb2847039b33a35fc90f4dc9/embed"
              className="w-full h-full"
            ></iframe>
          </div>

          <p className="mt-4 text-center text-sm text-white/60">
            <a
              href="https://sketchfab.com/3d-models/rapstars-in-space-gallery-87f91d5fcb2847039b33a35fc90f4dc9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 underline"
            >
              Rapstars In Space Gallery
            </a>{" "}
            by
            <a
              href="https://sketchfab.com/smilebot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 underline mx-1"
            >
              smilebot
            </a>
            on
            <a
              href="https://sketchfab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 underline ml-1"
            >
              Sketchfab
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
