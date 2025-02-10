import { useEffect, useState } from "react";
import { NavbarProvider } from "./context/NavbarContext";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Loader from "./components/Loader";
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
  "certificates/1.jpg",
  "certificates/2.jpg",
  "certificates/3.jpg",
  "certificates/4.jpg",
  "certificates/5.jpg",
  "certificates/6.jpg",
  "certificates/7.jpg",
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
          }, 2000); // 2000ms delay
        }
      };
    });
  }, []);

  if (isLoading)
    return (
      <div className="flex h-screen w-full items-center justify-center bg-[#f9f9f9] sm:px-6 sm:py-4">
        <div className="relative flex h-full w-full items-center justify-center rounded-3xl">
          <Loader />
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
      </div>
    </NavbarProvider>
  );
}

export default App;
