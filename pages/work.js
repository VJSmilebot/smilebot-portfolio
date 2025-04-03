import Layout from "./_layout";

export default function Work() {
  const projects = [
    {
      title: "3D Space Temple",
      image: "/media/space-temple.jpg",
      link: "#",
    },
    {
      title: "VJ Reel 2024",
      image: "/media/vj-reel.jpg",
      link: "#",
    },
    {
      title: "NFT Drop — Neon Waves",
      image: "/media/neon-waves.jpg",
      link: "#",
    },
    {
      title: "Trippy Meme Collection",
      image: "/media/trippy-meme.jpg",
      link: "#",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen p-6">
        <h1 className="text-4xl font-bold mb-10 text-center">Creations</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="group relative block rounded-2xl overflow-hidden border border-purple-600 hover:scale-105 transition-transform"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover opacity-90 group-hover:opacity-100 transition"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-center">
                <h2 className="text-lg font-semibold">{project.title}</h2>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
}
