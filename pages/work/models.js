import Layout from "../_layout";

export default function Models() {
  return (
    <Layout>
      <div className="min-h-screen px-6 py-12 text-white">
        <h1 className="text-5xl font-extrabold text-center mb-12">3D Models</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <img src="/media/3dmodel1.png" className="rounded-lg" alt="3D Model 1" />
          <img src="/media/3dmodel2.png" className="rounded-lg" alt="3D Model 2" />
        </div>
      </div>
    </Layout>
  );
}
