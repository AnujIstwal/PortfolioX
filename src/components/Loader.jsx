import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-y-2">
        <motion.img
          initial={{ opacity: 0.5, scale: 2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeIn", duration: 0.8 }}
          src="Logo.png"
          alt="loader"
        />
      </div>
    </div>
  );
}
