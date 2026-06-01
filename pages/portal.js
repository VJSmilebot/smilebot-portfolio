import Layout from "../components/Layout";
import { Audiowide } from "next/font/google";
import { Syne } from "next/font/google";
import { siteContent } from "../data/siteContent";

const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
});

const syne = Syne({
  weight: "400",
  subsets: ["latin"],
});

export default function Portal() {
  return (
    <Layout>
      <div className="min-h-[calc(100vh-69px)] flex flex-col justify-center items-center text-center px-4 sm:px-6 py-12 text-white">
        <h1 className={`text-4xl md:text-6xl font-extrabold mb-6 ${audiowide.className}`}>
          Welcome
        </h1>

        <p className={`text-lg md:text-xl max-w-2xl mb-8 text-white/80 ${syne.className}`}>
          This is your access point to all things{" "}
          <span className="text-purple-400 font-bold">smilebot</span>.
          <br className="hidden md:block" />
          Explore my creative work, professional resumes, and links to my networks.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/work"
            className="px-6 py-3 bg-purple-600 rounded-2xl text-lg font-medium hover:bg-purple-700 transition shadow-lg hover:shadow-xl"
          >
            My Work
          </a>

          <a
            href="/resume"
            className="px-6 py-3 bg-purple-600 rounded-2xl text-lg font-medium hover:bg-purple-700 transition shadow-lg hover:shadow-xl"
          >
            My Resumes
          </a>

          <a
            href={siteContent.linktreeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-purple-600 rounded-2xl text-lg font-medium hover:bg-purple-700 transition shadow-lg hover:shadow-xl"
          >
            My Links
          </a>
        </div>
      </div>
    </Layout>
  );
}
