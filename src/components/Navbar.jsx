import React from "react";
import { Link } from "react-router-dom";

import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="text-[0.9rem] text-slate-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:justify-normal">
        <img src="Logo.png" alt="logo" className="w-10" />
        <div className="hidden w-full items-center sm:flex sm:justify-center">
          <motion.ul
            initial={{ y: -50, opacity: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex space-x-12"
          >
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-[#A8A7A7] hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/skills" className="text-[#A8A7A7] hover:underline">
                Skills
              </Link>
            </li>
            <li>
              <Link to="/projects" className="text-[#A8A7A7] hover:underline">
                Projects
              </Link>
            </li>
          </motion.ul>
        </div>
        <button
          type="button"
          className="hidden rounded-2xl bg-red-500 px-6 py-4 text-white sm:block"
        >
          8968059548
        </button>
        <div
          type="button"
          className="flex gap-2 rounded-2xl bg-red-500 px-4 py-4 text-white sm:hidden"
        >
          <IoCall className="text-xl" />
          <IoMail className="text-xl" />
        </div>
      </div>
    </nav>
  );
}
