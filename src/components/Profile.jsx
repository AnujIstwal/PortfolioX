import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaCheckCircle,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { resume_download_link } from "../utils/data";

export default function Profile() {
  return (
    <motion.div
      // initial={{ x: -100, opacity: 0 }}
      // whileInView={{ x: 0, opacity: 1 }}
      // transition={{ ease: "easeIn", duration: 0.6 }}
      className="flex h-full w-full max-w-sm flex-col items-center gap-6 rounded-[1.6rem] bg-[#EEEEEE] px-6 py-10 shadow-sm"
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#2B2B2B] to-[#686868]">
        <img src="profile.png" className="rounded-full" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl font-bold text-[#474747]">Anuj Kumar</h1>
        <p className="inline-flex items-center justify-center gap-2 text-xs text-green-600">
          Open to work <FaCheckCircle className="text-green-600" />
        </p>
      </div>
      <div className="flex items-center justify-center gap-6">
        <span>
          <FaGithub className="text-3xl text-[#808080] transition-all hover:text-gray-300" />
        </span>
        <span>
          <FaLinkedin className="text-3xl text-[#808080] transition-all hover:text-gray-300" />
        </span>
        <span>
          <FaInstagram className="text-3xl text-[#808080] transition-all hover:text-gray-300" />
        </span>
      </div>

      <a
        href={resume_download_link}
        download
        className="mt-auto rounded-full bg-[#2B2B2B] px-5 py-2 text-sm text-gray-100 hover:bg-[#202020]"
      >
        Download CV
      </a>
    </motion.div>
  );
}
