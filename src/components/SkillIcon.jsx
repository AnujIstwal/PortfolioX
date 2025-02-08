import React from "react";

export default function SkillIcon({ className, children }) {
  return (
    <div
      className={`${className} flex h-12 w-12 items-center justify-center rounded-2xl border border-[#3f3f3f] bg-[#262626] p-2 text-5xl opacity-90 sm:h-16 sm:w-16`}
    >
      {children}
    </div>
  );
}
