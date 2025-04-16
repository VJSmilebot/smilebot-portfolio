import Layout from "../_layout";

export default function Memes() {
  return (
    <Layout>
      <div className="min-h-screen px-6 py-12 text-white">
        <h1 className="text-5xl font-extrabold text-center mb-12">Meme Archive</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <img src="/media/meme1.jpg" className="rounded-lg" alt="Meme 1" />
          <img src="/media/meme2.jpg" className="rounded-lg" alt="Meme 2" />
        </div>
      </div>
    </Layout>
  );
}
