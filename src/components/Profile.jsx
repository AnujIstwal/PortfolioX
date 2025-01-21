import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Profile() {
  return (
    <div className="flex h-full w-full flex-col items-center gap-6 rounded-[1.6rem] bg-[#EEEEEE] px-6 py-10">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-300">
        <img src="profile.png" className="w-16 rounded-full" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl font-bold text-[#474747]">Anuj Kumar</h1>
        <p className="text-xs text-green-600">Open to work</p>
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

      <button className="mt-auto rounded-full bg-[#2B2B2B] px-5 py-2 text-sm text-gray-100">
        Download CV
      </button>
    </div>
  );
}
