import React from "react";

export default function SkillIcon({ className, children }) {
  return (
    <div
      className={`${className} flex h-16 w-16 items-center justify-center rounded-2xl border border-[#3f3f3f] bg-[#262626] p-2 text-5xl opacity-90`}
    >
      {children}
    </div>
  );
}
