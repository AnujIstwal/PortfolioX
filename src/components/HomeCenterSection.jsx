import React from "react";
import { motion } from "framer-motion";

const imageVariants = {
  hidden: {
    opacity: 0.8,
    scale: 0.8, // Start smaller
    y: 100,
  },
  visible: {
    opacity: 1,
    scale: 1, // Scale to full size
    y: 0,
    transition: {
      duration: 0.8, // Animation duration
      ease: "easeInOut",
    },
  },
};

export default function HomeCenterSection() {
  return (
    <div className="relative order-first flex grow flex-col items-center justify-end md:order-2 md:overflow-hidden">
      {/* Container */}
      <div className="relative w-full text-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "circInOut" }}
          className="absolute left-[30%] top-[14%] z-0 -translate-x-1/2 -translate-y-1/2 transform"
        >
          <h1 className="max-w-[300px] text-4xl font-extrabold text-[#ededed] md:text-6xl">
            <span className="md:4xl font-rage text-3xl text-red-500">I'm</span>{" "}
            Anuj Kumar
            {/* <Typewriter
                    options={{
                      strings: ["Anuj Kumar", "Web Developer"],
                      autoStart: true,
                      loop: true,
                      delay: 150,
                      pauseFor: 2000,
                    }}
                  /> */}
          </h1>
        </motion.div>

        {/* Image Section */}
        <div className="relative z-10 w-full bg-transparent">
          <motion.img
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            src="anuj.png" // Replace with your actual image
            alt="Anuj Kumar"
            className="z-10 mx-auto h-auto w-72 translate-y-3 transform md:w-96"
          />

          {/* Icon Section */}
          <div className="absolute inset-0 z-50">
            <img src="React.png" className="absolute left-16 top-36 w-20" />
            <img src="Figma.png" className="absolute bottom-48 left-10 w-20" />
            <img src="Node.png" className="absolute bottom-10 left-16 w-20" />
            <img
              src="Firebase.png"
              className="absolute bottom-10 right-16 w-20"
            />
            <img
              src="Tailwindcss.png"
              className="absolute right-16 top-36 w-20"
            />
            <img
              src="MongoDb.png"
              className="absolute bottom-48 right-10 w-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
