import Education from "../components/Education";
import PersonalDetails from "../components/PersonalDetails";
import Profile from "../components/Profile";
import Description from "../components/Description";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div
      id="about"
      className="relative mx-auto flex h-full w-full flex-col items-center justify-center rounded-3xl bg-[#D8D8D8] px-2 py-4 backdrop-opacity-100 sm:w-[90%] sm:px-10 sm:py-8"
    >
      <div className="absolute left-0 top-0 -z-10 h-full w-full bg-gradient-to-br from-red-200 via-purple-200 to-yellow-100 opacity-50 blur-2xl"></div>
      <div className="flex h-full w-full flex-col sm:w-[70%]">
        <span className="md:5xl -rotate-12 text-center font-rage text-4xl font-bold text-red-500 transition-all hover:rotate-0">
          About me
        </span>
        <div className="flex h-full w-full flex-col items-center justify-center sm:flex-row">
          {/* Profile */}
          <div className="flex h-full w-full basis-2/5 items-center justify-center p-4 sm:p-6">
            <Profile />
          </div>

          {/* Description */}
          <div className="h-full basis-3/5 px-4 py-6">
            <Description />
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center sm:flex-row">
          {/* personal */}
          <div className="flex h-full w-full basis-2/5 flex-col items-center px-4 py-5 sm:w-auto">
            <PersonalDetails />
          </div>

          {/* Education */}
          <div className="flex h-full w-full basis-3/5 items-center justify-center px-4 py-5 sm:w-auto">
            <Education />
          </div>
        </div>
      </div>
    </div>
  );
}
