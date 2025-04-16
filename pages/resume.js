import Layout from "./_layout";

export default function Resume() {
  return (
    <Layout>
      <div className="min-h-screen px-6 py-12 text-white">
        <h1 className="text-5xl font-extrabold text-center mb-8">My Resume</h1>

        <div className="w-full max-w-4xl mx-auto h-[80vh] sm:h-[90vh]">
          <iframe
            src="/media/smilebot-resume.pdf"
            className="w-full h-full rounded-xl border border-purple-500"
            title="Smiley Resume"
          />
        </div>

        <div className="text-center mt-6">
          <a
            href="/media/smilebot-resume.pdf"
            download
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition shadow-md"
          >
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </Layout>
  );
}
