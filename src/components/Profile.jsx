import {
  FaArrowDown,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { resume_download_link, whatsappLink } from "../utils/data";
import { IoLocationOutline } from "react-icons/io5";

const interests = [
  { name: "Designing", icon: "designing.png" },
  { name: "Anime", icon: "anime.png" },
  { name: "Cricket", icon: "cricket.png" },
  { name: "Music", icon: "music.png" },
];

export default function Profile() {
  return (
    <div className="flex h-full w-full max-w-[340px] flex-col items-center gap-y-6 rounded-[1.6rem] border border-gray-300 bg-[#DCDCDC]/80 px-4 py-4 shadow-sm">
      {/* Shimmering effect */}
      <motion.span
        animate={{ backgroundPosition: ["-200% 0%", "200% 0%"] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
        style={{
          background:
            "linear-gradient(110deg, #D3EFC8 30%, #dffad4 50%, #D3EFC8 70%)",
          backgroundSize: "200% auto",
        }}
        className="self-end rounded-full border border-[#09AC00] px-2 py-1 text-xs text-[#09AC00]"
      >
        Open to work
      </motion.span>

      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#202020] to-[#4d4d4d]">
            <img src="profile.png" className="rounded-full" />
          </div>
          <h1 className="mt-2 text-2xl font-bold tracking-wide text-neutral-700">
            Anuj Kumar
          </h1>
          <div className="mt-1 flex w-full gap-4">
            <div className="flex items-center justify-center gap-1 text-neutral-500">
              <IoLocationOutline />
              <span className="text-[.8rem]">India</span>
            </div>

            <div className="flex items-center justify-center gap-1 text-neutral-500">
              <img src="speak.png" alt="logo" className="w-4" />
              <span className="text-[.8rem]">English, Hindi</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-center gap-2">
        <a
          href={whatsappLink}
          target="_blank"
          className="mt-auto flex items-center justify-center gap-2 rounded-full bg-[#2B2B2B] px-6 py-2 text-[.92rem] text-gray-300 transition-colors hover:bg-[#202020]"
        >
          <FaWhatsapp className="text-xl" /> Message
        </a>

        <a
          href={resume_download_link}
          download
          className="mt-auto flex items-center justify-center gap-2 rounded-full bg-rose-500 px-4 py-2 text-[.92rem] text-gray-100 transition-colors hover:bg-rose-600"
        >
          <FaArrowDown /> CV
        </a>
      </div>

      <div className="mx-auto flex h-full w-full px-2">
        <div className="flex h-full w-full flex-col gap-2 rounded-2xl border border-zinc-300 bg-neutral-100/70 px-4 py-3 shadow-sm">
          <span className="text-sm font-normal uppercase tracking-wide text-neutral-500">
            interests
          </span>
          <div className="flex flex-wrap gap-2 font-mono">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-x-2 rounded-full border border-zinc-400 px-2 py-[.1rem]"
              >
                <img
                  src={`interests/${interest.icon}`}
                  alt={interest.name}
                  className="h-4 w-4"
                />
                <span className="text-sm text-neutral-500">
                  {interest.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3">
        <a
          href="https://github.com/AnujIstwal"
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer"
        >
          <FaGithub className="text-xl text-[#999999] transition-all hover:text-gray-500" />
        </a>
        <a
          href="https://www.linkedin.com/in/anuj-kumar-393196200/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="text-xl text-[#999999] transition-all hover:text-gray-500" />
        </a>
        <a
          href="https://www.instagram.com/anujistwal?utm_source=qr&igsh=cXloc2p6ZHFyeTU1"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className="text-xl text-[#999999] transition-all hover:text-gray-500" />
        </a>
      </div>
    </div>
  );
}
