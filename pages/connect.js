import Layout from "../components/Layout";
import { siteContent } from "../data/siteContent";

export default function Connect() {
  const subject = encodeURIComponent("Smilebot booking inquiry");

  return (
    <Layout>
      <div className="min-h-[calc(100vh-69px)] flex items-center justify-center text-center px-4 sm:px-6 py-12">
        <div className="max-w-xl w-full">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Let&apos;s Connect</h1>
          <p className="mb-8 text-lg text-white/80">
            Collabs, bookings, love letters, or just vibing - reach out.
          </p>

          <a
            href={`mailto:${siteContent.email}?subject=${subject}`}
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-purple-600 px-6 py-3 text-lg font-semibold transition hover:bg-purple-700"
          >
            Email Smiley
          </a>

          <div className="mt-10 grid gap-3 text-left">
            <a href={siteContent.instagramUrl} className="flex min-h-11 items-center rounded-lg bg-white/5 px-4 hover:bg-white/10" target="_blank" rel="noopener noreferrer">
              Instagram: {siteContent.instagramHandle}
            </a>
            <a href={`mailto:${siteContent.email}`} className="flex min-h-11 items-center rounded-lg bg-white/5 px-4 hover:bg-white/10 break-all">
              Email: {siteContent.email}
            </a>
            <a href={siteContent.calendlyUrl} className="flex min-h-11 items-center rounded-lg bg-white/5 px-4 hover:bg-white/10" target="_blank" rel="noopener noreferrer">
              Book a Call / Show
            </a>
            <a href={`tel:${siteContent.phoneHref}`} className="flex min-h-11 items-center rounded-lg bg-white/5 px-4 hover:bg-white/10">
              Call or Text: {siteContent.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
