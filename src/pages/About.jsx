import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Education from "../components/Education";
import PersonalDetails from "../components/PersonalDetails";
import Profile from "../components/Profile";
import Description from "../components/Description";

export default function About() {
  return (
    <div
      id="about"
      className="relative mx-auto flex h-full w-full flex-col items-center justify-center rounded-3xl bg-[#D8D8D8] px-2 py-4 sm:w-[90%] sm:px-10 sm:py-8"
    >
      <div className="flex h-full w-full flex-col sm:w-[70%]">
        <span className="md:5xl font-rage text-4xl text-red-600">About me</span>
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
