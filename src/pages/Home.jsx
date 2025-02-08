import HomeRightSection from "../components/HomeRightSection";
import HomeCenterSection from "../components/HomeCenterSection";
import HomeLeftSection from "../components/HomeLeftSection";
import { motion } from "framer-motion";
import ScrollToNext from "../components/ScrollToNext";

export default function Home() {
  return (
    <section
      id="home"
      className="relative flex h-full w-full flex-col items-center justify-center gap-y-2 md:h-screen"
    >
      <div className="h-14 w-full"></div>
      <motion.div
        initial={{ y: 800 }}
        animate={{ y: 0 }}
        transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
        className="relative flex h-full w-full flex-col rounded-3xl bg-[#1A1A1A] md:rounded-[1.7rem]"
      >
        <div className="relative flex h-full w-full flex-col items-center justify-center pt-8 md:flex-row md:items-end">
          <HomeLeftSection />
          <HomeCenterSection />
          <HomeRightSection />
        </div>
      </motion.div>
      <ScrollToNext />
    </section>
  );
}
