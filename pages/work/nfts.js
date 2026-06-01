import Layout from "../../components/Layout";

export default function NFTs() {
  return (
    <Layout>
      <div className="min-h-screen px-4 sm:px-6 py-10 sm:py-12 text-white max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-10">NFT Collections</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <img src="/media/nft/liteflyer2.png" className="rounded-lg w-full h-72 object-cover" alt="NFT collection flyer" />
          <img src="/media/nft/ruggdrat2.png" className="rounded-lg w-full h-72 object-cover" alt="Rugged Rat NFT artwork" />
          <img src="/media/nft/unnamed.gif" className="rounded-lg w-full h-72 object-cover" alt="Animated NFT artwork" />
          <video src="/media/nft/N3RD.mp4" controls playsInline className="rounded-lg w-full h-72 object-cover bg-black sm:col-span-2 lg:col-span-3" />
        </div>
      </div>
    </Layout>
  );
}
