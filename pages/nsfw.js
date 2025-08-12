import { useState } from "react";

export default function NSFW() {
  const [confirmed, setConfirmed] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState("");

  if (!confirmed) {
    return (
      <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">NSFW Content</h1>
        <p className="mb-6 text-lg max-w-lg">
          This section contains explicit, adult, and artistic content intended for mature audiences only.
          Are you over 18?
        </p>
        <button
          onClick={() => setConfirmed(true)}
          className="px-6 py-3 bg-pink-600 hover:bg-pink-700 transition rounded-xl text-lg"
        >
          Yes, I’m Over 18
        </button>
      </div>
    );
  }

  // NSFW Content
  return (
    <div className="bg-black text-white min-h-screen p-8 relative overflow-hidden">
      {/* 3ROTIX Logo Background */}
      <img
        src="/media/3rotix-logo.png"
        alt=""
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[700px] w-full h-auto opacity-10 pointer-events-none select-none z-0"
        style={{ filter: "brightness(0.7)" }}
        aria-hidden="true"
      />

      <h1 className="text-4xl font-bold text-center mb-6">NSFW Zone </h1>
      <p className="text-center text-lg mb-10">Explore the unfiltered side of Smiley’s creations.</p>
      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <img
          src="/media/nsfw-1.jpg"
          alt="NSFW 1"
          className="rounded-xl object-cover w-full h-72 cursor-pointer"
          onClick={() => { setModalImg("/media/nsfw-1.jpg"); setModalOpen(true); }}
        />
        <video
          src="/media/MyMoneyHoney.mp4"
          controls
          playsInline
          className="rounded-xl object-cover w-full h-72 bg-black"
          alt="NSFW 2"
        />
        <img
          src="/media/nsfw-3.png"
          alt="NSFW 3"
          className="rounded-xl object-cover w-full h-72 cursor-pointer"
          onClick={() => { setModalImg("/media/nsfw-3.png"); setModalOpen(true); }}
        />
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setModalOpen(false)}
        >
          <img
            src={modalImg}
            alt="Full"
            className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl border-4 border-pink-600"
            onClick={e => e.stopPropagation()}
          />
          <button
            className="absolute top-6 right-8 text-4xl text-white font-bold z-50"
            onClick={() => setModalOpen(false)}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
      )}

      <section className="mt-16 text-white bg-black/80 p-8 rounded-lg shadow-lg max-w-3xl mx-auto border border-pink-600 text-center">
        <h2 className="text-3xl font-bold mb-4 text-pink-500"> Introducing 3ROTIX</h2>
        <p className="text-lg mb-4">
          As a creator who's always pushed boundaries through visual storytelling and intimate expression,
          I wanted more than just another platform — I wanted a movement. That's why I created <span className="font-semibold text-pink-400">3ROTIX</span>:
          a bold new space for adult creators to take back control, build real brands, and own their impact.
        </p>
        <p className="mb-6 text-base text-gray-300">
          3ROTIX is THE creator-first platform disrupting exploitation in adult content. Built by creators, for creators — 
          it's about empowerment, transparency, and freedom to thrive without compromise.
        </p>
        <a
          href="https://3rotix.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-pink-600 hover:bg-pink-500 text-white font-semibold rounded-full text-lg md:text-xl transition duration-300 mb-4"
        >
           Visit 3ROTIX
        </a>
        <div className="flex justify-center">
          <img
            src="/media/lip-logo.png"
            alt="3ROTIX Lip Logo"
            className="w-100 h-100 object-contain"
          />
        </div>
      </section>    
      </div>
  );
}
