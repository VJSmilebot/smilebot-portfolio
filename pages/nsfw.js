import { useState } from "react";

export default function NSFW() {
  const [confirmed, setConfirmed] = useState(false);

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
    <div className="bg-black text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-6">NSFW Zone 🔥</h1>
      <p className="text-center text-lg mb-10">Explore the unfiltered side of Smiley’s creations.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <img src="/media/nsfw-1.jpg" alt="NSFW 1" className="rounded-xl object-cover w-full h-72" />
        <img src="/media/nsfw-2.jpg" alt="NSFW 2" className="rounded-xl object-cover w-full h-72" />
        <img src="/media/nsfw-3.jpg" alt="NSFW 3" className="rounded-xl object-cover w-full h-72" />
      </div>
    </div>
  );
}
