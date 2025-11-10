import { motion } from "framer-motion";
import SkillIcon from "./SkillIcon";

export default function HomeCenterSection() {
  return (
    <div className="relative order-first flex w-full grow flex-col items-center justify-end md:order-2 md:w-auto md:overflow-hidden">
      {/* Container */}
      <div className="relative w-full max-w-xl text-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3.5, ease: "easeInOut" }}
          className="absolute left-[30%] top-[14%] z-0 -translate-x-1/2 -translate-y-1/2 transform"
        >
          <h1 className="max-w-[250px] text-5xl font-black text-[#ededed] antialiased md:max-w-[300px] md:text-6xl md:font-extrabold">
            <span className="md:4xl font-rage text-3xl text-rose-500">
              I&apos;m
            </span>{" "}
            Anuj Kumar
          </h1>
        </motion.div>

        {/* Image Section */}
        <div className="relative z-10 w-full bg-transparent">
          <motion.img
            initial={{
              opacity: 0.8,
              y: 200,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 1, delay: 2.9, ease: "easeInOut" }}
            src="anuj.png" // Replace with your actual image
            alt="Anuj Kumar"
            className="z-10 mx-auto h-auto w-72 translate-y-3 transform md:w-96"
          />

          {/* Icon Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 4, ease: "easeInOut" }}
            className="absolute inset-0 z-50"
          >
            <SkillIcon className="absolute left-[12%] top-[30%] rotate-6">
              <img src="icons/React.svg" className="w-8 sm:w-12" />
            </SkillIcon>
            <SkillIcon className="absolute bottom-[34%] left-[8%] rotate-2">
              <img src="icons/Figma.svg" className="h-8 sm:h-10" />
            </SkillIcon>
            <SkillIcon className="absolute bottom-[8%] left-[12%] -rotate-6">
              <img src="icons/Node.svg" className="w-10 sm:w-12" />
            </SkillIcon>
            <SkillIcon className="absolute bottom-[8%] right-[12%] rotate-6">
              <img src="icons/Firebase.svg" className="h-9 sm:h-11" />
            </SkillIcon>
            <SkillIcon className="absolute right-[12%] top-[30%] -rotate-6">
              <img src="icons/Tailwindcss.svg" className="w-10 sm:w-12" />
            </SkillIcon>
            <SkillIcon className="absolute bottom-[34%] right-[8%] rotate-3">
              <img src="icons/Mongo.svg" className="w-10 sm:w-12" />
            </SkillIcon>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
