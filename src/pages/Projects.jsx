import React, { useEffect, useRef, useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { GoArrowRight } from "react-icons/go";
import { AnimatePresence, motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "SUBSCRIPTION",
    description:
      "It allows users to create tasks, manage groups, assign tasks, and track progress. It also includes a notification system to keep users updated on task status.",
    image: "project/subscription.png",
    date: "Aug 2024",
  },
  {
    id: 2,
    title: "SHAREME WEB",
    description:
      "Fully Responsive, Masonry layout-based web app with Sanity as a content manager and Google based login system where one can contribute or can explore various creations.",
    image: "project/shareme.png",
    date: "Mar 2024",
  },
  {
    id: 3,
    title: "TRAVEL ADVISOR",
    description:
      "Google Map Platform for fetching the nearby Restaurants, Hotels and Attractions using Rapid API. Helps you in finding the best thing around the globe.",
    image: "project/travel-advisor.png",
    date: "Jan 2024",
  },
  {
    id: 4,
    title: "CRYPTOVERSE",
    description:
      "A cyrpto hub where one can explore the various cryptocurrencies like current trends, news, current market value etc.",
    image: "project/cryptoverse.png",
    date: "Aug 2023",
  },
  {
    id: 5,
    title: "AUDIOMART",
    description:
      "Electronics product-based ecommerce website with Stripe Payment Gateway Integration. Best speakers, headphones, ear pods etc avalaible here.",
    image: "project/audiomart.png",
    date: "Feb 2023",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(2); //store index
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setSelectedProject((prevIndex) => (prevIndex + 1) % projects.length);
    }, 3000); // Change project every 3 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="relative mt-10 flex h-full w-full flex-col items-center justify-center gap-y-6 rounded-3xl bg-[#1A1A1A] px-8 py-12 pt-8 sm:h-screen sm:gap-y-0 sm:p-8">
      <img
        src="project-bg.png"
        alt="project"
        className="absolute h-full w-full object-cover opacity-10 blur-sm"
      />
      <h1 className="text-2xl font-light uppercase tracking-tight text-[#dadada] sm:text-3xl">
        Projects
      </h1>
      <div className="flex h-full w-full grow flex-col items-center justify-center gap-y-6 sm:flex-row">
        {/* Date navbar */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="order-last flex h-full w-full flex-row items-center justify-center gap-4 border-b-2 border-b-[#3f3f3f] px-2 text-[#9D9D9D] sm:order-first sm:w-40 sm:flex-col sm:border-b-0 sm:border-r-2 sm:border-r-[#3f3f3f]"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              animate={{ opacity: selectedProject === index ? 1 : 0.6 }}
              transition={{ duration: 0.5 }}
              className={`relative flex h-14 w-24 cursor-pointer items-center justify-end py-2 transition-all duration-200 ${
                selectedProject === index
                  ? "font-semibold text-white sm:-translate-x-1 sm:text-lg sm:font-bold"
                  : ""
              }`}
              onClick={() => setSelectedProject(index)}
            >
              {selectedProject === index && (
                <motion.span
                  animate={{ opacity: selectedProject === index ? 1 : 0.5 }}
                  transition={{ duration: 0.5 }}
                  className="absolute bottom-0 -translate-x-3 translate-y-8 text-center sm:bottom-auto sm:right-0 sm:translate-x-[4.5rem] sm:translate-y-0"
                >
                  <TiArrowSortedDown className="rotate-180 text-4xl text-white sm:rotate-90" />
                </motion.span>
              )}
              {project.date}
            </motion.div>
          ))}
        </div>

        {/* Project */}
        <div className="flex h-full w-full items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProject}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.4 }}
              className="flex h-auto w-[60%] min-w-full flex-col justify-center py-6 sm:h-80 sm:min-w-96 sm:flex-row sm:py-0"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Project Text */}
              <div className="relative flex flex-col justify-center sm:w-[35%]">
                <h1 className="z-20 text-nowrap pb-2 text-3xl font-bold tracking-tighter text-white/90 sm:text-center sm:text-4xl sm:drop-shadow-[2px_5px_8px_black] md:text-5xl">
                  {projects[selectedProject].title || ""}
                </h1>
                <p className="bottom-0 mt-2 text-sm text-gray-400 sm:absolute">
                  {projects[selectedProject].description}
                </p>
              </div>

              {/* Project Image */}
              <div className="z-10 flex h-full w-full flex-col items-center rounded-lg sm:items-start sm:justify-end">
                <div className="h-52 w-80 scale-[.85] overflow-hidden rounded-[1.6rem] bg-gray-300 sm:scale-100">
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                    src={projects[selectedProject].image}
                    alt={projects[selectedProject].image}
                    className="h-full w-full rounded-[1.6rem]"
                  />
                </div>
                <button
                  type="button"
                  className="flex h-16 w-16 items-center justify-center rounded-full border border-zinc-400 bg-zinc-400/30 transition-all duration-300 hover:bg-zinc-400/50 sm:-translate-y-4 sm:translate-x-4"
                >
                  <GoArrowRight className="text-4xl text-[#D6D6D6]" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
