import Layout from "./_layout";

export default function About() {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-6">About Smiley</h1>
          <p className="text-lg mb-6">
            I'm Smiley — a live visual artist, meme alchemist, festival conjurer, and tech adventurer.
            Born in the NC and TN mountains, shaped in the creative chaos of Atlanta’s music scenes.
            I mix vibrant 2D/3D visuals in real time, crafting immersive, trippy experiences that amplify sound and unlock emotion.
          </p>
          <p className="text-lg mb-6">
            My art lives at the intersection of tech, psychedelia, satire, and soul.
            Whether I’m dropping viral meme waves, building blockchain-backed dreamworlds, or lighting up a rave with live visuals,
            my mission is to make people <em>feel</em>, <em>think</em>, and <em>smile</em>.
          </p>
          <p className="text-lg">
            I’m also an adult content creator and digital rebel — and I believe in full-spectrum expression. Stick around.
          </p>
        </div>
      </div>
    </Layout>
  );
}
