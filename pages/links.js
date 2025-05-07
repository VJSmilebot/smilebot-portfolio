import Layout from "./_layout";
import {
  FaTelegram, 
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
  FaFacebookF,
  FaYoutube
} from "react-icons/fa6";

import { SiLinktree } from "react-icons/si";

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
            href="https://t.me/smilebotNFT"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 w-16 h-16 flex items-center justify-center rounded-full text-2xl shadow-xl hover:scale-110 transition-all"
          >
            <FaTelegramPlane />
          </a>
          <a
            href="https://www.linkedin.com/in/smilebot/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 w-16 h-16 flex items-center justify-center rounded-full text-2xl shadow-xl hover:scale-110 transition-all"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/smilebotnft/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 w-16 h-16 flex items-center justify-center rounded-full text-2xl shadow-xl hover:scale-110 transition-all"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/smilebot3000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 w-16 h-16 flex items-center justify-center rounded-full text-2xl shadow-xl hover:scale-110 transition-all"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.facebook.com/smilebotproductions"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 w-16 h-16 flex items-center justify-center rounded-full text-2xl shadow-xl hover:scale-110 transition-all"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.youtube.com/channel/UCMNFP8OITxh0WI8S_RVlIlw"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 w-16 h-16 flex items-center justify-center rounded-full text-2xl shadow-xl hover:scale-110 transition-all"
          >
            <FaYoutube />
          </a>
          <a
            href="https://linktr.ee/smilebot"
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
