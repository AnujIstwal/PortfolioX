import Education from "../components/Education";
import PersonalDetails from "../components/PersonalDetails";
import Profile from "../components/Profile";
import Description from "../components/Description";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative flex h-full w-full flex-col items-center justify-center gap-y-2"
    >
      <div className="h-14 w-full"></div>
      <div className="relative mx-auto flex h-full w-full flex-col items-center justify-center rounded-3xl px-2 py-4 backdrop-opacity-100 md:w-[90%] md:px-10 md:py-8">
        <div className="flex h-full w-full flex-col gap-y-4 lg:w-[90%] xl:w-[70%]">
          <motion.span
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            viewport={{ once: true }}
            className="md:5xl text-center text-4xl font-bold text-[#3a3a3a]"
          >
            Know more about me
          </motion.span>
          <div className="flex h-full w-full flex-col items-center justify-center sm:flex-row">
            {/* Profile */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex h-full w-full basis-[48%] items-center justify-center p-4 sm:p-6"
            >
              <Profile />
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
              className="h-full basis-3/5 px-4 py-6"
            >
              <Description />
            </motion.div>
          </div>

          <div className="flex w-full flex-col items-center justify-center sm:flex-row">
            {/* personal */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex h-full w-full basis-[48%] flex-col items-center px-4 py-5 sm:w-auto"
            >
              <PersonalDetails />
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
              className="flex h-full w-full basis-3/5 items-center justify-center px-4 py-5 sm:w-auto"
            >
              <Education />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
