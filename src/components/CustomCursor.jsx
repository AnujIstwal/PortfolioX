import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  // Update cursor position
  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-50 h-10 w-10 rounded-full bg-red-500"
      animate={{
        x: position.x - 20,
        y: position.y - 20,
        scale: hovered ? 1.5 : 1,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  );
};

export default CustomCursor;
