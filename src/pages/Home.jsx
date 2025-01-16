import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import HomeRightSection from "../components/HomeRightSection";
import HomeCenterSection from "../components/HomeCenterSection";
import HomeLeftSection from "../components/HomeLeftSection";
import { IoMdArrowDown } from "react-icons/io";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  //Image Preloading
  const imageSrc = "anuj.png";

  useEffect(() => {
    // Simulate a delay for loading (e.g., fetching data)
    const timer = setTimeout(() => {
      const img = new Image();
      img.src = imageSrc;
      img.onload = () => setIsLoading(false);
    }, 2000); // Adjust the timeout as needed

    return () => clearTimeout(timer);
  }, [imageSrc]);

  return (
    <div className="flex h-full w-screen items-center justify-center bg-[#F3F3F3] p-2 transition-all md:h-screen">
      {/* <!-- Curved shape div --> */}
      <div className="relative flex h-full w-full flex-col rounded-3xl bg-[#1A1A1A]">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Navbar />
            <div className="flex h-full w-full flex-col md:flex-row">
              <HomeLeftSection />
              <HomeCenterSection />
              <HomeRightSection />
            </div>
            <div className="absolute bottom-0 left-1/2 z-30 animate-bounce rounded-full bg-red-500 p-3 text-3xl">
              <IoMdArrowDown />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
