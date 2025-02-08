import { motion } from "framer-motion";

export default function SkillBar({ image, skillName, from, to, barValue }) {
  return (
    <div className="flex items-center gap-2">
      {/* Skill Icon */}
      <img src={image} alt={skillName} className="w-6 flex-shrink-0" />

      {/* Skill Name */}
      <span
        className="basis-[65%] truncate text-[#e6e6e6]"
        title={skillName} // Tooltip for full text
      >
        {skillName}
      </span>

      {/* Progress Bar */}
      <div className="h-[0.6rem] w-full flex-grow rounded-full bg-[#3D3D3D]">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${barValue}%` }}
          transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="h-full rounded-full"
          style={{
            backgroundImage: `linear-gradient(to right,${from},${to})`,
          }}
        ></motion.div>
      </div>
    </div>
  );
}
