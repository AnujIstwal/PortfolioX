import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import HomeRightSection from "../components/HomeRightSection";
import HomeCenterSection from "../components/HomeCenterSection";
import HomeLeftSection from "../components/HomeLeftSection";
import { IoMdArrowDown } from "react-icons/io";

export default function Home() {
  return (
    <>
      {/* <!-- Curved shape div --> */}
      <div className="relative flex h-full w-full flex-col rounded-3xl bg-[#1A1A1A]">
        <Navbar />
        <div className="flex h-full w-full flex-col md:flex-row">
          <HomeLeftSection />
          <HomeCenterSection />
          <HomeRightSection />
        </div>
        <div className="absolute bottom-0 left-[48%] z-30 animate-bounce rounded-full bg-gray-800 p-3 text-3xl text-gray-100">
          <IoMdArrowDown />
        </div>
      </div>
    </>
  );
}
