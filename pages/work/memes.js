import Layout from "../_layout";
import memes from "./memesData"; // adjust path if needed
import { useState } from "react";

export default function Memes() {
  const [selected, setSelected] = useState(null);

  return (
    <Layout>
      <div className="min-h-screen px-6 py-12 text-white">
        <h1 className="text-5xl font-extrabold text-center mb-12">Meme Archive</h1>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {memes.map((meme, index) => (
            <div key={index} onClick={() => setSelected(meme)}>
              <img src={meme.src} alt={meme.name} className="rounded-lg cursor-pointer hover:opacity-80" />
              <p className="mt-2 font-bold text-lg">{meme.name}</p>
              <p className="text-sm text-gray-400">{meme.tags.join(", ")}</p>
              <p className="text-xs text-gray-500">{meme.dateCreated}</p>
            </div>
          ))}
        </div>

        {selected && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50" onClick={() => setSelected(null)}>
            <img src={selected.src} alt={selected.name} className="max-w-full max-h-full rounded-lg" />
          </div>
        )}
      </div>
    </Layout>
  );
}
