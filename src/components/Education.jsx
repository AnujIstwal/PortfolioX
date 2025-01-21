import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";

const education = [
  {
    img: "CU_logo.jpg",
    degree: "B.E-CSE",
    school: "Chandigarh University",
    score: "84.3",
    year: "2020-2024",
  },
  {
    img: "aps_logo.png",
    degree: "Intermediate(XII)",
    school: "A.P.S Chandimandir",
    score: "91.8",
    year: "2019-2020",
  },
  {
    img: "aps_logo.png",
    degree: "Matriculation(X)",
    school: "A.P.S Chandimandir",
    score: "93",
    year: "2017-2018",
  },
];

export default function Education() {
  return (
    <div className="h-full w-full rounded-[1.6rem] bg-[#EEEEEE] px-8 py-6">
      <div className="flex w-full items-center justify-between border-b border-gray-300 pb-2">
        <h3 className="text-lg font-bold text-gray-800">Education</h3>
        <button className="text-lg text-gray-600">
          <span className="inline-block">
            <IoMdArrowRoundForward />
          </span>
        </button>
      </div>

      {/* Visible on mobile device */}

      <div className="flex w-full flex-col gap-4 pt-4">
        {education.map((data) => (
          <div className="flex items-center justify-center gap-2">
            <img
              src={data.img}
              alt={data.school}
              className="w-8 sm:mr-2 sm:w-7"
            />
            <div className="flex grow flex-col gap-2">
              <p className="text-[0.9rem] font-bold text-[#464646]">
                {data.degree}
              </p>
              <p className="grow truncate text-left text-[0.92rem] text-[#464646] sm:text-[.9rem]">
                {data.school}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-center font-extrabold text-green-600 sm:text-[1.1rem]">
                {data.score}
              </p>
              <p className="text-center text-sm text-[#6F6D6D] sm:text-[.8rem]">
                {data.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
