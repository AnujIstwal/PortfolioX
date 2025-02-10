import { motion } from "framer-motion";
import PropTypes from "prop-types";

export default function SkillIcon({ className, children }) {
  return (
    <motion.div
      className={`${className} flex h-12 w-12 items-center justify-center rounded-2xl border border-[#3f3f3f] bg-[#262626] p-2 text-5xl opacity-90 sm:h-16 sm:w-16`}
    >
      {children}
    </motion.div>
  );
}

SkillIcon.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
