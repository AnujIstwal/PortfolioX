import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <section
      id="footer"
      className="sm: relative flex h-screen w-full flex-col items-center justify-center gap-y-2"
    >
      <div className="h-14 w-full"></div>
      <div className="relative flex h-full w-full flex-col items-center justify-center">
        <div className="flex h-full w-full items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-y-4 px-4">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-[#1A1A1A] to-[#585858] bg-clip-text text-center text-5xl font-bold uppercase tracking-wider text-transparent md:text-7xl"
            >
              Let&apos;s work together
            </motion.h1>
            <motion.h3
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-[#6F6F6F] to-[#A5A5A5] bg-clip-text py-1 text-center text-3xl text-transparent md:text-4xl"
            >
              Your next great team member is here!
            </motion.h3>
          </div>
        </div>

        <div className="h-20 w-full">
          <div className="flex h-full w-full items-end justify-between pb-2 text-sm text-[#808080]">
            <h1 className="basis-[40%] text-left">@AJ Portfolio 2025.</h1>
            <div className="basis-[20%] text-center">
              <Link
                to="home"
                smooth={true}
                duration={2000}
                className="cursor-pointer"
              >
                <h1 className="hidden text-center transition-colors hover:text-zinc-800 sm:block">
                  Back On top
                </h1>
                <h1 className="block text-center transition-colors hover:text-zinc-800 sm:hidden">
                  <FaArrowUp className="mx-auto text-lg" />
                </h1>
              </Link>
            </div>
            {/* social n/w */}

            <div className="flex basis-[40%] items-center justify-end space-x-3">
              <a
                href="https://github.com/AnujIstwal"
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer"
              >
                <FaGithub className="text-xl text-[#a1a1a1] transition-colors hover:text-gray-500" />
              </a>
              <a
                href="https://www.linkedin.com/in/anuj-kumar-393196200/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="text-xl text-[#a1a1a1] transition-colors hover:text-gray-500" />
              </a>
              <a
                href="https://www.instagram.com/anujistwal?utm_source=qr&igsh=cXloc2p6ZHFyeTU1"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="text-xl text-[#a1a1a1] transition-colors hover:text-gray-500" />
              </a>
              <span>
                <FaFacebook className="text-xl text-[#a1a1a1] transition-colors hover:text-gray-500" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
