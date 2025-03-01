import { IoMdArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

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
    <motion.div
      // initial={{ x: 100, opacity: 0 }}
      // whileInView={{ x: 0, opacity: 1 }}
      // transition={{ ease: "easeIn", duration: 0.6 }}
      className="md:max-w-auto h-full w-full max-w-md rounded-[1.6rem] border border-[#C0C0C0] bg-[#DCDCDC]/80 px-8 py-6 shadow-sm"
    >
      <div className="flex w-full items-center justify-between border-b border-gray-400/30 pb-2">
        <h3 className="text-lg font-bold text-gray-800">Education</h3>
        <a
          target="_blank"
          href="https://drive.google.com/drive/folders/1KPhMD9nvRWJgJq6FIeRMON8YdElquhd8?usp=drive_link"
          className="text-lg text-gray-600"
        >
          <span className="inline-block">
            <IoMdArrowRoundForward />
          </span>
        </a>
      </div>

      <div className="flex w-full flex-col gap-4 pt-4">
        {education.map((data, index) => (
          <div
            key={index}
            className="flex items-center justify-center gap-2 transition-colors duration-300 hover:bg-neutral-200"
          >
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
              <p className="text-center font-extrabold text-green-600 sm:text-[1rem]">
                {data.score}
              </p>
              <p className="text-center text-sm text-[#6F6D6D] sm:text-[.8rem]">
                {data.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
