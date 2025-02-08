import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Link } from "react-scroll";

export default function HomeRightSection() {
  return (
    <>
      {/* Right part */}
      <div className="order-last flex w-full max-w-md flex-col items-center justify-end space-y-8 overflow-hidden p-5 md:w-80">
        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.5, ease: "easeInOut" }}
          className="flex h-64 w-full flex-col items-center space-y-2 rounded-[2rem] border border-[#4d4d4d] bg-[#262626] p-8"
        >
          <h4 className="w-full border-b border-b-[#4D4D4D] pb-2 text-[1rem] text-[#E6E6E6]">
            Let&apos;s build it together
          </h4>
          <p className="text-justify text-[0.9rem] text-[#999999]">
            Equipped with strong problem solving skills, I am committed to
            delivering high-quality work within deadlines.
          </p>
          <div className="pt flex h-full w-full text-[#cccccc]">
            <div className="basis-1/2 border-r border-r-[#4D4D4D]">
              <div className="flex items-center space-x-1">
                <h1 className="text-4xl font-bold">5</h1>
                <img src="star.png" className="h-8 w-8" />
              </div>
              <span className="text-sm text-[#999999]">Hackerrank</span>
            </div>
            <div className="basis-1/2 text-center">
              <h1 className="text-4xl font-bold">25+</h1>
              <span className="text-sm text-[#999999]">Top projects</span>
            </div>
          </div>
        </motion.div>

        {/* View my work Button */}
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.8, ease: "easeInOut" }}
          className="w-full"
        >
          <Link
            to="projects"
            smooth={true}
            duration={2000}
            className="group flex h-14 w-full cursor-pointer items-center justify-center space-x-2 rounded-[1.1rem] bg-[#DDDDDD] text-[#1A1A1A] transition-all duration-300 hover:bg-[#d8d8d8]"
          >
            <span className="text-lg font-bold transition-all duration-300 group-hover:-translate-x-10 group-hover:opacity-0">
              View my work
            </span>

            <IoMdArrowRoundForward className="text-xl transition-all duration-300 group-hover:-translate-x-16 group-hover:scale-150" />
          </Link>
        </motion.div>

        {/* social n/w */}

        <motion.div
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4, ease: "easeInOut" }}
          className="flex w-full items-center justify-center space-x-3"
        >
          <a
            href="https://github.com/AnujIstwal"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer"
          >
            <FaGithub className="text-2xl text-[#808080] transition-all hover:text-gray-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/anuj-kumar-393196200/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-2xl text-[#808080] transition-all hover:text-gray-300" />
          </a>
          <span>
            <FaInstagram className="text-2xl text-[#808080] transition-all hover:text-gray-300" />
          </span>
        </motion.div>
      </div>
    </>
  );
}
