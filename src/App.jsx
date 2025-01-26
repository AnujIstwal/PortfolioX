import Marquee from "react-fast-marquee";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const imageSrc = "anuj.png";

  useEffect(() => {
    // Simulate a delay for loading (e.g., fetching data)
    const timer = setTimeout(() => {
      const img = new Image();
      img.src = imageSrc;
      img.onload = () => setIsLoading(false);
    }, 2000); // Adjust the timeout as needed

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, [imageSrc]);

  if (isLoading)
    return (
      <div className="flex h-screen w-full items-center justify-center bg-[#E6E6E6] transition-all sm:px-6 sm:py-4">
        <div className="relative flex h-full w-full items-center justify-center rounded-3xl bg-[#1A1A1A] transition-all">
          <Loader />
        </div>
      </div>
    );

  return (
    <div className="h-full w-full flex-col items-center justify-center bg-[#E6E6E6] transition-all sm:px-6 sm:py-4">
      <Home />
      <Marquee className="flex h-20 gap-6" autoFill>
        <img src="marquee/Scaler.png" className="h-8" />
        <img src="marquee/coursera.png" className="h-8" />
        <img src="marquee/nptel.png" className="h-8" />
        <img src="marquee/internshala.png" className="h-8" />
        <img src="marquee/infosys_Springboard.png" className="h-8" />
        <img src="marquee/swayam.png" className="h-8" />
      </Marquee>
      <About />
      <Projects />
    </div>
  );
}

export default App;
