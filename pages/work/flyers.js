import Layout from "../_layout";

export default function Flyers() {
  return (
    <Layout>
      <div className="min-h-screen px-6 py-12 text-white">
        <h1 className="text-5xl font-extrabold text-center mb-12">Show Flyers</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <img src="/media/flyer1.jpg" className="rounded-lg" alt="Flyer 1" />
          <img src="/media/flyer2.jpg" className="rounded-lg" alt="Flyer 2" />
        </div>
      </div>
    </Layout>
  );
}
