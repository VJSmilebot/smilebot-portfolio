import Layout from "../components/Layout";
import { siteContent } from "../data/siteContent";

export default function Resume() {
  return (
    <Layout>
      <div className="min-h-screen px-4 sm:px-6 py-10 sm:py-12 text-white max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-center mb-6 sm:mb-8">{siteContent.displayName}</h1>
        <p className="text-center text-purple-400 mb-8 leading-7">
          <a href={`mailto:${siteContent.email}`} className="underline text-purple-300 break-all">{siteContent.email}</a>
          {" | "}
          <a href={`tel:${siteContent.phoneHref}`} className="underline text-purple-300">{siteContent.phoneDisplay}</a>
          {" | "}{siteContent.location}{" | "}
          <a href={siteContent.linktreeUrl} className="underline text-purple-300" target="_blank" rel="noopener noreferrer">linktr.ee/Smilebot</a>
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Introduction</h2>
          <p>
            I am a live music lover with 1000s of shows under my belt, turned live visual artist, turned self-taught audiovisual technician with years of hands-on experience in live event production. My expertise comes from working directly in the field, setting up and operating AV systems at festivals, raves, and concerts. I have honed my skills through real-world applications rather than traditional certifications, making me highly adaptable and efficient in fast-paced environments.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Credentials &amp; Qualifications</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Years of hands-on experience in AV setup, live visuals, and event production</li>
            <li>Deep knowledge of 2D and 3D digital visuals, projection mapping, and LED wall operation</li>
            <li>Strong background in live visual mixing and VJing for music events</li>
            <li>Proficient with industry-standard AV software and hardware</li>
            <li>Experienced in troubleshooting and problem-solving under live event conditions</li>
            <li>Extensive collaboration with artists, musicians, and event organizers</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Work Experience</h2>
          <h3 className="text-lg font-semibold">Freelance AV Technician / Visual Artist / Stagehand (2018 - Present)</h3>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Designed and executed live visuals for concerts, festivals, and raves</li>
            <li>Set up and operated LED walls, projectors, and other display technologies</li>
            <li>Managed audio-visual components for multi-stage events</li>
            <li>Coordinated with event organizers and technical teams to ensure seamless execution</li>
            <li>Worked hundreds of shows in various roles, from pushing cases to doing security to running visuals</li>
          </ul>

          <h3 className="text-lg font-semibold">Smilebot Productions (2012 - Present)</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Designed logos, merchandise, websites, brands, visuals for clients across industries</li>
            <li>Video production for events, music videos, parties, businesses including smart installs, LED panels, TVs, lighting, audio, and projectors</li>
            <li>3D/VR design and implementation for virtual experiences and events</li>
            <li>Live streamcast producer/technician for large virtual events and concerts</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Notable Events &amp; Projects</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Country Music Awards - Prop Dept, I.A.T.S.E - Assisted in stage setup, prop management, and breakdown</li>
            <li>Imagine Music Festival - Video Production Lead (V1) - Managed video production, content execution, and team leadership</li>
            <li>Believe Music Hall - Visual Director &amp; Video Lead/VJ - Oversaw full video production, upgrades, and crew coordination</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Skills &amp; Technical Proficiency</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Software: Resolume, TouchDesigner, MadMapper, Adobe Suite</li>
            <li>Hardware: LED walls, projectors, media servers, lighting control systems</li>
            <li>Live Production: VJing, video mixing, projection mapping, stage setup, stagehand</li>
            <li>Troubleshooting: Equipment maintenance, system optimization</li>
            <li>Collaboration: DJs, musicians, festival teams, stage crews</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-2">References (contact info upon request)</h2>
          <ul className="list-inside space-y-1">
            <li>Joey Appleseed (Iris Presents / Imagine Music Festival)</li>
            <li>Aireon &quot;Ployd&quot; Grimes (Slow&amp;Low Presents)</li>
            <li>Kevin Rodriguez (Aisle5, Georgia Event Specialists)</li>
          </ul>
        </section>

        <div className="text-center">
          <a
            href="/media/smilebot-resume.pdf"
            download
            className="inline-flex min-h-12 items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition shadow-md"
          >
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </Layout>
  );
}
