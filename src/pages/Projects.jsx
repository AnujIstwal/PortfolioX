import { useEffect, useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { GoArrowRight } from "react-icons/go";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "../utils/data";

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
    <section
      id="projects"
      className="relative flex h-full w-full flex-col items-center justify-center gap-y-2 pb-6 md:h-screen"
    >
      <div className="h-14 w-full"></div>
      <motion.div
        initial={{ y: 200 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
        className="relative flex h-full w-full flex-col items-center justify-center gap-y-6 rounded-3xl border border-zinc-400 bg-gradient-to-br from-zinc-200/10 to-zinc-400/20 px-8 py-12 pt-8 sm:h-screen sm:gap-y-0 sm:p-2 md:p-8"
      >
        <img
          src="project-bg.png"
          alt="project"
          className="absolute h-full w-full object-cover opacity-10 blur-sm"
        />
        {/* <div className="flex w-full items-center justify-center">
          <span className="md:5xl text-center text-4xl font-bold text-[#3a3a3a] transition-all">
            What I&apos;ve been working on
          </span>
        </div> */}

        <div className="flex h-full w-full grow flex-col items-center justify-center gap-y-6 sm:flex-row">
          {/* Date navbar */}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="order-last flex h-full w-full flex-row items-center justify-center gap-4 border-b border-b-zinc-400/80 px-2 sm:order-first sm:w-40 sm:flex-col sm:border-b-0 sm:border-r sm:border-r-zinc-400/80"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                animate={{ opacity: selectedProject === index ? 1 : 0.6 }}
                transition={{ duration: 0.5 }}
                className={`relative flex h-14 w-24 cursor-pointer items-center justify-end py-2 transition-all duration-200 ${
                  selectedProject === index
                    ? "font-semibold text-zinc-700 sm:-translate-x-1 sm:text-lg sm:font-bold"
                    : "text-black"
                }`}
                onClick={() => setSelectedProject(index)}
              >
                {selectedProject === index && (
                  <motion.span
                    animate={{ opacity: selectedProject === index ? 1 : 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="absolute bottom-0 -translate-x-3 translate-y-8 text-center sm:bottom-auto sm:right-0 sm:translate-x-[4.5rem] sm:translate-y-0"
                  >
                    <TiArrowSortedDown className="rotate-180 text-4xl text-zinc-700 sm:rotate-90" />
                  </motion.span>
                )}
                {project.date}
              </motion.div>
            ))}
          </div>

          {/* Project */}
          <div className="flex h-[480px] w-full items-center justify-center overflow-hidden md:h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProject}
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.4 }}
                className="flex h-auto w-[60%] min-w-full flex-col justify-center gap-y-4 py-6 md:h-80 md:min-w-96 md:flex-row md:py-0"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Project Text */}
                <div className="relative flex flex-col items-center justify-center md:w-[35%]">
                  <h1 className="z-20 text-nowrap pb-2 text-3xl font-bold tracking-tighter text-zinc-800/90 sm:text-center sm:text-4xl sm:drop-shadow-2xl md:text-5xl">
                    {projects[selectedProject].title || ""}
                  </h1>
                  <p className="bottom-0 mt-2 max-w-xs text-justify text-sm text-zinc-700 md:absolute">
                    {projects[selectedProject].description}
                  </p>
                </div>

                {/* Project Image */}
                <div className="z-10 flex h-full w-full flex-col items-center rounded-lg md:items-start md:justify-end">
                  <div className="h-52 w-80 scale-[.85] overflow-hidden rounded-[1.6rem] bg-gray-300 sm:scale-100">
                    <motion.img
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ scale: 1.1 }}
                      src={projects[selectedProject].image}
                      alt={projects[selectedProject].image}
                      className="h-full w-full rounded-[1.6rem] border border-zinc-700/40"
                    />
                  </div>
                  <a
                    href={projects[selectedProject].website}
                    target="_blank"
                    className="flex h-16 w-16 items-center justify-center rounded-full border border-zinc-400 bg-zinc-100/80 transition-all duration-300 hover:bg-zinc-400/50 sm:-translate-y-4 sm:translate-x-4"
                  >
                    <GoArrowRight className="text-4xl text-zinc-800" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
