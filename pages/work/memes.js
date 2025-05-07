import { useState } from "react";
import Layout from "../_layout";

export default function Memes() {
  const [selectedMeme, setSelectedMeme] = useState(null);

  const memes = [
    {
      src: "/media/memes/1/ArabTWITfinal.png",
      title: "Arab Twitter Final",
      tags: "politics, twitter, parody",
      dateCreated: "2022-05-12",
    },
    {
      src: "/media/memes/1/aron rogerrsmeta.png",
      title: "Aaron Rogerrs Meta",
      tags: "sports, ai, celebrities",
      dateCreated: "2023-03-08",
    },
    {
      src: "/media/memes/1/BeavisFire.png",
      title: "Beavis Fire",
      tags: "pop culture, retro, surreal",
      dateCreated: "2021-11-22",
    },
    {
      src: "/media/memes/1/bushgod.png",
      title: "Bush God",
      tags: "history, president, absurdist",
      dateCreated: "2023-06-18",
    },
    {
      src: "/media/memes/1/croccoli.png",
      title: "Croccoli",
      tags: "stoner, food, weirdcore",
      dateCreated: "2022-10-30",
    },
    {
      src: "/media/memes/1/daddyshomeonmars.png",
      title: "Daddy's Home on Mars",
      tags: "sci-fi, parental, dystopia",
      dateCreated: "2023-01-15",
    },
    {
      src: "/media/memes/1/dogdadiseternalgod.png",
      title: "Dog Dad Eternal God",
      tags: "animals, religion, absurdist",
      dateCreated: "2022-04-04",
    },
    {
      src: "/media/memes/1/elonattax.png",
      title: "Elon Attax",
      tags: "elon, satire, power",
      dateCreated: "2023-05-03",
    },
    {
      src: "/media/memes/1/_103330503_musk3ggggg.png",
      title: "Musk on TV",
      tags: "elon, media, glitch",
      dateCreated: "2021-09-19",
    },
    {
      title: "HODL HARD",
      src: "/media/memes/2/HODLHARD.png",
      tags: "crypto, holding, memes",
      dateCreated: "2021-12-10",
    },
    {
      title: "GoD Elon",
      src: "/media/memes/2/godelon.png",
      tags: "elon musk, religion, parody",
      dateCreated: "2022-02-19",
    },
    {
      title: "Keta Dreams",
      src: "/media/memes/2/keta.png",
      tags: "psychedelic, weirdcore, abstract",
      dateCreated: "2023-01-27",
    },
    {
      title: "Lil Nas X Bootleg",
      src: "/media/memes/2/lilnasx.png",
      tags: "pop culture, bootleg, funny",
      dateCreated: "2022-11-04",
    },
    {
      title: "MadeLon 2",
      src: "/media/memes/2/madelon2.png",
      tags: "elon, ai art, parody",
      dateCreated: "2023-03-03",
    },
    {
      title: "Musk69",
      src: "/media/memes/2/mayemusk69.png",
      tags: "ai, elon musk, humor",
      dateCreated: "2023-04-14",
    },
    {
      title: "Muskina",
      src: "/media/memes/2/muskina.png",
      tags: "meme lord, tech satire",
      dateCreated: "2022-06-18",
    },
    {
      title: "Musko Swole",
      src: "/media/memes/2/musko.png",
      tags: "elon, steroids, absurd",
      dateCreated: "2023-05-01",
    },
    {
      title: "Micro Penis Tweet",
      src: "/media/memes/2/mycropenis.pnginu.png",
      tags: "twitter, meme, viral",
      dateCreated: "2023-05-15",
    },
    {
      title: "Rug Pull Warning",
      src: "/media/memes/2/morerugs.png",
      tags: "rugpull, crypto, warning",
      dateCreated: "2023-07-10",
    },
    {
      title: "NFT Derp",
      src: "/media/memes/2/NFT.png",
      tags: "nft, critique, digital culture",
      dateCreated: "2022-02-22",
    },
    {
      title: "Poopify",
      src: "/media/memes/2/poop.png",
      tags: "spotify, parody, gross humor",
      dateCreated: "2021-12-13",
    },
    {
      title: "Rapper Actually Rat",
      src: "/media/memes/2/rappperactuallyrat - Copy (2).png",
      tags: "rap, satire, surprise",
      dateCreated: "2023-03-09",
    },
    {
      title: "Classic Rug",
      src: "/media/memes/2/rug.png",
      tags: "crypto, fail, satire",
      dateCreated: "2022-09-01",
    },
    {
      title: "Rugged Rats In Space",
      src: "/media/memes/2/ruggedratsspace - Copy.png",
      tags: "rats, nft, spacecore",
      dateCreated: "2022-10-10",
    },
    {
      title: "K",
      src: "/media/memes/3/K.png",
      tags: "kanye, deadpan, minimalist meme",
      dateCreated: "2023-01-02",
    },
    {
      title: "Memes.png",
      src: "/media/memes/3/memes.png",
      tags: "meta, collage, archive",
      dateCreated: "2023-08-08",
    },
    {
      title: "Split Censorship",
      src: "/media/memes/3/split.png",
      tags: "internet, censorship, abstract",
      dateCreated: "2022-04-19",
    },
    {
      title: "Tim Dillon Trump",
      src: "/media/memes/3/timdillontrump.PNG",
      tags: "politics, comedy, tim dillon",
      dateCreated: "2023-05-23",
    },
    {
      title: "TITS Token",
      src: "/media/memes/3/TITS.png",
      tags: "crypto, humor, NSFW",
      dateCreated: "2022-02-02",
    },
    {
      title: "Walter Cracked",
      src: "/media/memes/3/walter - Copy (3).png",
      tags: "breaking bad, dark meme, surreal",
      dateCreated: "2023-03-18",
    },
    {
      title: "You Meme",
      src: "/media/memes/3/you.png",
      tags: "you, callout, absurd humor",
      dateCreated: "2022-12-01",
    },
    {
      title: "Shruggerd",
      src: "/media/memes/2/shruggerd2.png",
      tags: "shrug, philosophy, weirdcore",
      dateCreated: "2022-05-05",
    },
    {
      title: "Smilebot OG",
      src: "/media/memes/2/smilebot.png",
      tags: "logo, og, self meme",
      dateCreated: "2021-06-06",
    },
    {
      title: "More Rugs",
      src: "/media/memes/2/morerugs.png",
      tags: "scam, crypto, rugs",
      dateCreated: "2023-02-12",
    },
    {
      title: "Scamama",
      src: "/media/memes/2/scamama.png",
      tags: "finance, cult, satire",
      dateCreated: "2023-07-09",
    },
    {
      title: "Sale.exe",
      src: "/media/memes/2/sale.png",
      tags: "ai, glitch, capitalism",
      dateCreated: "2022-11-11",
    },
  ];      
  return (
    <Layout>
      <div className="min-h-screen px-6 py-12 text-white max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-12">Meme Archive</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {memes.map((meme, index) => (
            <div
              key={index}
              className="bg-white/5 border border-purple-600 rounded-xl p-4 cursor-pointer hover:scale-105 transition transform duration-300 ease-in-out"
              onClick={() => setSelectedMeme(meme)}
            >
              <img
                src={meme.src}
                alt={meme.title}
                className="w-full h-48 object-cover rounded-lg mb-2"
              />
              <h3 className="text-lg font-bold">{meme.title}</h3>
              <p className="text-xs text-purple-300 mt-1">{meme.tags}</p>
              <p className="text-xs text-white/40">{meme.dateCreated}</p>
            </div>
          ))}
        </div>

        {selectedMeme && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setSelectedMeme(null)}
          >
            <div className="max-w-4xl max-h-[90vh] overflow-auto bg-black p-4 border border-purple-600 rounded-lg">
              <img
                src={selectedMeme.src}
                alt={selectedMeme.title}
                className="max-w-full max-h-[80vh] mx-auto"
              />
              <div className="text-center mt-4">
                <h2 className="text-2xl font-bold">{selectedMeme.title}</h2>
                <p className="text-sm text-purple-400">{selectedMeme.tags}</p>
                <p className="text-xs text-white/50">{selectedMeme.dateCreated}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

