import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="flex h-full items-center justify-center">
      {/* <video autoPlay muted className="w-24 object-cover">
        <source src="output.webm" type="video/webm" />
      </video> */}

      <div className="flex items-start justify-center gap-x-2">
        <motion.img
          initial={{ opacity: 0.2, scale: 3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeIn", duration: 1 }}
          src="logo4.png"
          alt="loader"
          className="w-20"
        />
        <motion.h1
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ ease: "easeIn", duration: 1, delay: 1.2 }}
          className="bg-gradient-to-r from-zinc-800 via-zinc-500/90 to-zinc-600 bg-clip-text text-[2.6rem] font-black uppercase tracking-widest text-transparent sm:font-bold"
        >
          anuj
        </motion.h1>
      </div>
    </div>
  );
}
