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
        <div
          className="h-full rounded-full"
          style={{
            width: `${barValue}%`,
            backgroundImage: `linear-gradient(to right,${from},${to})`,
          }}
        ></div>
      </div>
    </div>
  );
}
