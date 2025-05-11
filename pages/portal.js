import Layout from "./_layout";

export default function Portal() {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-12 text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Welcome</h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          This is your access point to all things <span className="text-purple-400 font-bold">smilebot</span>.
          Explore my creative work, professional resumes, and links to my networks.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/work"
            className="px-6 py-3 bg-purple-600 rounded-2xl text-lg font-medium hover:bg-purple-700 transition"
          >
            My Work
          </a>
          <a
            href="/resume"
            className="px-6 py-3 bg-purple-600 rounded-2xl text-lg font-medium hover:bg-purple-700 transition"
          >
            My Resumes
          </a>
          <a
            href="https://linktr.ee/smilebot"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-purple-600 rounded-2xl text-lg font-medium hover:bg-purple-700 transition"
          >
            My Links
          </a>
        </div>
      </div>
    </Layout>
  );
}
