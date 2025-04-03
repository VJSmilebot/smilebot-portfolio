import Layout from "./_layout";

export default function Connect() {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-12">
        <div className="max-w-xl w-full">
          <h1 className="text-4xl font-bold mb-4">Let’s Connect</h1>
          <p className="mb-6 text-lg">
            Collabs, bookings, love letters, or just vibing — reach out.
          </p>

          {/* 📬 Contact Form (non-functional for now) */}
          <form className="flex flex-col space-y-4 mb-10">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-gray-800 text-white p-3 rounded-lg outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-gray-800 text-white p-3 rounded-lg outline-none"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="bg-gray-800 text-white p-3 rounded-lg outline-none"
            />
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 transition p-3 rounded-lg font-semibold"
            >
              Send Message
            </button>
          </form>

          {/* 🔗 Social Links + Contact */}
          <div className="space-y-2">
            <a
              href="https://instagram.com/smilebotnft"
              className="block hover:text-purple-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              IG: @smilebotnft
            </a>
            <a
              href="mailto:smilebot3000@gmail.com"
              className="block hover:text-purple-400"
            >
              Email: smilebot3000@gmail.com
            </a>
            <a
              href="https://calendly.com/smilebotnft"
              className="block hover:text-purple-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              📅 Book a Call / Show
            </a>
            <a
              href="tel:+9432608643"
              className="block hover:text-purple-400"
            >
              ☎️ Call or Text: (943) 260-8643
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
