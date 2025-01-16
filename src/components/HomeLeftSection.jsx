import React from "react";
import SkillBar from "./SkillBar";
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const skills = [
  "MERN stack",
  "Web designing",
  "UI/UX",
  "Software Testing",
  "Frontend",
  "Backend",
  "+2",
  "DevOps",
  "React",
];

// Animation Variants
const containerVariants = {
  hidden: {
    opacity: 0.5,
    x: -50, // Start slightly below
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

export default function HomeLeftSection() {
  return (
    <div className="z-20 order-2 flex w-full flex-col items-start justify-center gap-5 overflow-hidden bg-transparent px-5 pb-5 md:order-first md:w-80 md:justify-end md:p-5">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex h-52 w-full flex-col gap-2 rounded-3xl border border-[#4d4d4d] bg-[#262626] px-6 py-4"
      >
        <span className="border-b border-b-[#4D4D4D] pb-2 font-semibold text-[#E6E6E6]">
          Proficiency
        </span>

        {/* Skill component */}
        <div className="flex w-full flex-col gap-3">
          {/* skill bars*/}
          <SkillBar
            image="Bootstrap.png"
            skillName="Bootstrap"
            from="#7C4DFF"
            to="#F58DE2"
            barValue={90}
          />
          <SkillBar
            image="mui.png"
            skillName="Material UI"
            from="#29B6F6"
            to="#6EDDF0"
            barValue={80}
          />
          <SkillBar
            image="Supabase.png"
            skillName="Supabase"
            from="#71C674"
            to="#D2D749"
            barValue={70}
          />
          <SkillBar
            image="photoshop.png"
            skillName="Photoshop"
            from="#AE4CD5"
            to="#fc62a5"
            barValue={80}
          />
        </div>
      </motion.div>

      {/* Pills Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex w-full flex-col gap-6 rounded-3xl bg-gradient-to-r from-[#C1C1C1] to-[#a5a5a5] px-5 py-4"
      >
        <div
          id="skills-container"
          className="flex max-h-24 w-full flex-wrap justify-start gap-1 overflow-hidden"
        >
          {skills.map((skill, index) => (
            <span
              key={index}
              className="whitespace-nowrap rounded-full bg-gradient-to-br from-gray-50 to-gray-200 px-3 py-1 font-mono text-sm text-gray-800"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5, ease: "easeIn" }}
        className="flex w-full items-center gap-5 text-[#E6E6E6]"
      >
        <button
          type="button"
          className="group flex grow items-center justify-center gap-1 rounded-[1rem] bg-[#4D4D4D] px-8 py-5 font-medium transition-all duration-300 hover:bg-[#242424]"
        >
          <span className="transition-all duration-300 group-hover:-translate-x-2/4 group-hover:opacity-0">
            View Resume
          </span>
          <IoMdArrowRoundForward className="text-lg transition-all duration-300 group-hover:-translate-x-12 group-hover:text-2xl" />
        </button>

        <button
          type="button"
          className="group flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500 p-6 transition-all duration-300 hover:bg-red-600"
        >
          <FaDownload className="text-lg transition-all duration-300 group-hover:rotate-180 group-hover:scale-125" />
        </button>
      </motion.div>
    </div>
  );
}
