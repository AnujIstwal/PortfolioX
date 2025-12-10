import { useEffect, useState } from "react";
import { NavbarProvider } from "./context/NavbarContext";
import { Analytics } from "@vercel/analytics/react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

import LoaderNew from "./components/LoaderNew";
//import Loader from "./components/Loader";
import Certificates from "./components/Certificates";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

const imagePaths = [
  "anuj.png",
  "icons/React.svg",
  "icons/Figma.svg",
  "icons/Node.svg",
  "icons/Firebase.svg",
  "icons/Tailwindcss.svg",
  "icons/Mongo.svg",
  "Bootstrap.png",
  "mui.png",
  "Supabase.png",
  "photoshop.png",
  "certificates/1.png",
  "certificates/2.png",
  "certificates/3.png",
  "certificates/4.png",
  "certificates/5.png",
  "certificates/6.png",
  "certificates/7.png",
  "companies/1.png",
  "companies/2.png",
  "companies/3.png",
  "companies/4.png",
  "companies/5.png",
  "companies/6.png",
  "project/audiomart.png",
  "project/cryptoverse.png",
  "project/shareme.png",
  "project/subscription.png",
  "project/travel-advisor.png",
];

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let loadedCount = 0;
    imagePaths.forEach((path) => {
      const img = new Image();
      img.src = path;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === imagePaths.length) {
          // Wait for an extra 2 seconds before hiding the loader
          setTimeout(() => {
            setIsLoading(false);
          }, 6000); // 2000ms delay
        }
      };
    });
  }, []);

  if (isLoading)
    return (
      <div className="flex h-screen w-full items-center justify-center bg-[#f9f9f9] sm:px-6 sm:py-4">
        <div className="relative flex h-full w-full items-center justify-center rounded-3xl">
          <LoaderNew />
        </div>
      </div>
    );

  return (
    <NavbarProvider>
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-y-8 overflow-y-hidden bg-[#F9F9F9] px-1 sm:px-6">
        <Navbar />
        {/* <CustomCursor /> */}

        <Home />
        <About />
        <Certificates />
        <Projects />
        <Contact />
        <Footer />

        {/* For views analytics -- vercel thing*/}
        <Analytics />
      </div>
    </NavbarProvider>
  );
}

export default App;
