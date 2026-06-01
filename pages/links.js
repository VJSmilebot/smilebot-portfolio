import Layout from "../components/Layout";
import {
  FaTelegramPlane,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaYoutube
} from "react-icons/fa";

import { SiLinktree } from "react-icons/si";
import { siteContent } from "../data/siteContent";

export default function Links() {
  return (
    <Layout>
      <div className="min-h-screen px-6 py-16 text-white flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Find Me Online</h1>
        <p className="text-lg text-white/80 mb-10 max-w-xl">
          Tap an icon to connect across platforms — built for real ones.
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
          <a
            href={siteContent.socials.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 w-16 h-16 flex items-center justify-center rounded-full text-2xl shadow-xl hover:scale-110 transition-all"
          >
            <FaTelegramPlane />
          </a>
          <a
            href={siteContent.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 w-16 h-16 flex items-center justify-center rounded-full text-2xl shadow-xl hover:scale-110 transition-all"
          >
            <FaLinkedin />
          </a>
          <a
            href={siteContent.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 w-16 h-16 flex items-center justify-center rounded-full text-2xl shadow-xl hover:scale-110 transition-all"
          >
            <FaInstagram />
          </a>
          <a
            href={siteContent.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 w-16 h-16 flex items-center justify-center rounded-full text-2xl shadow-xl hover:scale-110 transition-all"
          >
            <FaTwitter />
          </a>
          <a
            href={siteContent.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 w-16 h-16 flex items-center justify-center rounded-full text-2xl shadow-xl hover:scale-110 transition-all"
          >
            <FaFacebookF />
          </a>
          <a
            href={siteContent.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 w-16 h-16 flex items-center justify-center rounded-full text-2xl shadow-xl hover:scale-110 transition-all"
          >
            <FaYoutube />
          </a>
          <a
            href={siteContent.socials.linktree}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-800 hover:bg-purple-700 w-16 h-16 flex items-center justify-center rounded-full text-2xl shadow-xl hover:scale-110 transition-all"
          >
            <SiLinktree />
          </a>
        </div>

        <p className="mt-10 text-white/60 text-sm">
          Want to email or work together?{" "}
          <a href="/connect" className="underline hover:text-purple-400">
            Contact me here
          </a>
        </p>
      </div>
    </Layout>
  );
}
