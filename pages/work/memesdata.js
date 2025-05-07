const memes = [
    {
      name: "Taliban Twitter Takeover",
      src: "/media/memes/1/ArabTWITfinal.png",
      tags: ["Elon", "Taliban", "X", "political", "satire"],
      dateCreated: "2021-08-15"
    },
    {
      name: "Metasino Revelation",
      src: "/media/memes/1/aron rogerrsmeta.png",
      tags: ["Metaverse", "Casino", "NFL", "Aaron Rodgers"],
      dateCreated: "2022-02-04"
    },
    {
      name: "Legends of DeFi",
      src: "/media/memes/1/BeavisFire.png",
      tags: ["DeFi", "Beavis", "crypto", "cartoon"],
      dateCreated: "2021-12-11"
    },
    {
      name: "God Elon Is a White Rapper",
      src: "/media/memes/1/bushgod.png",
      tags: ["Elon", "Bush", "funny", "news"],
      dateCreated: "2021-11-09"
    },
    {
      name: "Croccoli",
      src: "/media/memes/1/croccoli.png",
      tags: ["space", "broccoli", "art", "weird"],
      dateCreated: "2021-10-28"
    },
    {
      name: "Daddy’s Home On Mars",
      src: "/media/memes/1/daddyshomeonmars.png",
      tags: ["Elon", "Bezos", "poster", "Mars", "meme edit"],
      dateCreated: "2022-01-03"
    },
    {
      name: "Dog Dad Eternal God",
      src: "/media/memes/1/dogdadiseternalgod.png",
      tags: ["Dogecoin", "Elon", "cult", "crypto"],
      dateCreated: "2021-12-25"
    },
    {
      name: "Mars Attacks Meme",
      src: "/media/memes/1/elonattax.png",
      tags: ["Elon", "Grimes", "Dogecoin", "movie poster"],
      dateCreated: "2022-03-02"
    },
    {
      name: "Laser Eyes Musk",
      src: "/media/memes/1/_103330503_musk3ggggg.png",
      tags: ["Elon", "Joe Rogan", "smoking", "WTF"],
      dateCreated: "2021-11-15"
    },
    {
      name: "Floki's Big Win",
      src: "/media/memes/1/flokiwin.PNG",
      tags: ["Floki", "Moon", "crypto", "animation still"],
      dateCreated: "2021-09-30"
    },
    {
        name: "God Elon Meme",
        src: "/media/memes/1/godelon.png",
        tags: ["Elon", "philosophy", "satire"],
        dateCreated: "2022-01-10"
      },
      {
        name: "HODL HARD",
        src: "/media/memes/1/HODLHARD.png",
        tags: ["HODL", "meme movie", "crypto"],
        dateCreated: "2022-01-28"
      },
      {
        name: "Ketamine Infinity Loop",
        src: "/media/memes/1/keta.png",
        tags: ["Ketamine", "club", "trippy"],
        dateCreated: "2022-02-12"
      },
      {
        name: "Lil Nas X Judgment Day",
        src: "/media/memes/1/lilnasx.png",
        tags: ["Lil Nas X", "hell", "satan", "pop culture"],
        dateCreated: "2021-04-01"
      },
      {
        name: "Madelon Reloaded",
        src: "/media/memes/1/madelon2.png",
        tags: ["Elon", "Musk", "edit", "cyberpunk"],
        dateCreated: "2022-03-06"
      },
      {
        name: "Maya Musk 69",
        src: "/media/memes/1/mayemusk69.png",
        tags: ["Elon's mom", "69", "twitter humor"],
        dateCreated: "2022-03-18"
      },
      {
        name: "Muskina DeepDream",
        src: "/media/memes/1/muskina.png",
        tags: ["Musk", "AI", "stable diffusion", "weird"],
        dateCreated: "2022-02-24"
      },
      {
        name: "Musko Takes the Throne",
        src: "/media/memes/1/musko.png",
        tags: ["Musk", "Power", "memeking"],
        dateCreated: "2022-04-04"
      },
      {
        name: "Mycropenis Council",
        src: "/media/memes/1/mycropenis.pnginu.png",
        tags: ["satire", "crypto bros", "weird AF"],
        dateCreated: "2022-03-14"
      },
      {
        name: "Morerugs Parody",
        src: "/media/memes/1/morerugs.png",
        tags: ["rugpull", "solana", "scam", "nft"],
        dateCreated: "2022-05-10"
      },
      {
        name: "NFT Awareness Chip",
        src: "/media/memes/2/NFT.png",
        tags: ["NFT", "brain", "future", "weird"],
        dateCreated: "2022-06-01"
      },
      {
        name: "Poop Talk",
        src: "/media/memes/2/poop.png",
        tags: ["shitcoins", "crypto", "toilet humor"],
        dateCreated: "2022-05-27"
      },
      {
        name: "Rapper Actually Rat",
        src: "/media/memes/2/rappperactuallyrat - Copy (2).png",
        tags: ["street", "satire", "hiphop", "truth"],
        dateCreated: "2022-07-01"
      },
      {
        name: "Rug",
        src: "/media/memes/2/rug.png",
        tags: ["rugpull", "crypto", "scam", "memecoins"],
        dateCreated: "2022-08-08"
      },
      {
        name: "Rugged Rats Space Showdown",
        src: "/media/memes/2/ruggedratsspace - Copy.png",
        tags: ["rats", "space", "rugpull", "poster"],
        dateCreated: "2022-08-20"
      },
      {
        name: "On Sale Forever",
        src: "/media/memes/2/sale.png",
        tags: ["capitalism", "consumerism", "visual art"],
        dateCreated: "2022-09-02"
      },
      {
        name: "Scamama Drama",
        src: "/media/memes/2/scamama.png",
        tags: ["court", "web3", "crypto lawsuits"],
        dateCreated: "2022-09-13"
      },
      {
        name: "Shruggerd V2",
        src: "/media/memes/2/shruggerd2.png",
        tags: ["shrug", "meta", "existential"],
        dateCreated: "2022-10-01"
      },
      {
        name: "Smilebot Identity",
        src: "/media/memes/2/smilebot.png",
        tags: ["self", "branding", "core", "aesthetic"],
        dateCreated: "2022-10-10"
      },
      {
        name: "Split Reality",
        src: "/media/memes/2/split.png",
        tags: ["AI", "reality", "dystopia", "two sides"],
        dateCreated: "2022-11-02"
      },
      {
        name: "Tim Dillon Trump",
        src: "/media/memes/3/timdillontrump.PNG",
        tags: ["comedy", "politics", "satire", "deepfake"],
        dateCreated: "2022-11-09"
      },
      {
        name: "TITS (Truth In Token Sales)",
        src: "/media/memes/3/TITS.png",
        tags: ["tokens", "crypto", "truth", "satire"],
        dateCreated: "2022-11-20"
      },
      {
        name: "Walter’s Deal",
        src: "/media/memes/3/walter - Copy (3).png",
        tags: ["breaking bad", "meme", "TV", "parody"],
        dateCreated: "2022-12-01"
      },
      {
        name: "YOU!",
        src: "/media/memes/3/you.png",
        tags: ["callout", "pop art", "truth"],
        dateCreated: "2023-01-01"
      },
      {
        name: "The K Drop",
        src: "/media/memes/3/K.png",
        tags: ["letter", "drop", "glitch", "typography"],
        dateCreated: "2023-01-15"
      },
      {
        name: "Meme Collage",
        src: "/media/memes/3/memes.png",
        tags: ["collage", "meta", "collection"],
        dateCreated: "2023-02-02"
      },
      {
        name: "CHARTS (Shortcut)",
        src: "/media/memes/1/CHARTS.png",
        tags: ["meta", "finance", "shortcut", "parody"],
        dateCreated: "2022-03-03"
      },
    ];
    
    export default memes;
  
  