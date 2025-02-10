import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex items-start justify-center gap-x-2">
        <motion.img
          initial={{ opacity: 0.5, scale: 3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeIn", duration: 1 }}
          src="logo4.png"
          alt="loader"
          className="w-16"
        />
        <motion.h1
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ ease: "easeIn", duration: 0.8, delay: 1.2 }}
          className="bg-gradient-to-r from-zinc-800 to-zinc-500 bg-clip-text text-5xl font-black uppercase text-transparent sm:font-bold"
        >
          Anuj
        </motion.h1>
      </div>
    </div>
  );
}
