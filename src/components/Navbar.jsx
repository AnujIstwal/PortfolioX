import {
  IoCall,
  IoHome,
  IoHomeOutline,
  IoPerson,
  IoPersonOutline,
} from "react-icons/io5";

import { motion } from "framer-motion";
import { useContext } from "react";
import { NavbarContext } from "../context/NavbarContextFile";
import { Link } from "react-scroll";
import { PiCertificate, PiCertificateFill } from "react-icons/pi";
import { AiFillProject, AiOutlineProject } from "react-icons/ai";

export default function Navbar() {
  const { activePage, setActivePage } = useContext(NavbarContext);

  return (
    <div className="fixed top-0 z-50 h-[3.5rem] w-full bg-[#F9F9F9]/70 backdrop-blur-2xl">
      <div className="flex h-full w-full items-center justify-center">
        <nav className="w-full text-[0.9rem] text-slate-900">
          <motion.div
            initial={{ y: -50, opacity: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="container mx-auto flex items-center justify-between px-4 sm:justify-normal"
          >
            <img src="Logo.png" alt="logo" className="w-8" />
            <div className="hidden w-full items-center sm:flex sm:justify-center">
              <ul className="flex space-x-16">
                <li
                  className={
                    activePage === "home" ? "font-bold text-zinc-800" : ""
                  }
                >
                  <Link
                    to="home"
                    className="cursor-pointer hover:underline"
                    spy={true}
                    onSetActive={() => setActivePage("home")}
                    smooth={true}
                    duration={1500}
                    onClick={() => setActivePage("home")}
                  >
                    Home
                  </Link>
                </li>
                <li
                  className={
                    activePage === "about" ? "font-bold text-zinc-800" : ""
                  }
                >
                  <Link
                    to="about"
                    className="cursor-pointer hover:underline"
                    spy={true}
                    onSetActive={() => setActivePage("about")}
                    smooth={true}
                    duration={1500}
                    onClick={() => setActivePage("about")}
                  >
                    About
                  </Link>
                </li>
                <li
                  className={
                    activePage === "certificates"
                      ? "font-bold text-zinc-800"
                      : ""
                  }
                >
                  <Link
                    to="certificates"
                    className="cursor-pointer hover:underline"
                    spy={true}
                    onSetActive={() => setActivePage("certificates")}
                    smooth={true}
                    duration={1500}
                    onClick={() => setActivePage("certificates")}
                  >
                    Certificates
                  </Link>
                </li>
                <li
                  className={
                    activePage === "projects" ? "font-bold text-zinc-800" : ""
                  }
                >
                  <Link
                    to="projects"
                    className="cursor-pointer hover:underline"
                    spy={true}
                    onSetActive={() => setActivePage("projects")}
                    smooth={true}
                    duration={1500}
                    onClick={() => setActivePage("projects")}
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </div>

            {/* Mobile Navbar */}
            <div className="flex w-full items-center justify-center text-zinc-800 sm:hidden">
              <ul className="flex space-x-8">
                <li
                  className={
                    activePage === "home"
                      ? "font-bold text-zinc-800"
                      : "text-zinc-400"
                  }
                >
                  <Link
                    to="home"
                    className="cursor-pointer hover:underline"
                    spy={true}
                    onSetActive={() => setActivePage("home")}
                    smooth={true}
                    duration={1500}
                    onClick={() => setActivePage("home")}
                  >
                    <IoHome
                      className={`text-2xl ${activePage === "home" ? "inline-block" : "hidden"}`}
                    />
                    <IoHomeOutline
                      className={`text-2xl ${activePage === "home" ? "hidden" : "inline-block"}`}
                    />
                  </Link>
                </li>
                <li
                  className={
                    activePage === "about"
                      ? "font-bold text-zinc-800"
                      : "text-zinc-400"
                  }
                >
                  <Link
                    to="about"
                    className="cursor-pointer hover:underline"
                    spy={true}
                    onSetActive={() => setActivePage("about")}
                    smooth={true}
                    duration={1500}
                    onClick={() => setActivePage("about")}
                  >
                    <IoPerson
                      className={`text-2xl ${activePage === "about" ? "inline-block" : "hidden"}`}
                    />
                    <IoPersonOutline
                      className={`text-2xl ${activePage === "about" ? "hidden" : "inline-block"}`}
                    />
                  </Link>
                </li>
                <li
                  className={
                    activePage === "certificates"
                      ? "font-bold text-zinc-800"
                      : "text-zinc-400"
                  }
                >
                  <Link
                    to="certificates"
                    className="cursor-pointer hover:underline"
                    spy={true}
                    onSetActive={() => setActivePage("certificates")}
                    smooth={true}
                    duration={1500}
                    onClick={() => setActivePage("certificates")}
                  >
                    <PiCertificateFill
                      className={`text-2xl ${activePage === "certificates" ? "inline-block" : "hidden"}`}
                    />
                    <PiCertificate
                      className={`text-2xl ${activePage === "certificates" ? "hidden" : "inline-block"}`}
                    />
                  </Link>
                </li>
                <li
                  className={
                    activePage === "projects"
                      ? "font-bold text-zinc-800"
                      : "text-zinc-400"
                  }
                >
                  <Link
                    to="projects"
                    className="cursor-pointer hover:underline"
                    spy={true}
                    onSetActive={() => setActivePage("projects")}
                    smooth={true}
                    duration={1500}
                    onClick={() => setActivePage("projects")}
                  >
                    <AiFillProject
                      className={`text-2xl ${activePage === "projects" ? "inline-block" : "hidden"}`}
                    />
                    <AiOutlineProject
                      className={`text-2xl ${activePage === "projects" ? "hidden" : "inline-block"}`}
                    />
                  </Link>
                </li>
              </ul>
            </div>

            <button
              type="button"
              className="hidden rounded-xl border border-zinc-500 px-6 py-2 transition-colors hover:bg-zinc-200/60 sm:block"
            >
              <Link to="contact" smooth={true} duration={2000}>
                Contact
              </Link>
            </button>
            <div
              type="button"
              className="flex gap-2 rounded-xl border border-zinc-500 p-3 sm:hidden"
            >
              <Link
                to="contact"
                smooth={true}
                duration={2000}
                className="cursor-pointer"
              >
                <IoCall className="text-lg text-zinc-700" />
              </Link>
            </div>
          </motion.div>
        </nav>
      </div>
    </div>
  );
}
