import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io";

// Animation Variants
const containerVariants = {
  hidden: {
    opacity: 0.5,
    x: 50, // Start slightly below
  },
  visible: {
    opacity: 1,
    x: 0, // Slide to its original position
    transition: {
      duration: 0.8, // Animation duration
      ease: "easeInOut",
    },
  },
};

export default function HomeRightSection() {
  return (
    <>
      {/* Right part */}
      <div className="order-last flex w-full flex-col items-center justify-end space-y-8 overflow-hidden bg-transparent md:w-96">
        {/* Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex h-64 w-72 flex-col items-center space-y-2 rounded-[2rem] border border-[#4d4d4d] bg-[#262626] p-8"
        >
          <h4 className="w-full border-b border-b-[#4D4D4D] pb-2 text-[1rem] text-[#E6E6E6]">
            Let's build it together
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
        <button
          type="button"
          className="group flex h-14 w-72 items-center justify-center space-x-2 rounded-[1.2rem] bg-[#DDDDDD] text-[#1A1A1A] transition-all duration-300 hover:bg-[#d8d8d8]"
        >
          <span className="text-lg font-bold transition-all duration-300 group-hover:-translate-x-10 group-hover:opacity-0">
            View my work
          </span>

          <IoMdArrowRoundForward className="text-xl transition-all duration-300 group-hover:-translate-x-16 group-hover:scale-150" />
        </button>

        {/* social n/w */}

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5, ease: "easeIn" }}
          className="flex items-center justify-center space-x-3 pb-6"
        >
          <span>
            <FaGithub className="text-2xl text-[#808080] transition-all hover:text-gray-300" />
          </span>
          <span>
            <FaLinkedin className="text-2xl text-[#808080] transition-all hover:text-gray-300" />
          </span>
          <span>
            <FaInstagram className="text-2xl text-[#808080] transition-all hover:text-gray-300" />
          </span>
        </motion.div>
      </div>
    </>
  );
}
