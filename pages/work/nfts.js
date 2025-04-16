import Layout from "../_layout";

export default function NFTs() {
  return (
    <Layout>
      <div className="min-h-screen px-6 py-12 text-white">
        <h1 className="text-5xl font-extrabold text-center mb-12">NFT Collections</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <img src="/media/nft1.jpg" className="rounded-lg" alt="NFT 1" />
          <img src="/media/nft2.jpg" className="rounded-lg" alt="NFT 2" />
        </div>
      </div>
    </Layout>
  );
}
