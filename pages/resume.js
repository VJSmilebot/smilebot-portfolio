import Layout from "./_layout";

export default function Resume() {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-12">
        <h1 className="text-4xl font-bold mb-6">My Resume</h1>

        {/* 📄 Resume Preview */}
        <div className="w-full max-w-4xl mb-6">
          <iframe
            src="/media/smiley-resume.pdf"
            className="w-full h-[700px] border border-purple-600 rounded-xl"
          ></iframe>
        </div>

        {/* 💾 Download Link */}
        <a
          href="/media/smiley-resume.pdf"
          download
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-2xl transition"
        >
          Download Resume PDF
        </a>
        {/* 🧠 Skills & Tools */}
        <div className="mt-12 text-left w-full max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4">Skills & Tools</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm text-white/80">
            <div className="bg-gray-800 p-4 rounded-xl text-center">After Effects</div>
            <div className="bg-gray-800 p-4 rounded-xl text-center">Blender</div>
            <div className="bg-gray-800 p-4 rounded-xl text-center">TouchDesigner</div>
            <div className="bg-gray-800 p-4 rounded-xl text-center">Resolume</div>
            <div className="bg-gray-800 p-4 rounded-xl text-center">Photoshop</div>
            <div className="bg-gray-800 p-4 rounded-xl text-center">Illustrator</div>
            <div className="bg-gray-800 p-4 rounded-xl text-center">Figma</div>
            <div className="bg-gray-800 p-4 rounded-xl text-center">HTML / CSS / JS</div>
            <div className="bg-gray-800 p-4 rounded-xl text-center">React / Next.js</div>
            <div className="bg-gray-800 p-4 rounded-xl text-center">Tailwind CSS</div>
            <div className="bg-gray-800 p-4 rounded-xl text-center">Web3 / Solidity</div>
            <div className="bg-gray-800 p-4 rounded-xl text-center">NFT Dev & Smart Contracts</div>
          </div>
        </div>

      </div>
    </Layout>
  );
}
