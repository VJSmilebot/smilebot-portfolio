import Layout from "../../components/Layout";

const flyers = [
  ["103248712_2572990833018500_5434572280864439890_o.jpg", "Event flyer"],
  ["18836002_668815246645869_599223386155203829_n.jpg", "Event flyer"],
  ["726965A5-F0CF-4386-9920-4EF1B9443C1F.jpeg", "Event flyer"],
  ["90907080_10157970321655535_9148062276400447488_o.jpg", "Event flyer"],
  ["basslab.png", "Basslab event flyer"],
  ["basssched.jpg", "Basslab schedule flyer"],
  ["FA posts tide-10.jpg", "Event flyer"],
  ["imagineNEW.jpg", "Imagine event flyer"],
  ["smilevonstroke.jpg", "Smilevonstroke event flyer"],
  ["sofasessionlineup.jpg", "Sofa Session lineup flyer"],
];

export default function Flyers() {
  return (
    <Layout>
      <div className="min-h-screen px-4 sm:px-6 py-10 sm:py-12 text-white max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-10">Show Flyers</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {flyers.map(([file, alt]) => (
            <img key={file} src={`/media/flyers/${file}`} className="rounded-lg w-full h-auto object-contain bg-black/40" alt={alt} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
