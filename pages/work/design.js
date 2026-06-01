import Layout from "../../components/Layout";

const designs = [
  ["2chainz.jpg", "2 Chainz artwork"],
  ["andre.png", "Andre artwork"],
  ["ceelo.png", "CeeLo artwork"],
  ["flipperdolph.png", "Flipper Dolph artwork"],
  ["future.png", "Future artwork"],
  ["katopunkedit.png", "Kato Punk artwork"],
  ["kodakblackclouds.png", "Kodak Black Clouds artwork"],
  ["koka.png", "Koka artwork"],
  ["lilbaby.PNG", "Lil Baby artwork"],
  ["rapstarscover.jpg", "Rapstars cover artwork"],
  ["thuggerinspace.png", "Thugger in Space artwork"],
];

export default function Design() {
  return (
    <Layout>
      <div className="min-h-screen px-4 sm:px-6 py-10 sm:py-12 text-white max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-10">Graphic Design</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {designs.map(([file, alt]) => (
            <img key={file} src={`/media/graphicdesign/${file}`} className="rounded-lg w-full h-72 object-cover" alt={alt} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
